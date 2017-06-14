import { Field } from 'redux-form'
import { compose, flattenProp, withProps } from 'recompose'

const createComponent = component => {
  const componentWrapper = compose(
    flattenProp('input'),
    flattenProp('meta'),
  )(component)

  return compose(
    withProps({
      component: componentWrapper,
    })
  )(Field)
}

export default createComponent
