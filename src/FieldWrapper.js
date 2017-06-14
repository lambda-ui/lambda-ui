import React, { createElement } from 'react'
import styled from 'styled-components'

const Label = styled.span`
  display: block;
`

const elementFactory = (component, props) => {
  const styledComponent = applyStyle(component, props)
  return createElement(styledComponent, props)
}

const applyStyle = (component, props) => styled(component)`
  display: block;
  width: 100%;
`

const FieldWrapper = ({ label, description, component, className, ...props }) => (
  <label className={ className }>
    { label && <Label>{ label }</Label> }
    { elementFactory(component, props) }
    { description && <small>{ description }</small> }
  </label>
)

export default styled(FieldWrapper)`
  display: block;
  margin: 1rem 0 2rem 0;
`
