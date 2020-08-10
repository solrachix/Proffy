import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

interface ColumnProps {
  bgColor?: string
}
export const Column = styled.View<ColumnProps>`
  height: 50%;
  padding: 30px;

  background: ${({ bgColor = 'transparent' }) => bgColor};
`

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`

export const Icon = styled.Image`
  width: 50%;
  height: 50%;
`
export const Button = styled.View`
  width: 100px;
  height: 36px;

  top: 20%;
  /* background: #f00; */

  justify-content: center;
  align-items: center;
`
export const ButtonIcon = styled.Image`
  width: 100%;
  height: 100%;
`
