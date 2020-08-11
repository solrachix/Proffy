import { Request, Response } from 'express'

import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinutes'

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

interface Filters {
  week_day: number;
  time: string;
  subject: string;
}

export default class ClassController {
  async index (request: Request, response: Response): Promise<Response<unknown>> {
    const filters = request.query

    const week_day = Number(filters.week_day)
    const subject = String(filters.subject)
    const time = String(filters.time)

    if (!week_day || !subject || !time) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      })
    }

    const timeInMinutes = convertHourToMinutes(time)

    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [week_day])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', 'like', `%${subject}%`)
      // .join('midia', 'classes.id', '=', 'midia.classe_id')
      .join('users', 'classes.user_id', '=', 'users.id')
      .select('classes.*', 'users.*')

    classes.map(classe => {
      delete classe.password
    })

    return response.json(classes)
  }

  async create (request: Request, response: Response): Promise<Response<unknown>> {
    const user_id = request.headers.userId
    const {
      subject,
      cost,
      schedule
    } = request.body

    console.log(user_id)
    const trx = await db.transaction()

    try {
      const [class_id] = await trx('classes').insert({
        subject,
        cost,
        user_id
      })

      const classSchedule = schedule.map((scheduleItem:ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to)
        }
      })

      await trx('class_schedule').insert(classSchedule)

      await trx.commit()

      return response.status(201).send()
    } catch (error) {
      await trx.rollback()

      return response.status(400).json({
        error
      })
    }
  }
}
