import React from 'react'
import PropTypes from 'prop-types'
import { StyleProp, TextStyle } from 'react-native'

import { Text } from './styles'

interface Props {
  text: string;
  align?: string;
  size?: number;
  color?: string;
  weight?: string | number;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
}

const TextComponent: React.FC<Props> = ({ text, ...props }) => {
  return <Text {...props }>{ text }</Text>
}

TextComponent.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  weight: PropTypes.oneOf([
    'normal', 'bold',
    100, 200, 300, 400, 500, 600, 700, 800, 900
  ]),
  numberOfLines: PropTypes.number,
  style: PropTypes.object
}

TextComponent.defaultProps = {
  size: 16,
  color: '#F4F4F4',
  weight: 'normal',
  align: 'left'
}

export default TextComponent
