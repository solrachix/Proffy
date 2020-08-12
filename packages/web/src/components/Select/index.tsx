import React, { SelectHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import { Container, Select } from './styles'

export interface OptionsType {value: string; label: string}

interface SelectProps {
  flex?: number;
  required?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  name: string;
  label: string;
  options: OptionsType[];
  defaultValue?: OptionsType;
  onChange?(props: OptionsType): void
}

const SelectComponent: React.FC<SelectProps> = ({ flex, name, label, ...props }) => {
  return (
    <Container className="Select-block" style={{ flex }}>
      <label htmlFor={name}>{label}</label>

      <Select
        classNamePrefix="select"
        // defaultValue={colourOptions[0]}
        // isRtl={isRtl}

        // cacheOptions
        // defaultOptions
        menuPortalTarget={document.body}
        {...props}
      />

      {/* <select defaultValue="" id={name} {...props} >
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
      </select> */}
    </Container>
  )
}

SelectComponent.propTypes = {
  required: PropTypes.bool,
  flex: PropTypes.number,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}

SelectComponent.defaultProps = {
  isClearable: true
}

export default SelectComponent
