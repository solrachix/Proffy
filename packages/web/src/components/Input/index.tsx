import React, { InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ type, name, label, ...props }) => {
  return (
    <Container className="input-block" >
      <label htmlFor={name}>{label}</label>
      <input {...{ ...props, ...{ type, id: name } }} />
    </Container>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

Input.defaultProps = {
  type: 'text'
}
export default Input
