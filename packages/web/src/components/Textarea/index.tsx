import React, { TextareaHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...props }) => {
  return (
    <Container className="textarea-block" >
      <label htmlFor={name}>{label}</label>
      <textarea {...{ ...props, ...{ id: name } }} />
    </Container>
  )
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default Textarea
