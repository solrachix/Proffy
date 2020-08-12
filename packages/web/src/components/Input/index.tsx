import React, { useState, InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import { Container, Eye, EyeOff, InputGroup } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  flex?: number;
  type?: string;
  name: string;
  label: string;
  ref?: any;
}

export { InputGroup }

const Input: React.FC<InputProps> = ({ flex, name, label, ...props }) => {
  const [type, setType] = useState(props.type)
  const isPassword = props.type === 'password'

  return (
    <Container isPassword={isPassword} className="input-block" style={{ flex }}>
      <label htmlFor={name}>{label}</label>
      <input {...{ ...props, ...{ type, id: name } }} />
      { isPassword
        ? type === 'password'
          ? <Eye onClick={() => setType('text')}/>
          : <EyeOff onClick={() => setType('password')}/>
        : null
      }
    </Container>
  )
}

Input.propTypes = {
  flex: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

Input.defaultProps = {
  type: 'text'
}
export default Input
