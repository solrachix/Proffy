import React, { SelectHTMLAttributes } from 'react'
import PropTypes from 'prop-types'

import { Container, Select, CreatableSelect } from './styles'

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

const SelectComponent: React.FC<SelectProps> = ({ isClearable = false, flex, name, label, ...props }) => {
  return (
    <Container className="Select-block" style={{ flex }}>
      <label htmlFor={name}>{label}</label>

      {
        isClearable
          ? <CreatableSelect
            classNamePrefix="select"
            menuPortalTarget={document.body}
            {...props}
          />
          : <Select
            classNamePrefix="select"
            // defaultValue={colourOptions[0]}
            // isRtl={isRtl}

            // cacheOptions
            // defaultOptions
            menuPortalTarget={document.body}
            {...props}
          />
      }
    </Container>
  )
}

SelectComponent.propTypes = {
  isClearable: PropTypes.bool,
  required: PropTypes.bool,
  flex: PropTypes.number,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
}

SelectComponent.defaultProps = {
  isClearable: false
}

export default SelectComponent
