import React, { useContext, useCallback } from 'react'
import { ThemeContext } from 'styled-components'

import { useAuth } from '../../contexts/auth'

import Text from '../../components/Text'
import AppIntroSlider from 'react-native-app-intro-slider'
import { Container, Column, ImageBackground, Icon, Button, ButtonIcon } from './styles'

interface Slide {
  key: number,
  title: string;
  text: string;
  image: string;
  backgroundColor: string;
}

const slides: Slide[] = [
  {
    key: 1,
    title: '01.',
    text: 'Encontre vários professores para ensinar você',
    image: require('../../assets/images/icons/study.png'),
    backgroundColor: '#5659EB'
  },
  {
    key: 2,
    title: '02.',
    text: 'Ou dê aulas sobre o que você mais conhece',
    image: require('../../assets/images/icons/give-classes.png'),
    backgroundColor: '#F25040'
  }
]

const slideIntroduction: React.FC = () => {
  const theme = useContext(ThemeContext).colors
  const { finishedTheIntro } = useAuth()

  const Controllers = useCallback(() => {
    return (
      <Button>
        <ButtonIcon source={require('../../assets/images/icons/advance.png')} />
      </Button>
    )
  },
  [])

  return (
    <AppIntroSlider
      data={slides}
      onDone={finishedTheIntro}
      renderDoneButton={Controllers}
      renderNextButton={Controllers}
      renderItem={(props: { item: Slide }) => {
        const item = props.item

        return (
          <Container>
            <Column bgColor={item.backgroundColor}>
              <ImageBackground
                resizeMode="center"
                source={require('../../assets/images/background.png')}
              >
                <Icon source={item.image} />
              </ImageBackground>
            </Column>
            <Column>
              <Text
                text={item.title}
                size={40}
                color={theme.themeColors.text.light}
                style={{ marginTop: 20 }}
              />
              <Text
                text={item.text}
                size={20}
                color={theme.themeColors.text.normal}
                weight='bold'
                style={{ width: '80%', marginTop: 20 }}
              />
            </Column>
          </Container>
        )
      }}

      activeDotStyle={{ backgroundColor: theme.themeColors.primary.normal }}
      dotStyle={{ backgroundColor: theme.themeColors.primary.lighter }}
    />
  )
}

export default slideIntroduction
