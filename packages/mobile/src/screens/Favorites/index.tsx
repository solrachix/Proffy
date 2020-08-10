import React, { useState, useCallback } from 'react';
import { AsyncStorage } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import * as S from './styles';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Teacher[]>([]);

  const loadFavorites = useCallback(async () => {
    const res = await AsyncStorage.getItem('favorites');

    if (res) {
      setFavorites(JSON.parse(res));
    }
  }, []);

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <S.Container>
      <PageHeader title="Meus proffys favoritos" />

      <S.TeacherListView>
        {favorites.map(teacher => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </S.TeacherListView>
    </S.Container>
  );
};

export default Favorites;
