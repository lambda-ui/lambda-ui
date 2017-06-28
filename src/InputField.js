import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextArea = styled.textarea`
  vertical-align: top;
`

const Input = styled.input`
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
`

const InputField = ({ rows, ...props }) => rows
  ? <TextArea { ...props } />
  : <Input { ...props } />

InputField.propTypes = {
  rows: PropTypes.number,
}

export default InputField
