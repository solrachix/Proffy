import React, { useRef, useState, useEffect } from 'react'
import api from '@proffy/axios-config'

import ReactPlayer from 'react-player'
import { ReactComponent as BackVideo } from '../../assets/images/icons/backVideo.svg'
import { ReactComponent as FastForward } from '../../assets/images/icons/fastForward.svg'
import { ReactComponent as TheaterMode } from '../../assets/images/icons/theaterMode.svg'

import Header from './../../components/Header/index'
import { Container, Content, VideoContainer, Player, Item } from './styles'
import Text from './../../components/Text'

interface ClassVideo {
  id: number;
  title: string;
  description: string;
  url: string;
}

interface RouterProps {
  match: {
    params: {
      class_id: string
    }
  }
}

const ToWatch: React.FC<RouterProps> = (props) => {
  const class_id = props.match.params.class_id
  const videoRef = useRef<ReactPlayer>(null)
  const [theaterMode, setTheaterMode] = useState(false)
  const [classVideos, setClassVideos] = useState<ClassVideo[] | null>(null)
  const [currentVideo, setCurrentVideo] = useState<ClassVideo | null>(null)

  useEffect(() => {
    (async function () {
      try {
        const response = await api.get(`/classes/${class_id}/listMidia`)

        setCurrentVideo(response.data[0])
        setClassVideos(response.data)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  function fastForward10seconds () {
    const video = videoRef.current
    if (video) {
      const newTime = video.getCurrentTime() + 10
      video.seekTo(newTime, 'seconds')
    }
  }
  function back10seconds () {
    const video = videoRef.current
    if (video) {
      const newTime = video.getCurrentTime() - 10
      video.seekTo(newTime, 'seconds')
    }
  }
  function changeMode () {
    setTheaterMode(!theaterMode)
  }

  if (!classVideos) return <div />
  if (!currentVideo) return <div />

  function changeVideo (id: number) {
    const video = classVideos!.filter(video => video.id === id)[0]

    if (video) {
      console.log(video)
      setCurrentVideo(video)
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <VideoContainer>
          <Player>
            <ReactPlayer
              ref={videoRef}
              url={currentVideo.url}
              config={{
                file: {
                  forceVideo: true
                }
              }}
              controls
              // playing
              // light
              pip
              stopOnUnmount={false}

              width='100%'
              height='auto'
            />
            <footer className="control">
              <div className="buttons">
                <button onClick={back10seconds}>
                  <BackVideo/>
                </button>
                <button onClick={fastForward10seconds}>
                  <FastForward/>
                </button>
              </div>

              <div className="buttons">
                <button onClick={changeMode}>
                  <TheaterMode/>
                </button>
              </div>
            </footer>
          </Player>

          <aside
            className="videosAvailable"
            style={{ display: theaterMode ? 'none' : 'flex' }}
          >
            <div>

              <ul>
                {
                  classVideos.map(video => (
                    <Item key={video.id} actived={(currentVideo.id === video.id)}>
                      <button type="button"></button>
                      <a href="#" onClick={() => changeVideo(video.id)}>{video.title}</a>
                    </Item>
                  ))
                }

              </ul>

            </div>

          </aside>
        </VideoContainer>

        <Text text={currentVideo.title} size={3} weight="bold" />
        <Text text={currentVideo.description} size={1} />
      </Content>

    </Container>
  )
}

export default ToWatch
