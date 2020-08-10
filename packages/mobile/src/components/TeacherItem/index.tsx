import React, { useCallback, useState, useRef, useContext } from 'react'
import { Image, Linking, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import apiFunc from '@proffy/axios-config'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import { Modalize } from 'react-native-modalize'
import { Portal } from 'react-native-portalize'

import { ThemeContext } from 'styled-components'
import Text from '../Text'
import * as S from './styles'
import VideoRoom from '../VideoRoom/index'

export interface Teacher {
  id: number;
  name: string;
  bio: string;
  cost: number;
  avatar: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorite: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorite }) => {
  const theme = useContext(ThemeContext).colors
  const modalizeRef = useRef<Modalize>(null)
  const [isFavorite, setIsFavorite] = useState(favorite)
  const [selectedTeacherId, setSelectedTeacherId] = useState(0)

  const handleLinkToWhatsapp = useCallback(async () => {
    const api = apiFunc('mobile')

    try {
      await api.post('connections', {
        user_id: teacher.id
      })
      await Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    } catch (err) {
      console.log(err)
    }
  }, [teacher.whatsapp, teacher.id])

  const handleToggleFavorite = useCallback(async () => {
    const favorites = await AsyncStorage.getItem('favorites')
    let favoritesArray = []

    if (favorites) {
      favoritesArray = JSON.parse(favorites)
    }
    if (isFavorite) {
      favoritesArray = favoritesArray.filter(
        (teacherItem: Teacher) => teacherItem.id !== teacher.id
      )
      setIsFavorite(false)
    } else {
      favoritesArray.push(teacher)
      setIsFavorite(true)
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }, [isFavorite, teacher])

  const onOpenModal = (id: number) => {
    setSelectedTeacherId(id)
    return modalizeRef.current?.open()
  }

  return (
    <>
      <S.Container>
        <S.Profile>
          <S.Avatar source={{ uri: teacher.avatar }} />

          <S.ProfileInfo>
            <S.Name>{teacher.name}</S.Name>
            <S.Subject>{teacher.subject}</S.Subject>
          </S.ProfileInfo>
        </S.Profile>

        <S.Bio>{teacher.bio}</S.Bio>

        <S.Footer>
          <S.Price>
          Preço/hora {'   '}
            <S.PriceValue>R$ {teacher.cost}</S.PriceValue>
          </S.Price>

          <S.SeeVideosButton onPress={onOpenModal}>
            <Text text="Videos gratuitos" align="center" color={theme.themeColors.primary.normal} />
          </S.SeeVideosButton>

          <S.ButtonsContainer>
            <S.FavoriteButton
              favorite={isFavorite}
              onPress={handleToggleFavorite}
            >
              {isFavorite ? (
                <Image source={unfavoriteIcon} />
              ) : (
                <Image source={heartOutlineIcon} />
              )}
            </S.FavoriteButton>

            <S.ContactButton onPress={handleLinkToWhatsapp}>
              <Image source={whatsappIcon} />
              <S.ContactButtonText>Entrar em contato</S.ContactButtonText>
            </S.ContactButton>
          </S.ButtonsContainer>
        </S.Footer>
      </S.Container>

      <Portal>
        <Modalize
          ref={modalizeRef}
          modalStyle={{ backgroundColor: theme.themeColors.primary.normal }}
          handleStyle={{ backgroundColor: theme.themeColors.secondary }}

          snapPoint={300}
          handlePosition="inside"
          modalHeight={Dimensions.get('window').height}
          // HeaderComponent={() => <Text text={horoscope?.title || ''} style={{ marginBottom: 20 }} color={theme.orange} size={24} weight={700} />}
        >
          <VideoRoom />
        </Modalize>
      </Portal>
    </>
  )
}

export default TeacherItem
