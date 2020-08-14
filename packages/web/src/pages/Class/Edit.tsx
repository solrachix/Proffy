import React, { useEffect, useState, FormEvent } from 'react'
import { useHistory, Link } from 'react-router-dom'
import api from '@proffy/axios-config'

import { useAuth } from '../../contexts/auth'

import DropZone from '../../components/DropZone'
import PageHeader from '../../components/PageHeader'
import Input, { InputGroup } from '../../components/Input'
import Textarea from './../../components/Textarea/index'
import Select from './../../components/Select/index'
import { Container, Main, Me, UserAstronaut } from './styles'
import { FaTrashAlt } from 'react-icons/fa'

import warningIcon from '../../assets/images/icons/warning.svg'
import Concluded from './../../components/Concluded/index'

import { daysOfTheWeek } from './../../utils/daysOfTheWeek'
import minutesInHoursAndMinutes from './../../utils/minutesInHoursAndMinutes'

const INITIAL_SCHEDULE_ITEM = { week_day: 0, from: '', to: '' }

interface ClassProps {
  subject: string;
  cost: number;
  description: string;
  whatsapp: null,
  user_id: number;
  class_id: number;
  whatsappClass: number;
  name: string;
  email: string;
  avatar: string | null,
  bio: string | null;
  schedules: { week_day: number, from: string, to: string }[]
}

interface VideoProps {
  title: string | null;
  description: string | null;
  data: File | null
}
type Field = 'subject' | 'cost' | 'description' |'whatsapp' | 'user_id' | 'class_id' | 'whatsappClass' | 'name' | 'email' | 'avatar' | 'bio' | 'schedules'
type Video = 'title' | 'description' | 'data'

interface RouterProps {
  match: {
    params: {
      class_id: string
    }
  }
}

