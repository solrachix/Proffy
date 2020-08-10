import styled, { css } from 'styled-components/native'
import Animated from 'react-native-reanimated'

interface Props {
  align?: string;
  size?: number;
  color?: string;
  weight?: string | number;
  style?: unknown
}

export const Text = styled(Animated.Text)`${(props: Props) => css`
  width: 100%;
  height: auto;
  text-align: ${props.align};
  /* font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif */
  font-size: ${props.size}px;
  font-weight: ${props.weight};
  font-family: "Archivo_400Regular";
  letter-spacing: 1px;
  color: ${props.color};
`}`
