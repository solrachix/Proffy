import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.themeColors.tertiary};
`

export const TeacherListView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 16
  }
})`
  margin-top: -40px;
`

export const SearchForm = styled.View`
  margin-bottom: 24px;
`

export const Label = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: 'Poppins_400Regular';
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#c1bccc'
})`
  height: 54px;
  padding: 0 16px;
  margin-top: 4px;
  margin-bottom: 16px;

  background-color: ${props => props.theme.colors.themeColors.tertiary};
  border-radius: 8px;
  color: ${props => props.theme.colors.themeColors.text.dark};

  justify-content: center;
`

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const InputBlock = styled.View`
  width: 48%;
`
export const InputSelect = styled.View`
  height: 54px;
  padding: 3px;
  margin-top: 4px;
  margin-bottom: 16px;

  background-color: ${props => props.theme.colors.themeColors.tertiary};
  border-radius: 8px;

  justify-content: center;
`

export const SubmitButton = styled(RectButton)`
  flex-direction: row;
  background-color: ${props => props.theme.colors.themeColors.secondary};
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`

export const SubmitButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: 'Archivo_700Bold';
  font-size: 16px;
`
