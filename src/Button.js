import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Button = ({ label, ...props }) =>
  <button { ...props }>{ label }</button>

Button.propTypes = {
  label: PropTypes.node,
  className: PropTypes.string
}

export default styled(Button)`
  margin: 2em 0;
`
