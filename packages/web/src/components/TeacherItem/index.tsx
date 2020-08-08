import React from 'react'
import api from '@proffy/axios-config'

import { TeacherItemComponent } from './styles'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

export interface Teacher {
  id: number,
  name: string,
  avatar: string,
  bio: string,
  cost: number,
  subject: string,
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem : React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection () {
    api.post('connections', { user_id: teacher.id })
  }
  return (
    <TeacherItemComponent>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`} target="_blank">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </TeacherItemComponent>
  )
}

export default TeacherItem
