import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import giveClassesBgImg from '../../assets/images/give-classes-background.png';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <S.Container>
      <S.Content source={giveClassesBgImg}>
        <S.Title>Quer ser um Proffy?</S.Title>
        <S.Description>
          Para começar, você precisa se cadastrar na plataforma web.
        </S.Description>
      </S.Content>

      <S.OkButton onPress={handleNavigateBack}>
        <S.OkButtonText>Tudo bem</S.OkButtonText>
      </S.OkButton>
    </S.Container>
  );
};

export default GiveClasses;
