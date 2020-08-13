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
    const subject = filters.subject
    const time = String(filters.time)

    if (!week_day) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      })
    }

    const timeInMinutes = convertHourToMinutes(time)

    const trx = await db.transaction()

    try {
      const classes = await trx('classes')
        .whereExists(function () {
          if (!timeInMinutes) {
            return this.select('class_schedule.*')
              .from('class_schedule')
              .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
              .whereRaw('`class_schedule`.`week_day` = ??', [week_day])
          }

          return this.select('class_schedule.*')
            .from('class_schedule')
            .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
            .whereRaw('`class_schedule`.`week_day` = ??', [week_day])
            .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
            .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
        })
        .where('classes.subject', 'like', `%${subject || ''}%`)
      // .join('midia', 'classes.id', '=', 'midia.classe_id')
        .join('users', 'classes.user_id', '=', 'users.id')
        .select('classes.*', 'classes.id as class_id', 'classes.whatsapp as whatsappClass', 'users.*')

      for (const key in classes) {
        if (Object.prototype.hasOwnProperty.call(classes, key)) {
          const classe = classes[key]

          const schedule = await trx('class_schedule')
            .select('*')
            .where('class_id', '=', classe.class_id)

          classe.class_schedule = schedule
          delete classe.password
          delete classe.user_id
        }
      }

      await trx.commit()

      return response.json(classes)
    } catch (error) {
      await trx.rollback()

      return response.status(400).json({
        error
      })
    }
  }

  async show (request: Request, response: Response): Promise<Response<unknown>> {
    const { userId } = request.headers

    const trx = await db.transaction()

    try {
      const subjects = []
      const classes = await trx('classes')
        .join('users', 'classes.user_id', '=', 'users.id')
        .where('users.id', '=', String(userId))
        .select('classes.*', 'classes.id as class_id', 'classes.whatsapp as whatsappClass', 'users.*')

      for (const key in classes) {
        if (Object.prototype.hasOwnProperty.call(classes, key)) {
          const classe = classes[key]

          const schedule = await trx('class_schedule')
            .select('*')
            .where('class_id', '=', classe.class_id)

          subjects.push(classe.subject)
          classe.class_schedule = schedule
          delete classe.password
          delete classe.user_id
        }
      }

      await trx.commit()

      return response.json({ subjects, classes })
    } catch (error) {
      await trx.rollback()

      return response.status(400).json({
        error
      })
    }
  }

  async create (request: Request, response: Response): Promise<Response<unknown>> {
    const user_id = request.headers.userId
    const {
      whatsapp,
      description,
      subject,
      cost,
      schedule
    } = request.body

    const verifyClass = await db('classes')
      .join('users', 'classes.user_id', '=', 'users.id')
      .where('users.id', '=', String(user_id))
      .where('classes.subject', '=', String(subject))
      .first()

    if (verifyClass) {
      return response.status(400).json({ error: 'Uma aula com essa materia já está cadastrada' })
    }

    const trx = await db.transaction()

    try {
      const [class_id] = await trx('classes').insert({
        whatsapp,
        description,
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
