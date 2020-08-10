import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

interface TitleProps {
  bold?: boolean;
}

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.themeColors.tertiary};
  justify-content: center;
`

interface ColumnProps {
  height: number;
  bgColor?: string
}
export const Column = styled.View<ColumnProps>`
  width: 100%;
  height: ${({ height = 50 }) => height}%;
  padding-left: 30px;
  padding-right: 30px;

  background: ${({ bgColor = 'transparent' }) => bgColor};
`

export const BannerContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`

export const Banner = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: 100%;
  min-width: 100%;
  max-height: 80%;
`

export const Title = styled.Text<TitleProps>`
  color: ${props => props.theme.colors.themeColors.text.dark};
  font-size: 20px;
  line-height: 30px;
  margin-top: 40px;
  font-family: 'Poppins_400Regular';

  ${({ bold }) =>
    bold &&
    css`
      font-family: 'Poppins_600SemiBold';
    `};
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`

export const Button = styled(RectButton)<ButtonProps>`
  height: 150px;
  width: 48%;
  background-color: #333;
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;

  ${({ primary }) =>
    primary &&
    css`
      background-color: ${props => props.theme.colors.themeColors.primary.normal};
    `};

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${props => props.theme.colors.themeColors.secondary};
    `};
`

export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: ${props => props.theme.colors.white};
  font-size: 20px;
`

export const Icon = styled.Image`
  width: 40%;
  height: 40%;
`

export const TotalConnection = styled.Text`
  font-family: 'Poppins_400Regular';
  color: ${props => props.theme.colors.themeColors.text.normal};
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`
