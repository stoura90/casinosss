import React, { useMemo, useCallback } from 'react'
import { Formik, Form, Field } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { FormGroup } from 'reactstrap'
import omit from 'lodash-es/omit'
import * as yup from 'yup'

import * as actions from '../../../actions/app.actions'
import Button from '../../../components/Button'
import Input from '../../../components/Input'

const initialValues = {
  new_password: '',
  repeat_new_password: '',
  old_password: '',
}

function FinancePassword() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.app.user)
  const isLoading = useSelector((state) => state.app.loadings.changeFinancePassword)

  const hasFinPassword = useMemo(() => profile && profile.hasFinPassword, [profile])

  const validationSchema = useMemo(() => {
    const defaultSchema = {
      new_password: yup
        .string()
        .required('Необходимо заполнить это поле')
        .min(6, 'Пароль должен быть не менее 6 символов'),
      repeat_new_password: yup
        .string()
        .required('Необходимо заполнить это поле')
        .oneOf([yup.ref('new_password'), null], 'Пароли не совпадают'),
    }

    if (hasFinPassword) {
      defaultSchema.old_password = yup
        .string()
        .required('Необходимо заполнить это поле')
        .min(6, 'Пароль должен быть не менее 6 символов')
    }

    return yup.object(defaultSchema)
  }, [hasFinPassword])

  const handleOnSubmit = useCallback(
    (values, formicActions) => {
      const callback = () => formicActions.resetForm()
      const newValues = omit(values, 'repeat_new_password')
      dispatch(actions.changeFinancePassword(newValues, callback))
    },
    [dispatch],
  )

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ isValid, dirty }) => (
        <Form className="card">
          <div className="card__header">
            <div className="card__header-left">
              <h3 className="card__title">Изменение финансового пароля</h3>
            </div>
          </div>
          <div className="card__body">
            {hasFinPassword && (
              <FormGroup>
                <Field
                  type="password"
                  name="old_password"
                  placeholder="Текущий пароль"
                  component={Input}
                />
              </FormGroup>
            )}
            <FormGroup>
              <Field
                type="password"
                name="new_password"
                placeholder="Новый пароль"
                component={Input}
              />
            </FormGroup>
            <FormGroup>
              <Field
                type="password"
                name="repeat_new_password"
                placeholder="Повторите новый пароль"
                component={Input}
              />
            </FormGroup>
          </div>
          <div className="card__footer">
            <Button
              type="submit"
              color="primary"
              disabled={!(isValid && dirty) || isLoading}
              loading={isLoading}
              block
            >
              {hasFinPassword ? 'Изменить' : 'Добавить'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FinancePassword
