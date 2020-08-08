import React, { SelectHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[]
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...props }) => {
  return (
    <Container className="Select-block" >
      <label htmlFor={name}>{label}</label>
      <select defaultValue="" id={name} {...props} >
        <option value="" disabled hidden>Selecione uma opção</option>

        { options.map(option => (
          <option
            key={`${option.value}-${option.label}`}
            value={option.value}
          >
            {option.label}
          </option>
        ))
        }
      </select>
    </Container>
  )
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}

export default Select
