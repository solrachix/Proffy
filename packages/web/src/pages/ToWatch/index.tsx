import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import CodeDrop from '../../assets/Code-Drops-38.mp4'
import { ReactComponent as BackVideo } from '../../assets/images/icons/backVideo.svg'
import { ReactComponent as FastForward } from '../../assets/images/icons/fastForward.svg'
import { ReactComponent as TheaterMode } from '../../assets/images/icons/theaterMode.svg'

import Header from './../../components/Header/index'
import { Container, Content, VideoContainer, Player, Item } from './styles'
import Text from './../../components/Text'

const ToWatch: React.FC = () => {
  const videoRef = useRef<ReactPlayer>(null)
  const [theaterMode, setTheaterMode] = useState(false)

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
  return (
    <Container>
      <Header />

      <Content>
        <VideoContainer>
          <Player>
            <ReactPlayer
              ref={videoRef}
              url={CodeDrop}
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
                <Item>
                  <button type="button"></button>
                  <a href="">link</a>
                </Item>
                <Item actived={true}>
                  <button type="button"></button>
                  <a href="">link</a>
                </Item>
                <Item>
                  <button type="button"></button>
                  <a href="">link</a>
                </Item>

              </ul>

            </div>

          </aside>
        </VideoContainer>

        <Text text="testee" size={3} weight="bold" />
        <Text text="testeetesteetesteetesteetestee" size={1} />
      </Content>

    </Container>
  )
}

export default ToWatch
