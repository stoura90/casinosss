import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './ResetPassword.module.scss'
import routes from '../../../constants/routes.constants'
import logo from '../../../scss/media/kosmos.png'
import { isValidEmail } from '../../../utils'
import { api } from '../../../api'

import Input from '../../../components/OldInput'
import Button from '../../../components/OldButton'

export default function ResetPassword() {
  const [resetPasswordStatus, setResetPasswordStatus] = useState(null)
  const { t } = useTranslation('common')

  const submitResetPasswordForm = ({ email }) => {
    setResetPasswordStatus('pending')
    api
      .resetPassword(email)
      .then((response) => {
        setResetPasswordStatus('successful')
      })
      .catch(() => {
        setResetPasswordStatus('failed')
      })
  }

  return (
    <div className={styles.ResetPasswordWrapper}>
      <div className="star-container" />
      <div className="twinkle" />
      <div className={styles.ResetPassword}>
        <div className={styles.logo}>
          <Link to={routes.root} className="d-block">
            <img src={logo} alt="Stars logo" />
          </Link>
        </div>
        <Container>
          <Row>
            <Col xl={{ span: 8, offset: 2 }}>
              <Formik
                initialValues={{ email: '' }}
                validate={({ email }) => {
                  const errors = {}

                  if (!isValidEmail(email)) {
                    errors.email = t('resetPasswordPage.inputs.email.error')
                  }

                  return errors
                }}
                onSubmit={submitResetPasswordForm}
              >
                {() => (
                  <Form className={styles.form}>
                    <h2 className={styles.mainTitle}>{t('Востановление пароля')}</h2>
                    <Field
                      className={styles.field}
                      type="email"
                      name="email"
                      placeholder={t('email')}
                      component={Input}
                    />
                    <Button
                      className={styles.submitButton}
                      color="perrywinkle"
                      size="medium"
                      type="submit"
                      disabled={resetPasswordStatus === 'pending'}
                    >
                      {t('Сбросить')}
                    </Button>
                    {resetPasswordStatus === 'successful' && (
                      <p className="mt-3 text-center">{t('Вам на почту письмо')}</p>
                    )}
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
