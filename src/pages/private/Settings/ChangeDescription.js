import React, { useCallback, useMemo } from 'react'
import { Formik, Form, Field } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { FormGroup } from 'reactstrap'
import * as yup from 'yup'

import * as actions from '../../../actions/app.actions'
import Button from '../../../components/Button'
import InputMultiline from '../../../components/InputMultiline'

const validationSchema = yup.object({
  description: yup.string().max(1000, 'Описание может быть максимум 1000 символов'),
})

function ChangeDescription() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.app.user)
  const isLoading = useSelector((state) => state.app.loadings.changeDescription)

  const initialValues = useMemo(() => {
    let values = { description: '' }
    if (profile) {
      const { myDescription } = profile
      values = { description: myDescription || '' }
    }

    return values
  }, [profile])

  const handleOnSubmit = useCallback(
    (values) => {
      dispatch(actions.changeDescription(values))
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
              <h3 className="card__title">Обо мне</h3>
            </div>
          </div>
          <div className="card__body">
            <FormGroup>
              <Field
                type="text"
                name="description"
                placeholder="Напишите коротко о себе"
                component={InputMultiline}
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
              Сохранить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ChangeDescription
