import React, { useState, useCallback } from 'react'
import api from '@proffy/axios-config'
import AsyncStorage from '@react-native-community/async-storage'

import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useFocusEffect } from '@react-navigation/native'

import { Picker } from '@react-native-community/picker'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import * as S from './styles'

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  const [values, setValues] = useState({
    subject: '',
    week_day: '',
    time: ''
  })

  const handleToggleFiltersVisible = useCallback(() => {
    setIsFiltersVisible(state => !state)
  }, [])

  const onChangeValue = useCallback((name: string, text: string) => {
    setValues(state => ({ ...state, [name]: text }))
  }, [])

  const loadFavorites = useCallback(async () => {
    const res = await AsyncStorage.getItem('favorites')
    if (res) {
      const favoriteTeachers = JSON.parse(res)
      setFavorites(favoriteTeachers.map((teacher: Teacher) => teacher.id))
    }
  }, [])

  const handleFiltersSubmit = useCallback(async () => {
    try {
      loadFavorites()
      console.log('opa')
      const { data } = await api.get('classes', {
        params: {
          ...values
        }
      })

      setTeachers(data)
      setIsFiltersVisible(false)
    } catch (err) {
      console.log(err)
    }
  }, [values, loadFavorites])

  useFocusEffect(() => {
    loadFavorites()
  })

  const headerRight = (
    <BorderlessButton onPress={handleToggleFiltersVisible}>
      <Feather name="filter" size={20} color="#FFF" />
    </BorderlessButton>
  )

  return (
    <S.Container>
      <PageHeader title="Proffys disponíveis" headerRight={headerRight}>
        {isFiltersVisible && (
          <S.SearchForm>
            <S.Label>Matéria</S.Label>

            <S.InputSelect>
              <Picker
                style={{ color: '#c1bccc' }}
                selectedValue={values.subject}
                onValueChange={(itemValue, itemIndex) =>
                  onChangeValue('subject', String(itemValue))
                }
                itemStyle={{ backgroundColor: 'grey' }}
              >
                <Picker.Item label="Artes" value="Artes" />
                <Picker.Item label="Biologia" value="Biologia" />
                <Picker.Item label="Ciência" value="Ciência" />
                <Picker.Item label="Química" value="Química" />
                <Picker.Item label="Física" value="Física" />
                <Picker.Item label="Matemática" value="Matemática" />
                <Picker.Item label="Português" value="Português" />
              </Picker>
            </S.InputSelect>

            <S.InputGroup>
              <S.InputBlock>
                <S.Label>Dia da semana</S.Label>
                <S.InputSelect>
                  <Picker
                    style={{ color: '#c1bccc' }}
                    selectedValue={values.week_day}
                    onValueChange={(itemValue, itemIndex) =>
                      onChangeValue('week_day', String(itemValue))
                    }
                    itemStyle={{ backgroundColor: 'grey' }}
                  >
                    <Picker.Item label="Domingo" value="0" />
                    <Picker.Item label="Segunda-feira" value="1" />
                    <Picker.Item label="Terça-feira" value="2" />
                    <Picker.Item label="Quarta-feira" value="3" />
                    <Picker.Item label="Quinta-feira" value="4" />
                    <Picker.Item label="Sexta-feira" value="5" />
                    <Picker.Item label="Sábado" value="6" />
                  </Picker>
                </S.InputSelect>
              </S.InputBlock>

              <S.InputBlock>
                <S.Label>Horário</S.Label>
                <S.Input
                  value={values.time}
                  onChangeText={t => onChangeValue('time', t)}
                  placeholder="Qual o horário?"
                />
              </S.InputBlock>
            </S.InputGroup>

            <S.SubmitButton onPress={handleFiltersSubmit}>
              <S.SubmitButtonText>Filtrar</S.SubmitButtonText>
            </S.SubmitButton>
          </S.SearchForm>
        )}
      </PageHeader>

      <S.TeacherListView>
        {teachers.map(teacher => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorite={favorites.includes(teacher.id)}
          />
        ))}
      </S.TeacherListView>
    </S.Container>
  )
}

export default TeacherList
