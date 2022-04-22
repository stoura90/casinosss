import React, { useCallback, useMemo } from 'react'
import { FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import confirm from 'reactstrap-confirm'
import * as yup from 'yup'

import * as actions from '../../../actions/starsup.actions'
import { formatter, declOfNum } from '../../../utils'
import Button from '../../../components/Button'
import Input from '../../../components/Input'

const ONE_PLACE = 200

function PlaceBuyModal() {
  const dispatch = useDispatch()
  const isVisible = useSelector((state) => state.starsup.modals.buy)
  const isLoading = useSelector((state) => state.starsup.loadings.buy)

  const initialValues = useMemo(() => isVisible && { count: '' }, [isVisible])

  const validationSchema = useMemo(() => {
    return yup.object({
      count: yup
        .number()
        .typeError('Количество мест должно быть числом')
        .integer('Количество мест должно быть целым числом')
        .positive('Количество мест должно быть положительной')
        .required('Необходимо заполнить это поле'),
    })
  }, [])

  const handleCloseModal = useCallback(() => {
    dispatch(actions.toggleStarsUpPlaceBuyModal(false))
  }, [dispatch])

  const handleOnSubmit = useCallback(
    async (values) => {
      const { count } = values
      const payload = { count: Number(count) }

      let result = await confirm({
        title: `Приобрести ${count} ${declOfNum(count, ['место', 'места', 'мест'])}`,
        message: `Вы хотите приобрести ${count} ${declOfNum(count, [
          'место',
          'места',
          'мест',
        ])} на сумму ${formatter.format(ONE_PLACE * payload.count).replace('₽', 'ST')}`,
        confirmText: 'Подтвердить',
        confirmColor: 'primary',
        cancelText: 'Отмена',
        cancelColor: 'link text-muted',
      })

      if (result) {
        dispatch(actions.starsupBuy(payload))
      }
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
      {({ isValid, dirty, values }) => (
        <Modal keyboard={false} backdrop="static" isOpen={isVisible} toggle={handleCloseModal}>
          <Form>
            <ModalHeader toggle={handleCloseModal}>Купить места</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Field
                  type="text"
                  name="count"
                  placeholder="Введите количество мест"
                  component={Input}
                  maxLength="5"
                />
              </FormGroup>
              <FormGroup>
                <Field
                  type="text"
                  placeholder="Стоимость:"
                  value={`${formatter.format(ONE_PLACE * values.count).replace('₽', 'ST')}`}
                  component={Input}
                  readOnly
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
                Купить
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      )}
    </Formik>
  )
}

export default PlaceBuyModal
