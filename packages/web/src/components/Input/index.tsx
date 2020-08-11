import React, { useState, InputHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import { Container, Eye, EyeOff } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  name: string;
  label: string;
  ref?: any;
}

const Input: React.FC<InputProps> = ({ name, label, ...props }) => {
  const [type, setType] = useState(props.type)
  const isPassword = props.type === 'password'

  return (
    <Container isPassword={isPassword} className="input-block" >
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
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

Input.defaultProps = {
  type: 'text'
}
export default Input
