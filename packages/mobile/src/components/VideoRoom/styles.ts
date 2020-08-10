import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import VideoPlayer from 'expo-video-player'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Video = styled(VideoPlayer).attrs(props => {
  return {
    // width: Dimensions.get('window').width - 20,
    sliderColor: props.theme.colors.themeColors.primary.dark,
    videoBackground: props.theme.colors.themeColors.primary.light
  }
})``

export const VideosAvailable = styled.ScrollView.attrs({
  persistentScrollbar: true,
  contentContainerStyle: {
    padding: 20,
    paddingTop: 0,
    paddingBottom: 30
  }
})`
  width: 94%;
  max-height: 300px;
  padding: 10px;
  margin: auto;
  margin-top: 20px;

  background: ${props => props.theme.colors.themeColors.primary.dark};
  border-radius: 4px;
`

export const ButtonVideosAvailable = styled.View`
  width: 100%;
  margin-top: 20px;

  flex-direction: row;
  align-items: center;
  z-index: 5;
`

const PseudoLineElement = styled.View`
  position: absolute;
  width: 4px;
  height: 100%;

  left: 5px;
  top: 50%;

  background: ${props => props.theme.colors.themeColors.primary.light};
`
export const PseudoLineElementBefore = styled(PseudoLineElement)`
  top: auto;
  bottom: 50%;
`
export const PseudoLineElementAfter = styled(PseudoLineElement)`

`

export const Button = styled.TouchableOpacity`
  position: relative;
  width: 14px;
  height: 14px;
  margin-right: 30px;

  background:  ${props => props.theme.colors.themeColors.primary.light};
  border-radius: 100px;

  flex-shrink: 0;
  z-index: 2;

  /* transition: box-shadow 0.2s ease 0s; */
`

export const PseudoBallElementBefore = styled.View`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 28px;
  height: 28px;

  background: transparent;
  border-width: 3px;
  border-style: solid;
  border-color: ${props => props.theme.colors.themeColors.primary.normal};
  border-radius: 100px;
`

export const PseudoBallElementAfter = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  background: ${props => props.theme.colors.themeColors.primary.normal};
  border-radius: 100px;

  z-index: 2;
`
