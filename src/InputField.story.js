import React from 'react'
import { storiesOf } from '@storybook/react'

import InputField from './InputField'

storiesOf('Text input', module)
  .add('default', () => <InputField value='Hello' />)
  .add('multiple lines', () => <InputField rows={10} value='Hello World' />)
