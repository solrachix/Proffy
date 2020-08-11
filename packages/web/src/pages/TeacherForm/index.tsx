import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import api from '@proffy/axios-config'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from './../../components/Textarea/index'
import Select from './../../components/Select/index'
import { Container, Main } from './styles'
import { FaTrashAlt } from 'react-icons/fa'

import warningIcon from '../../assets/images/icons/warning.svg'

const INITIAL_SCHEDULE_ITEM = { week_day: '0', from: '', to: '' }

const TeacherForm: React.FC = () => {
  const history = useHistory()

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    INITIAL_SCHEDULE_ITEM
  ])

  const addNewScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      INITIAL_SCHEDULE_ITEM
    ])
  }
  const setScheduleItemsValue = (
    position: number,
    field: string,
    value: string
  ) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }

      return scheduleItem
    })

    setScheduleItems(updatedScheduleItems)
  }

  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault()

    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems
      })
      .then(() => {
        alert('Cadastro realizado com sucesso!')

        history.push('/')
      })
      .catch(() => {
        alert('Erro no cadastro.')
      })
  }

  const deleteItem = (i:number) => {
    const list = [...scheduleItems]
    list.splice(i, 1)
    setScheduleItems(list)
  }
  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <Main onSubmit={handleCreateClass}>
        <fieldset>
          <legend>Seus dados</legend>

          <Input
            name='name'
            label='Nome completo'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            required
          />

          <Input
            name='avatar'
            label='Avatar'
            value={avatar}
            onChange={(e) => {
              setAvatar(e.target.value)
            }}
            required
          />

          <Input
            name='whatsapp'
            label='WhatsApp'
            value={whatsapp}
            onChange={(e) => {
              setWhatsapp(e.target.value)
            }}
            required
          />

          <Textarea
            name='bio'
            label='Biografia'
            value={bio}
            onChange={(e) => {
              setBio(e.target.value)
            }}
            required
          />

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            label="Matéria"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value)
            }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Historia', label: 'Historia' },
              { value: 'Filosofia', label: 'Filosofia' }
            ]}
            required
          />

          <Input
            label="Custo de sua hora por aula"
            name="cost"
            value={cost}
            onChange={(e) => {
              setCost(e.target.value)
            }}
            required
          />

        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button onClick={addNewScheduleItem}>
            + Novo Horário
            </button>
          </legend>

          {
            scheduleItems.map((item, index) => (
              <div key={item.week_day} className="schedule-item">
                <Select
                  label="Dia da semana"
                  name="week_day"
                  value={item.week_day}
                  onChange={(e) =>
                    setScheduleItemsValue(index, 'week_day', e.target.value)
                  }
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' }
                  ]}
                  required
                />

                <Input
                  name='from'
                  label='Das'
                  type='time'
                  value={item.from}
                  onChange={(e) =>
                    setScheduleItemsValue(index, 'from', e.target.value)
                  }
                  required
                />

                <Input
                  name='to'
                  label='Até'
                  type='time'
                  value={item.to}
                  onChange={(e) =>
                    setScheduleItemsValue(index, 'to', e.target.value)
                  }
                  required
                />

                <div className="trash" onClick={() => deleteItem(index)}>
                  <FaTrashAlt />
                </div>
              </div>
            ))
          }

        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso" />
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="submit" >Salvar</button>
        </footer>
      </Main>
    </Container>
  )
}

export default TeacherForm
