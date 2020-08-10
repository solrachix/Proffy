import styled, { css } from 'styled-components/native'
import { darken, rgba } from 'polished'
import { RectButton } from 'react-native-gesture-handler'

interface FavoriteButtonProps {
  favorite?: boolean;
}

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.themeColors.tertiary};
  border: 1px solid ${(props) => darken(0.1, props.theme.colors.themeColors.tertiary)};
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${(props) => darken(0.1, props.theme.colors.themeColors.tertiary)};
`

export const ProfileInfo = styled.View`
  margin-left: 16px;
`

export const Name = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #32264d;
  font-size: 20px;
`

export const Subject = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${(props) => props.theme.colors.themeColors.text.normal};
  font-size: 12px;
  margin-top: 4px;
`

export const Bio = styled.Text`
  font-family: 'Poppins_400Regular';
  margin: 0 24px;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.themeColors.text.normal};
`

export const Footer = styled.View`
  margin-top: 24px;
  background-color: #fafafc;
  padding: 24px;
  align-items: center;
`

export const Price = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${(props) => props.theme.colors.themeColors.text.normal};
  font-size: 14px;
`

export const PriceValue = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${props => props.theme.colors.themeColors.primary.normal};
  font-size: 16px;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`

export const FavoriteButton = styled(RectButton)<FavoriteButtonProps>`
  background-color: ${props => props.theme.colors.themeColors.primary.normal};
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  ${({ favorite }) =>
    favorite &&
    css`
      background-color: ${props => props.theme.colors.red};
    `}
`

export const ContactButton = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  background-color: ${props => props.theme.colors.themeColors.secondary};
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`

export const SeeVideosButton = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  margin-top: 4%;

  background-color: ${props => rgba(props.theme.colors.themeColors.primary.normal, 0.1)};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.themeColors.primary.normal};

  justify-content: center;
  align-items: center;
`

export const ContactButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  margin-left: 16px;
`
