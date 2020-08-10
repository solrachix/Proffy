import React, { useCallback, useState, useEffect, useContext } from 'react'
import { Image, ScrollView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import api from '@proffy/axios-config'

import { ThemeContext } from 'styled-components'
import * as S from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

const Landing: React.FC = () => {
  const theme = useContext(ThemeContext).colors
  const { navigate } = useNavigation()

  const [totalConnections, setTotalConnections] = useState(0)

  useEffect(() => {
    (async () => {
      try {
        // const api = apiFunc('mobile')
        const { data } = await api.get('connections')

        setTotalConnections(data.total)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  const handleNavigateToGiveClassesPage = useCallback(() => {
    navigate('GiveClasses')
  }, [navigate])

  const handleNavigateToStudyPage = useCallback(() => {
    navigate('Study')
  }, [navigate])

  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={{
        flex: Platform.OS === 'ios' ? 1 : 0
      }}
    >
      <S.Container>
        <S.Column height={42} bgColor={theme.themeColors.primary.normal}>
          <S.BannerContainer>
            <S.Banner source={landingImg} />
          </S.BannerContainer>
        </S.Column>

        <S.Column height={58}>
          <S.Title>
          Seja bem-vindo, {'\n'}
            <S.Title bold>O que deseja fazer?</S.Title>
          </S.Title>

          <S.ButtonsContainer>
            <S.Button primary onPress={handleNavigateToStudyPage}>
              <S.Icon source={studyIcon} />
              <S.ButtonText>Estudar</S.ButtonText>
            </S.Button>

            <S.Button secondary onPress={handleNavigateToGiveClassesPage}>
              <S.Icon source={giveClassesIcon} />
              <S.ButtonText>Dar aulas</S.ButtonText>
            </S.Button>
          </S.ButtonsContainer>

          <S.TotalConnection>
          Total de {totalConnections} conexões já realizadas{' '}
            <Image source={heartIcon} />
          </S.TotalConnection>
        </S.Column>
      </S.Container>
    </ScrollView>
  )
}

export default Landing
