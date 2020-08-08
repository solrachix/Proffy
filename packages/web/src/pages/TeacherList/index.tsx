import React, { useState, FormEvent } from 'react'
import api from '@proffy/axios-config'

import PageHeader from '../../components/PageHeader'

import Input from '../../components/Input'
import Select from './../../components/Select/index'
import { PageTeacherList, SearchTeachers } from './styles'

import TeacherItem, { Teacher } from '../../components/TeacherItem'

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('')
  const [weekday, setWeekday] = useState('')
  const [time, setTime] = useState('')
  const [teachers, setTeachers] = useState([])

  async function searchTeachers (e: FormEvent) {
    e.preventDefault()
    console.log({
      subject, weekday, time
    })
    await api.get('classes', {
      params: {
        subject, weekday, time
      }
    })
      .then(resp => setTeachers(resp.data))
      .catch(error => alert(error.message))
  }

  return (
    <PageTeacherList>
      <PageHeader title="Estes são os proffys disponíveis.">
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
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />

          <Select
            label="Dia da semana"
            name="week_day"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' }
            ]}
            value={weekday}
            onChange={e => setWeekday(e.target.value)}
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
