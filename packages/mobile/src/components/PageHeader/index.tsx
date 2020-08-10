import React, { useCallback } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

import * as S from './styles'

interface PageHeaderProps {
  title: string;
  headerRight?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children
}) => {
  const { navigate } = useNavigation()

  const handleGoBack = useCallback(() => {
    navigate('Landing')
  }, [navigate])

  return (
    <ScrollView bounces={false}>
      <S.Container>
        <S.TopBar>
          <BorderlessButton onPress={handleGoBack}>
            <Image source={backIcon} resizeMode="contain" />
          </BorderlessButton>

          <Image source={logoImg} resizeMode="contain" />
        </S.TopBar>

        <S.Header>
          <S.Title>{title}</S.Title>
          {headerRight}
        </S.Header>
        {children}
      </S.Container>
    </ScrollView>
  )
}

export default PageHeader