const EditClass: React.FC<RouterProps> = (props) => {
  const class_id = props.match.params.class_id
  const { user } = useAuth()
  const history = useHistory()

  const [Class, setClass] = useState<ClassProps | null>(null)
  const [isTheUserLoggedIn, setIsTheUserLoggedIn] = useState<boolean>(false)
  const [done, setDone] = useState(false)
  const [addVideo, setAddVideo] = useState(false)
  const [video, setVideo] = useState<VideoProps>({
    title: null,
    description: null,
    data: null
  })

  useEffect(() => {
    (async function () {
      try {
        const response = await api.get<ClassProps>(`/classes/list/${class_id}`)
        const schedules = response.data.schedules.map(schedule => {
          return {
            ...schedule,
            from: minutesInHoursAndMinutes(Number(schedule.from)),
            to: minutesInHoursAndMinutes(Number(schedule.to))
          }
        })

        response.data.schedules = schedules
        setIsTheUserLoggedIn(user?.id === response.data.user_id)
        setClass(response.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const ChangeClassStatus = (
    field: Field,
    value: number | string
  ) => {
    if (Class) {
      setClass({ ...Class, [field]: value })
    }
  }

  const updateClassData = (e: FormEvent) => {
    e.preventDefault()

    if (Class) {
      api.post('classes/update', {
        class_id,
        whatsapp: Class.whatsapp,
        description: Class.description,

        cost: Class.cost,
        schedule: Class.schedules
      }).then(() => {
        // alert('dados alterados')

        setDone(true)

        setInterval(() => history.push('/'), 5000)
      }).catch(error => console.log(error))
    }
  }

  const addNewScheduleItem = () => {
    if (Class) {
      setClass({
        ...Class,
        schedules: [...Class.schedules, INITIAL_SCHEDULE_ITEM]
      })
    }
  }
  const setScheduleItemsValue = (
    position: number,
    field: string,
    value: string
  ) => {
    if (Class) {
      const updatedScheduleItems = Class?.schedules.map((schedule, index) => {
        if (index === position) {
          return { ...schedule, [field]: value }
        }

        return schedule
      })
      setClass({
        ...Class,
        schedules: updatedScheduleItems
      })
    }
  }

  const deleteItem = (i:number) => {
    if (Class) {
      const schedules = [...Class.schedules]
      schedules.splice(i, 1)
      setClass({ ...Class, schedules })
    }
  }

  const ChangeVideoData = (
    field: Video,
    value: number | string | File
  ) => {
    setVideo({ ...video, [field]: value })
  }
  const videoUpload = async () => {
    const data = new FormData()

    if (video.title && video.description && video.data) {
      data.append('title', video.title)
      data.append('description', video.description)
      data.append('files', video.data)

      await api.post(`classes/${class_id}/newMidia`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      setAddVideo(false)
      setVideo({
        title: null,
        description: null,
        data: null
      })
    }
  }

  if (!Class) {
    return <div />
  }

  return (
    <>
      <Concluded
        actived={done}
        title="Dados alterados!"
        description="Tudo certo, seus dados foram atualizados. Agora é só ficar de olho no seu WhatsApp."
        buttonText="Ir para a home"
      />
      <Container>
        <PageHeader
          pageName="Editar Aula"
          title="Edite as suas aulas"
          description="O primeiro passo, é editar os campos desse formulário."
        />

        <Main onSubmit={updateClassData}>
          <fieldset>
            <legend>Seus dados</legend>

            <InputGroup>
              <Me>
                {
                  Class?.avatar
                    ? <img src={Class.avatar} alt={`Avatar do ${Class.name}`}/>
                    : <UserAstronaut />
                }
                <strong>{
                  `${Class.name}`
                }</strong>
              </Me>
              <Input
                flex={4}
                name='whatsapp'
                label='WhatsApp'
                value={Class?.whatsapp || ''}
                onChange={(e) => {
                  ChangeClassStatus('whatsapp', e.target.value)
                }}
                readOnly={!isTheUserLoggedIn}
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
                options={[]}
                defaultValue={{ value: Class.subject, label: Class.subject }}
                isClearable
                isDisabled={true}
              />

              <Input
                flex={4}
                label="Custo de sua hora por aula"
                name="cost"
                value={Class.cost}
                onChange={(e) => {
                  ChangeClassStatus('cost', e.target.value)
                }}
                readOnly={!isTheUserLoggedIn}
              />
            </InputGroup>

            <Textarea
              name='description'
              label='Descrição'
              value={Class.description}
              onChange={(e) => {
                ChangeClassStatus('description', e.target.value)
              }}
              maxLength={300}
              readOnly={!isTheUserLoggedIn}
            />
          </fieldset>
          <fieldset className="videoZone">
            <legend>
              Videos gratuitos
              {isTheUserLoggedIn && <button type="button" onClick={() => setAddVideo(true)}>
                + Novo Video
              </button>
              }
            </legend>

            {
              addVideo && (
                <>
                  <DropZone
                    text="Video aula"
                    onFileUploaded={(file) => ChangeVideoData('data', file)} />

                  <Input
                    name='title'
                    label='Titulo'
                    value={video.title || ''}
                    onChange={(e) => {
                      ChangeVideoData('title', e.target.value)
                    }}
                  />

                  <Textarea
                    name='videoDescription'
                    label='Descrição do video'
                    value={video.description || ''}
                    onChange={(e) => {
                      ChangeVideoData('description', e.target.value)
                    }}
                    maxLength={300}
                  />

                  <button type="button" onClick={videoUpload} >Enviar video</button>
                </>
              )
            }
            {
              !addVideo && <button type="button" onClick={() => history.push(`/to_watch/${class_id}`)} >Assistir aos videos</button>
            }

          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              {isTheUserLoggedIn && <button type="button" onClick={addNewScheduleItem}>
                + Novo Horário
              </button>
              }
            </legend>

            {
              Class.schedules.map((item, index) => (
                <div key={item.week_day} className="schedule-item">
                  <Select
                    label="Dia da semana"
                    name="week_day"
                    options={[]}
                    defaultValue={daysOfTheWeek()[item.week_day]}
                    isDisabled={!isTheUserLoggedIn}
                  />

                  <Input
                    name='from'
                    label='Das'
                    type='time'
                    value={item.from}
                    onChange={(e) =>
                      setScheduleItemsValue(index, 'from', e.target.value)
                    }
                    readOnly={!isTheUserLoggedIn}
                  />

                  <Input
                    name='to'
                    label='Até'
                    type='time'
                    value={item.to}
                    onChange={(e) =>
                      setScheduleItemsValue(index, 'to', e.target.value)
                    }
                    readOnly={!isTheUserLoggedIn}
                  />

                  { isTheUserLoggedIn &&
                    <div className="trash" onClick={() => deleteItem(index)}>
                      <FaTrashAlt />
                    </div>
                  }

                </div>
              ))
            }

          </fieldset>
          {
            isTheUserLoggedIn && (
              <footer>
                <p>
                  <img src={warningIcon} alt="Aviso" />
              Importante! <br />
              Preencha todos os dados
                </p>

                <button type="submit" >Salvar</button>
              </footer>
            )
          }
        </Main>
      </Container>
    </>
  )
}

export default EditClass
