import React, { useState, useRef } from 'react'

// import Video from 'react-native-video'
// Import React Native Video to play video
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls'
// Media Controls to control Play/Pause/Seek and full screen

import VideoDeExemplo from '../../assets/Code-Drops-38.mp4'

import { Video as video } from 'expo-av'
import Text from '../Text'
import {
  Container,
  Video,
  VideosAvailable,
  ButtonVideosAvailable,
  PseudoLineElementBefore, PseudoLineElementAfter,
  Button,
  PseudoBallElementBefore, PseudoBallElementAfter
} from './styles'

const VideoRoom: React.FC = () => {
  const videoRef = useRef<video>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  // const [isFullScreen, setIsFullScreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  // const [paused, setPaused] = useState(false)
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING)
  // const [screenType, setScreenType] = useState<'stretch' | 'contain' | 'cover' | 'none' | undefined>('contain')

  const onLoad = data => {
    setDuration(data.duration)
    setIsLoading(false)
  }

  const onLoadStart = () => setIsLoading(true)

  // const onSeek = seek => {
  //   // Handler for change in seekbar
  //   if (videoRef.current) videoRef.current.seek(seek)
  // }

  // const onPaused = playerState => {
  //   // Handler for Video Pause
  //   setPaused(!paused)
  //   setPlayerState(playerState)
  // }

  // const onReplay = () => {
  //   // Handler for Replay
  //   setPlayerState(PLAYER_STATES.PLAYING)

  //   if (videoRef.current) videoRef.current.seek(0)
  // }

  // const onProgress = data => {
  //   console.log('a')
  //   // Video Player will continue progress even if the video already ended
  //   if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
  //     setCurrentTime(data.currentTime)
  //   }
  // }

  // const onLoad = data => {
  //   setDuration(data.duration)
  //   setIsLoading(false)
  // }

  // const onLoadStart = () => setIsLoading(true)

  // const onEnd = () => setPlayerState(PLAYER_STATES.ENDED)

  // const onError = (error) => console.log('Oh! ', error)

  // const exitFullScreen = () => {
  //   console.log('Exit full screen')
  // }

  // const enterFullScreen = () => {}

  // const onFullScreen = () => {
  //   if (screenType === 'contain') { setScreenType('cover') } else setScreenType('contain')
  // }
  // const renderToolbar = () => (
  //   <View>
  //     <Text text="toolbar" />
  //   </View>
  // )

  // const onSeeking = currentTime => setCurrentTime(currentTime)

  return (
    <Container>

      {/* <Video
        ref={videoRef}
        source={VideoDeExemplo}

        onEnd={onEnd}
        onFullScreen={isFullScreen}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}

        paused={paused}
        resizeMode={screenType}
        volume={10}
        source={{ uri: 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' }}
        // style={styles.mediaPlayer}
      />

      <MediaControls
        duration={duration}
        isLoading={isLoading}
        mainColor="#333"
        isFullScreen={false}
        onFullScreen={onFullScreen}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking}
        playerState={playerState}
        progress={currentTime}
        // toolbar={renderToolbar}
      />

       */}

      <Video
        height={300}
        videoProps={{
          // @ts-ignore
          // ref: props => (videoRef = props),
          shouldPlay: true,
          rate: 1,
          volume: 10,
          resizeMode: video.RESIZE_MODE_CONTAIN,
          source: VideoDeExemplo,

          onLoad,
          onLoadStart
        }}
        inFullscreen={false}
        hideControlsTimerDuration={1000}
        fadeInDuration={100}
        fadeOutDuration={100}
        quickFadeOutDuration={100}

        showControlsOnLoad={true}
        showFullscreenButton={true}

        // ICONES
        // fullscreenEnterIcon={() => <Text text="seilaa" />}
        // fullscreenExitIcon={() => <Text text="seilaa" />}
        // playIcon={() => <Text text="seilaa" />}
        // pauseIcon={() => <Text text="seilaa" />}
        // replayIcon={() => <Text text="seilaa" />}
        // spinner={() => <Text text="seilaa" />}
      />

      <Text text="Titulo" size={30} weight="bold" style={{ paddingHorizontal: '3%', marginTop: '4%' }} />
      <VideosAvailable>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
          <ButtonVideosAvailable key={item}>
            <PseudoLineElementBefore />
            <Button>
              {/* <PseudoBallElementBefore /> */}
            </Button>
            <Text text="seilaa" />
            <PseudoLineElementAfter />
          </ButtonVideosAvailable>
        ))}

      </VideosAvailable>
    </Container>
  )
}

export default VideoRoom
