import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import api from '@proffy/axios-config'
import { useAuth } from '../../contexts/auth'

import PageHeader from '../../components/PageHeader'
import Input, { InputGroup } from '../../components/Input'
import Textarea from './../../components/Textarea/index'
import Select from './../../components/Select/index'
import { Container, Main, Me, UserAstronaut } from './styles'
import { FaTrashAlt } from 'react-icons/fa'

import warningIcon from '../../assets/images/icons/warning.svg'
import Concluded from './../../components/Concluded/index'

const INITIAL_SCHEDULE_ITEM = { week_day: '0', from: '', to: '' }

const NewClass: React.FC = () => {
  const { user } = useAuth()
  const history = useHistory()

  const [done, setDone] = useState(false)
  const UserName = user?.name?.match(/\s*(\w+ \w+)/g)
  const [whatsapp, setWhatsapp] = useState('')
  const [description, setDescription] = useState('')

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
        whatsapp,
        description,
        subject,
        cost: Number(cost),
        schedule: scheduleItems
      })
      .then(() => {
        // alert('Cadastro realizado com sucesso!')

        setDone(true)

        setInterval(() => history.push('/'), 5000)
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

  if (!user) return <div />

  return (
    <>
      <Concluded
        actived={done}
        title="Cadastro salvo!"
        description="Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp."
        buttonText="Acessar lista"
      />
      <Container>
        <PageHeader
          pageName="Dar Aula"
          title="Que incrível que você quer dar aulas"
          description="O primeiro passo, é preencher esse formulário de inscrição."
        />

        <Main onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <InputGroup>
              <Me>
                {
                  user?.avatar
                    ? <img src={user.avatar} alt={`Avatar do ${user?.name}`}/>
                    : <UserAstronaut />
                }
                <strong>{
                  `${UserName ? UserName[0] : user.name}`
                }</strong>
              </Me>
              <Input
                flex={4}
                name='whatsapp'
                label='WhatsApp'
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(e.target.value)
                }}
                required
              />
            </InputGroup>

          </fieldset>

          <fieldset className="AboutTheClass" >
            <legend>Sobre a aula</legend>

            <InputGroup>
              <Select
                label="Matéria"
                name="subject"
                flex={6}
                options={[
                  { value: 'Artes', label: 'Artes' },
                  { value: 'Biologia', label: 'Biologia' },
                  { value: 'Matemática', label: 'Matemática' },
                  { value: 'Português', label: 'Português' },
                  { value: 'Historia', label: 'Historia' },
                  { value: 'Filosofia', label: 'Filosofia' }
                ]}
                onChange={(e) => {
                  setSubject(e.value)
                }}
                isClearable
                required
              />

              <Input
                flex={4}
                label="Custo de sua hora por aula"
                name="cost"
                value={cost}
                onChange={(e) => {
                  setCost(e.target.value)
                }}
                required
              />
            </InputGroup>

            <Textarea
              name='description'
              label='Descrição'
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
              required
              maxLength={300}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
              + Novo Horário
              </button>
            </legend>

            {
              scheduleItems.map((item, index) => (
                <div key={item.week_day} className="schedule-item">
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
    </>
  )
}

export default NewClass
