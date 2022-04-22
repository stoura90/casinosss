import React, { useMemo, useCallback } from 'react'
import { Formik, Form, Field } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { FormGroup } from 'reactstrap'
import * as yup from 'yup'

import * as actions from '../../../actions/app.actions'
import Button from '../../../components/Button'
import Input from '../../../components/Input'

const validationSchema = yup.object({
  firstName: yup.string().required('Необходимо заполнить это поле'),
  lastName: yup.string().required('Необходимо заполнить это поле'),
})

function ChangeUserInfo() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.app.user)
  const isLoading = useSelector((state) => state.app.loadings.changeUserInfo)

  const initialValues = useMemo(() => {
    let values = { firstName: '', lastName: '' }
    if (profile) {
      const { firstName, lastName } = profile
      values = { ...values, firstName, lastName }
    }

    return values
  }, [profile])

  const handleOnSubmit = useCallback(
    (values) => dispatch(actions.changeUserInfo(values)),
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
              <h3 className="card__title">Изменение данных</h3>
            </div>
          </div>
          <div className="card__body">
            <FormGroup>
              <Field type="text" name="firstName" placeholder="Имя" component={Input} />
            </FormGroup>
            <FormGroup>
              <Field type="text" name="lastName" placeholder="Фамилия" component={Input} />
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
              Сохранить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ChangeUserInfo
