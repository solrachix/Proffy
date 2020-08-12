import React, { useState, FormEvent } from 'react'
import api from '@proffy/axios-config'
import { daysOfTheWeek } from './../../utils/daysOfTheWeek'

import PageHeader from '../../components/PageHeader'

import Input from '../../components/Input'
import Select from './../../components/Select/index'
import { PageTeacherList, SearchTeachers } from './styles'

import TeacherItem, { Teacher } from '../../components/TeacherItem'

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')
  const [teachers, setTeachers] = useState([])

  async function searchTeachers (e: FormEvent) {
    e.preventDefault()
    console.log({
      subject, week_day, time
    })
    await api.get('classes', {
      params: {
        subject, week_day, time
      }
    })
      .then(resp => setTeachers(resp.data))
      .catch(error => alert(error.message))
  }

  return (
    <PageTeacherList>
      <PageHeader pageName="Procurar Professores" title="Estes são os proffys disponíveis.">
        <SearchTeachers onSubmit={searchTeachers}>
          <Select
            label="Matéria"
            name="subject"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Historia', label: 'Historia' },
              { value: 'Filosofia', label: 'Filosofia' }
            ]}

            onChange={(e) => setSubject(e.value)}
          />

          <Select
            label="Dia da semana"
            name="week_day"
            options={daysOfTheWeek()}
            onChange={(e) => setWeek_day(e.value)}
          />

          <Input type="time" label="Hora" name="time"
            value={time} onChange={e => setTime(e.target.value)} />

          <button type='submit'>
            Buscar
          </button>
        </SearchTeachers>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem key={teacher.id} teacher={teacher} />
          )
        })}
      </main>
    </PageTeacherList>
  )
}

export default TeacherList
