import React, { useCallback, useMemo } from 'react'
import { FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import confirm from 'reactstrap-confirm'
import * as yup from 'yup'

import * as actions from '../../../actions/starsup.actions'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import { declOfNum } from '../../../utils'

function ArrangeClonesModal() {
  const dispatch = useDispatch()
  const isVisible = useSelector((state) => state.starsupTable.modals.arrange)
  const isLoading = useSelector((state) => state.starsupTable.loadings.arrange)
  const clones = useSelector((state) => state.starsupTable.clones)
  const level = useSelector((state) => state.starsupTable.level)

  const initialValues = useMemo(() => isVisible && { count: '' }, [isVisible])

  const validationSchema = useMemo(
    () =>
      yup.object({
        count: yup
          .number()
          .typeError('Количество клонов должно быть числом')
          .integer('Количество клонов должно быть целым числом')
          .positive('Количество клонов должно быть положительной')
          .max(clones, `У вас недостаточно клонов. Доступно ${clones}`)
          .required('Необходимо заполнить это поле'),
      }),
    [clones],
  )

  const handleCloseModal = useCallback(() => {
    dispatch(actions.toggleStarsUpArrangeClonesModal(false))
  }, [dispatch])

  const handleOnSubmit = useCallback(
    async (values) => {
      const { count } = values
      const payload = { count: Number(count), level }

      let result = await confirm({
        title: `Расставить ${count} ${declOfNum(count, ['клона', 'клона', 'клонов'])}`,
        message: `Вы хотите расставить ${count} ${declOfNum(count, ['клона', 'клона', 'клонов'])}?`,
        confirmText: 'Подтвердить',
        confirmColor: 'primary',
        cancelText: 'Отмена',
        cancelColor: 'link text-muted',
      })

      if (result && level) {
        dispatch(actions.starsupArrangeClones(payload))
      }
    },
    [dispatch, level],
  )

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ isValid, dirty }) => (
        <Modal keyboard={false} backdrop="static" isOpen={isVisible} toggle={handleCloseModal}>
          <Form>
            <ModalHeader toggle={handleCloseModal}>Расставить клонов</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Field
                  type="text"
                  name="count"
                  placeholder="Количество клонов"
                  component={Input}
                  maxLength="5"
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                type="submit"
                color="primary"
                disabled={!(isValid && dirty) || isLoading}
                loading={isLoading}
                block
              >
                Расставить
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      )}
    </Formik>
  )
}

export default ArrangeClonesModal
