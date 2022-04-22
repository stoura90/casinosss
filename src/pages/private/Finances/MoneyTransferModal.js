import React, { useCallback, useMemo } from 'react'
import { FormGroup, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import confirm from 'reactstrap-confirm'
import { formatter } from '../../../utils'
import * as yup from 'yup'

import * as actions from '../../../actions/finance.actions'
import Button from '../../../components/Button'
import Input from '../../../components/Input'

const validationSchema = yup.object({
  username: yup.string().required('Необходимо заполнить это поле'),
  password: yup.string().required('Необходимо заполнить это поле'),
  amount: yup
    .number()
    .typeError('Сумма должно быть числом')
    .positive('Сумма должна быть положительной')
    .required('Необходимо заполнить это поле'),
})

function MoneyTransferModal() {
  const dispatch = useDispatch()
  const isVisible = useSelector((state) => state.finance.modals.transfer)
  const isLoading = useSelector((state) => state.finance.loadings.transfer)

  const submitTransferMoneyForm = async ({ username, amount, password }) => {
    let result = await confirm({
      title: `Перевод ${username}`,
      message: `Перевести ${formatter.format(amount).replace('₽', 'RUB')} партнеру "${username}"`,
      confirmText: 'Подтвердить',
      confirmColor: 'primary',
      cancelText: 'Отмена',
      cancelColor: 'link text-muted',
    })

    if (result) {
      const payload = { username, password, amount: Number(amount) }
      dispatch(actions.transferMoney(payload))
    }
  }

  const initialValues = useMemo(
    () => isVisible && { username: '', amount: '', password: '' },
    [isVisible],
  )

  const handleCloseModal = useCallback(() => {
    dispatch(actions.toggleTransferMoneyModal(false))
  }, [dispatch])

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitTransferMoneyForm}
    >
      {({ isValid, dirty }) => (
        <Modal keyboard={false} backdrop="static" isOpen={isVisible} toggle={handleCloseModal}>
          <Form>
            <ModalHeader toggle={handleCloseModal}>
              Перевод с транзитного баланса партнеру
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Field type="text" name="amount" placeholder="Сумма" component={Input} />
              </FormGroup>
              <FormGroup>
                <Field type="text" name="username" placeholder="Логин" component={Input} />
              </FormGroup>
              <FormGroup>
                <Field
                  type="password"
                  name="password"
                  placeholder="Финансовый пароль"
                  component={Input}
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
                Отправить
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      )}
    </Formik>
  )
}

export default MoneyTransferModal
