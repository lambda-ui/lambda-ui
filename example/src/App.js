// Libraries.
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// App specific.
import ExampleForm from './ExampleForm'

const reducers = {
  form: formReducer
}

const reducer = combineReducers(reducers)
const store = createStore(reducer)

const App = () => {
  return (
    <Provider store={ store }>
      <ExampleForm />
    </Provider>
  )
}

export default App
