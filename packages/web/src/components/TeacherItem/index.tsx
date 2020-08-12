import React from 'react'
import api from '@proffy/axios-config'
import { daysOfTheWeek } from './../../utils/daysOfTheWeek'

import { TeacherItemComponent, UserAstronaut, Schedules, SchedulesItem } from './styles'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import minutesInHoursAndMinutes from './../../utils/minutesInHoursAndMinutes'

interface ClassSchedule {
  week_day: number;
  from: number;
  to: number;
}

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  cost: number;
  subject: string;
  whatsapp: string;
  class_schedule: ClassSchedule[]
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem : React.FC<TeacherItemProps> = ({ teacher }) => {
  const horizontalScroll = 0
  const $ = (elem: string): HTMLElement | null => window.document.querySelector<HTMLElement>(elem)

  function createNewConnection () {
    api.post('connections', { user_id: teacher.id })
  }

  function onDrag (e: React.DragEvent<HTMLUListElement>) {
    /* eslint-disable @typescript-eslint/ban-ts-ignore */
    // @ts-ignore: Unreachable code error
    console.log(e.clientX)
    e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + 3
  }
  return (
    <TeacherItemComponent>
      <header>
        {
          teacher.avatar
            ? <img src={teacher.avatar} alt={teacher.name} />
            : <UserAstronaut />
        }

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <Schedules className="schedules" onDrag={onDrag} >
        {
          daysOfTheWeek().map((day) => {
            let class_schedule: ClassSchedule | null = null
            const active = teacher.class_schedule.some(schedule => {
              const verify = schedule.week_day === Number(day.value)
              if (verify) {
                class_schedule = schedule
              }
              return verify
            })

            return (
              <SchedulesItem key={day.value} active={active} >
                <label> Dia
                  <strong>{day.label.split('-')[0]}</strong>
                </label>
                <label> Horário
                  <strong>{active
                    ? <>
                      {minutesInHoursAndMinutes(class_schedule!.from)}h
                      <br/> - <br/>
                      {minutesInHoursAndMinutes(class_schedule!.to)}h
                    </>
                    : '-'}</strong>
                </label>
              </SchedulesItem>
            )
          })
        }

      </Schedules>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </TeacherItemComponent>
  )
}

export default TeacherItem
