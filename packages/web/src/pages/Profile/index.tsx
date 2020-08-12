import React, { useState, FormEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '@proffy/axios-config'
import { useAuth } from '../../contexts/auth'

import minutesInHoursAndMinutes from '../../utils/minutesInHoursAndMinutes'

import PageHeader from '../../components/PageHeader'
import Input, { InputGroup } from '../../components/Input'
import Textarea from './../../components/Textarea/index'
import Select, { OptionsType } from './../../components/Select/index'
import { Container, Main, Avatar, UserAstronaut, ChangeAvatar, Camera } from './styles'

import warningIcon from '../../assets/images/icons/warning.svg'
import { daysOfTheWeek } from './../../utils/daysOfTheWeek'

interface ClassSchedule {
  week_day: number;
  from: number;
  to: number;
}
interface Classes {
  id: number;
  subject: string;
  cost: number;
  class_schedule: ClassSchedule[]
}

const TeacherForm: React.FC = () => {
  const { user } = useAuth()
  const surnameArray = / [\s\S]*$/.exec(user?.name || '')

  const [name, setName] = useState(user?.name.split(' ')[0] || '')
  const [surname, setSurname] = useState(surnameArray ? surnameArray[0] : '')
  const [email, setEmail] = useState(user?.email || '')
  const [whatsapp, setWhatsapp] = useState(user?.whatsapp || '')
  const [bio, setBio] = useState(user?.bio || '')
  const [password, setPassword] = useState('')

  const [subjects, setSubjects] = useState<OptionsType[] | null>(null)
  const [classes, setClasses] = useState<Classes[] | null>(null)
  const [selectedClass, setSelectedClass] = useState<Classes | null>(null)

  useEffect(() => {
    api.get('classes/list').then(response => {
      const { subjects, classes } = response.data

      setClasses(classes)
      setSubjects(
        subjects.map((subject: string) => {
          return { label: subject, value: subject }
        })
      )
    }).catch(error => console.log(error))
  }, [])

  const handleSelectSubject = (e: OptionsType) => {
    if (classes) {
      const [selected] = classes.filter((props): boolean => props.subject === e.value)
      console.log(daysOfTheWeek()[selected.class_schedule[0].week_day])

      setSelectedClass(selected)
    }
  }

  const updateUserData = (e: FormEvent) => {
    e.preventDefault()

    api.post('user/update', {
      name: `${name.trim()} ${surname && surname.trim()}`,
      email,
      whatsapp: whatsapp.trim(),
      bio: bio.trim(),
      password: password.trim()
    }).then(() => {
      alert('dados alterados')
    }).catch(error => console.log(error))
  }

  if (!user) return <div />

  return (
    <Container>
      <PageHeader
        backgroundImg
        align="center"
        pageName="Meu perfil"
        titleComponent={() => (
          <>
            {
              user.avatar
                ? <Avatar src={user.avatar} alt={`Avatar do ${user?.name}`}/>
                : <UserAstronaut />
            }
            <ChangeAvatar title="Alterar avatar">
              <Camera />
            </ChangeAvatar>
          </>
        )}
        title={user.name}
        description="O primeiro passo, é preencher esse formulário de inscrição."
      />

      <Main onSubmit={updateUserData}>
        <fieldset>
          <legend>Seus dados</legend>

          <InputGroup>
            <Input
              name='name'
              label='Nome completo'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />

            <Input
              name='surname'
              label='Sobrenome'
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value)
              }}
            />
          </InputGroup>

          <InputGroup>
            <Input
              flex={6}
              type="email"
              name='email'
              label='E-mail'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />

            <Input
              flex={4}
              name='whatsapp'
              label='WhatsApp'
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value)
              }}
            />
          </InputGroup>

          <Textarea
            name='bio'
            label='Biografia'
            value={bio}
            onChange={(e) => {
              setBio(e.target.value)
            }}
            maxLength={300}
          />

          <Input
            flex={4}
            type='password'
            name='password'
            label='Senha'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso" />
            Importante! <br />
            Preencha todos os dados
          </p>

          <button type="submit" >Salvar</button>
        </footer>

        <fieldset>
          <legend>Sobre a aula</legend>

          <InputGroup className="classData" >
            <Select
              flex={6}
              label="Matéria"
              name="subject"
              onChange={handleSelectSubject}
              options={subjects || []}
              isLoading={!subjects}
              isDisabled={!subjects}
              isSearchable={true}
              required
            />

            <Input
              flex={4}
              label="Custo de sua hora por aula"
              name="cost"
              value={selectedClass?.cost}
              readOnly
            />
          </InputGroup>

        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
          </legend>

          {
            selectedClass?.class_schedule
              ? selectedClass
                .class_schedule
                .map((item: ClassSchedule, index: number) => (
                  <div key={item.week_day} className="schedule-item">
                    <Select
                      label="Dia da semana"
                      name="week_day"
                      options={[]}
                      defaultValue={daysOfTheWeek()[item.week_day]}
                      isDisabled={true}
                    />

                    <Input
                      name='from'
                      label='Das'
                      type='time'
                      value={minutesInHoursAndMinutes(item.from)}
                      readOnly
                    />

                    <Input
                      name='to'
                      label='Até'
                      type='time'
                      value={minutesInHoursAndMinutes(item.to)}
                      readOnly
                    />

                  </div>
                ))
              : <p>Selecione uma matéria</p>
          }

          {
            selectedClass
              ? <p><Link to={`/class/${selectedClass.id}`}>Abrir Materia</Link></p>
              : <p><Link to='/class/new'>Criar Materia</Link></p>
          }

        </fieldset>
      </Main>
    </Container>
  )
}

export default TeacherForm
