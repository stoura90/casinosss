import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Row, Col, Button, FormGroup } from 'reactstrap'
import * as yup from 'yup'
import { api } from '../../../api'

import payeerLogo from '../../../scss/media/payeer-logo.8aa750cc.svg'
import Input from '../../../components/Input'

const initialValues = { amount: '' }

const validationSchema = yup.object({
  amount: yup
    .number()
    .typeError('Сумма должно быть числом')
    .positive('Сумма должна быть положительной')
    .required('Необходимо заполнить это поле'),
})

function ReplenishmentOfMoney() {
  const submitCreatePayForm = ({ amount }) => {
    api
      .createPay({ amount: Number(amount) })
      .then((response) => {
        if (response.url) {
          window.location.replace(response.url)
        }
      })
      .catch(() => {})
  }

  const submitCreatePayeerPayForm = ({ amount }) => {
    api
      .createPayeerPay({ amount: Number(amount) })
      .then((response) => {
        if (response.url) {
          window.location.replace(response.url)
        }
      })
      .catch(() => {})
  }

  return (
    <Row>
      <Col lg={6}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitCreatePayForm}
        >
          {({ isValid, dirty }) => (
            <Form className="card">
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
                  <Field type="text" name="amount" placeholder="Сумма" component={Input} />
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
      <Col lg={6}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitCreatePayeerPayForm}
        >
          {({ isValid, dirty }) => (
            <Form className="card">
              <div className="card__body">
                <div className="pay-image">
                  <img src={payeerLogo} alt="Payeer" />
                </div>
                <FormGroup>
                  <Field name="amount" type="text" placeholder="Сумма" component={Input} />
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

export default ReplenishmentOfMoney
