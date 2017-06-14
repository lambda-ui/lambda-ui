import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
`

const SelectField = ({ options, ...props }) => (
  <Select { ...props }>
    { options.map(({ value, label }) => (
      <option key={ value } value={ value }>{ label }</option>
    )) }
  </Select>
)

export default SelectField
