import React from 'react'
import { Row, Col, Button, FormGroup } from 'reactstrap'
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import confirm from 'reactstrap-confirm'
import { toast } from 'react-toastify'
import { formatter } from '../../../utils'
import * as yup from 'yup'
import { api } from '../../../api'

import * as actions from '../../../actions/app.actions'
import payeerLogo from '../../../scss/media/payeer-logo.8aa750cc.svg'
import Input from '../../../components/Input'

const initialValues = {
  amount: '',
  wallet: '',
  password: '',
}

const payeerValidationSchema = yup.object({
  wallet: yup.string().required('Необходимо заполнить это поле'),
  password: yup.string().required('Необходимо заполнить это поле'),
  amount: yup
    .number()
    .typeError('Сумма должно быть числом')
    .positive('Сумма должна быть положительной')
    .required('Необходимо заполнить это поле')
    .test(
      'amount',
      'Сумма должна быть не меньше 50 и не больше 10 000',
      (value) => value >= 50 && value <= 10000,
    ),
})

const freeKassaValidationSchema = yup.object({
  amount: yup
    .number()
    .typeError('Сумма должно быть числом')
    .positive('Сумма должна быть положительной')
    .required('Необходимо заполнить это поле')
    .test(
      'amount',
      'Сумма должна быть не меньше 500 и не больше 10 000',
      (value) => value >= 500 && value <= 10000,
    ),
})

function WithdrawalOfMoney() {
  const dispatch = useDispatch()

  const submitCreateWithdrawForm = async (values, formBag) => {
    let result = await confirm({
      title: `Перевод ${values.system.toUpperCase()}`,
      message: `Перевести ${formatter
        .format(values.amount)
        .replace('₽', 'RUB')} по адресу "${values.system.toUpperCase()}" (${values.wallet})`,
      confirmText: 'Подтвердить',
      confirmColor: 'primary',
      cancelText: 'Отмена',
      cancelColor: 'link text-muted',
    })

    if (result) {
      api
        .createWithdraw({ ...values, amount: Number(values.amount) })
        .then(() => {
          toast.success('Ваша заявка принята, ожидайте зачисление')
          formBag.resetForm()
          api
            .getUserInfo()
            .then((response) => {
              dispatch(actions.userInfoSuccess(response))
            })
            .catch(() => {})
        })
        .catch((error) => {
          if (error.message) {
            toast.error(error.message)
          }
        })
    }
  }
  return (
    <Row>
      <Col lg={4}>
        <Formik
          initialValues={{ ...initialValues, system: 'payeer' }}
          validationSchema={payeerValidationSchema}
          onSubmit={submitCreateWithdrawForm}
        >
          {({ isValid, dirty }) => (
            <Form className="card">
              <div className="card__header">
                <div className="card__header-left">
                  <h3 className="card__title">PAYEER</h3>
                </div>
              </div>
              <div className="card__body">
                <div className="pay-image">
                  <img src={payeerLogo} alt="Payeer" />
                </div>
                <FormGroup>
                  <Field name="wallet" type="text" component={Input} placeholder="Кошелёк" />
                </FormGroup>
                <FormGroup>
                  <Field name="amount" type="text" component={Input} placeholder="Сумма" />
                </FormGroup>
                <FormGroup>
                  <Field
                    name="password"
                    type="password"
                    component={Input}
                    placeholder="Финансовый пароль"
                  />
                </FormGroup>
              </div>
              <div className="card__footer">
                <Button type="submit" disabled={!(isValid && dirty)} color="primary" block>
                  Подтвердить
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Col>
      <Col lg={4}>
        <Formik
          initialValues={{ ...initialValues, system: 'qiwi' }}
          validationSchema={freeKassaValidationSchema}
          onSubmit={submitCreateWithdrawForm}
        >
          {({ isValid, dirty }) => (
            <Form className="card">
              <div className="card__header">
                <div className="card__header-left">
                  <h3 className="card__title">QIWI</h3>
                </div>
              </div>
              <div className="card__body">
                <a
                  className="pay-image"
                  href="https://www.free-kassa.ru/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src="https://www.free-kassa.ru/img/fk_btn/23.png" alt="Free-Kassa" />
                </a>
                <FormGroup>
                  <Field name="amount" type="text" component={Input} placeholder="Сумма" />
                </FormGroup>
                <FormGroup>
                  <Field name="wallet" type="text" component={Input} placeholder="Телефон" />
                </FormGroup>
                <FormGroup>
                  <Field
                    name="password"
                    type="password"
                    component={Input}
                    placeholder="Финансовый пароль"
                  />
                </FormGroup>
              </div>
              <div className="card__footer">
                <Button type="submit" disabled={!(isValid && dirty)} color="primary" block>
                  Подтвердить
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Col>
      <Col lg={4}>
        <Formik
          initialValues={{ ...initialValues, system: 'card' }}
          validationSchema={freeKassaValidationSchema}
          onSubmit={submitCreateWithdrawForm}
        >
          {({ isValid, dirty }) => (
            <Form className="card">
              <div className="card__header">
                <div className="card__header-left">
                  <h3 className="card__title">VISA/Mastercard</h3>
                </div>
              </div>
              <div className="card__body">
                <a
                  className="pay-image"
                  href="https://www.free-kassa.ru/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src="https://www.free-kassa.ru/img/fk_btn/23.png" alt="Free-Kassa" />
                </a>
                <FormGroup>
                  <Field name="amount" type="text" component={Input} placeholder="Сумма" />
                </FormGroup>
                <FormGroup>
                  <Field name="wallet" type="text" component={Input} placeholder="Номер карты" />
                </FormGroup>
                <FormGroup>
                  <Field
                    name="password"
                    type="password"
                    component={Input}
                    placeholder="Финансовый пароль"
                  />
                </FormGroup>
              </div>
              <div className="card__footer">
                <Button type="submit" disabled={!(isValid && dirty)} color="primary" block>
                  Подтвердить
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  )
}

export default WithdrawalOfMoney
