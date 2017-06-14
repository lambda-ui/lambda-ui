import React from 'react'
import styled from 'styled-components'
import { reduxForm } from 'redux-form'
import { compose, withHandlers } from 'recompose'

import InputField from '../../src/redux-form/InputField'
import SelectField from '../../src/redux-form/SelectField'
import FieldWrapper from '../../src/FieldWrapper'
import Button from '../../src/Button'

const FormWrapper = styled.div`
  padding: 2em;
  margin: 3em auto;
  width: 50%;
`

const ExampleForm = ({ handleSubmit }) => {
  const categories = [
    ['bread', 'Pães'],
    ['beverage', 'Bebidas'],
    ['organics', 'Orgânicos'],
  ]

  return (
    <FormWrapper>
      <h1>Criar produto</h1>
      <p>Descreva seu produto o mais detalhadamente possível.</p>
      <form onSubmit={ handleSubmit }>
        <FieldWrapper
          name="name"
          label="Nome do produto"
          component={ InputField }
        />
        <FieldWrapper
          name="category"
          label="Categoria"
          component={ SelectField }
          options={ categories.map(([value, label]) => ({ value, label })) }
        />
        <FieldWrapper
          name="description"
          label="Descrição"
          description="Descrição, e detalhes sobre o produto."
          component={ InputField }
          rows={ 2 }
        />
        <fieldset>
          <legend>Disponibilidade</legend>
          <FieldWrapper
            name="stock"
            label="Quantidade"
            description="Quantidade disponível em estoque."
            component={ InputField }

          />
          <FieldWrapper
            name="startDate"
            label="Data inicio"
            description="Produto disponível a partir data."
            component={ InputField }
            type="date"

          />
          <FieldWrapper
            name="endDate"
            label="Data fim"
            description="Produto disponível até esta data."
            component={ InputField }
            type="date"

          />
          <FieldWrapper
            name="preOrder"
            label="Pre venda"
            description="Iniciar vendas antes da data de inicio."
            component={ InputField }
            type="checkbox"

          />
        </fieldset>
        <FieldWrapper
          name="active"
          label="Ativo"
          component={ InputField }
          type="checkbox"
        />
        <FieldWrapper
          name="active-radio"
          value="false"
          label="Inativo"
          component={ InputField }
          type="radio"
        />
        <Button
          type="submit"
          label="Criar produto"
        />
      </form>
    </FormWrapper>
  )
}

export default compose(
  withHandlers({
    onSubmit: props => values => {
      console.log(values)
    }
  }),
  reduxForm({
    form: 'createProduct',
    initialValues: {
      name: '',
      description: '',
      category: 'organics',
      active: '',
    }
  })
)(ExampleForm)
