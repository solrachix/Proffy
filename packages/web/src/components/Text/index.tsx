import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

interface StyledProps {
  align?: string;
  size?: number;
  color?: string;
  bold?: string | number
}

interface ComponentProps extends StyledProps {
  text: string;
}

const TextComponent: React.FC<ComponentProps> = ({ text, ...props }) => {
  const Text = styled.p.attrs({
    ...props
  })<StyledProps>`
    width: auto;
    max-width: 100%;
    font-family: Roboto, sans-serif;
    text-align: ${({ align }) => align};
    font-size: ${({ size }) => size}em;
    font-weight: ${({ bold }) => bold};
    color: ${({ color }) => color};
    margin: 0;
    word-break: break-word;
  `
  return <Text>{ text }</Text>
}

TextComponent.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  bold: PropTypes.oneOf([
    'normal', 'bold',
    100, 200, 300, 400, 500, 600, 700, 800, 900
  ])
}

TextComponent.defaultProps = {
  size: 1,
  color: '#fff',
  bold: 'normal',
  align: 'left'
}

export default TextComponent
