import React, { TextareaHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ maxLength, name, label, ...props }) => {
  return (
    <Container className="textarea-block" >
      <label htmlFor={name}>{label} { maxLength && <span>(Máximo de {maxLength} caracteres)</span>}</label>
      <textarea {...{ ...props, ...{ id: name } }} />
    </Container>
  )
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Textarea
