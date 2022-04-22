import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { FormGroup, Button } from 'reactstrap'
import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { isValidPassword, isValidUsername, setAccessToken } from '../../utils'
import { api } from '../../api'
import * as actions from '../../actions/auth.actions'
import logo from '../../scss/media/kosmos.png'
import { initial } from 'lodash'
import Input from '../../components/Input'
import routes from '../../constants/routes.constants'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
AOS.refresh()
function SignIn() {
  const dispatch = useDispatch()
  const [serverError, setServerError] = useState(null)
  const [clientCredentials, setClientCredentials] = useState(null)

  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        username: yup
          .string()
          .required()
          .test('username', 'username', (value) => isValidUsername(value)),
        password: yup
          .string()
          .required()
          .test('password', 'password', (value) => isValidPassword(value)),
      }),
    [],
  )

  const submitSignInForm = useCallback(
    (credentials) => {
      setServerError()
      api
        .signIn({ ...credentials, ...clientCredentials })
        .then((response) => {
          dispatch(actions.signInSuccess())
          setAccessToken(response)

          api
            .getUserInfo()
            .then(() => {})
            .catch(() => {})
        })
        .catch(() => {
          setServerError('Неверный логин или пароль.')
        })
    },
    [dispatch, clientCredentials],
  )

  useEffect(() => {
    api
      .createClient()
      .then((response) => {
        if (response && response.client_id && response.client_secret) {
          setClientCredentials(response)
          localStorage.setItem('client_id', response.client_id)
          localStorage.setItem('client_secret', response.client_secret)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <div className="auth__wrapper">
      <div className="page">
        <div className="auth__page">
          <div className="auth__logo">
            <Link to={routes.root}>
              <img src={logo} alt="Stars logo" />
            </Link>
          </div>
          <Formik
            validationSchema={validationSchema}
            onSubmit={submitSignInForm}
            initialValues={initial}
          >
            {() => (
              <Form className="auth__form">
                <div className="auth__title">
                  <h2>Вход в системму</h2>
                </div>
                <FormGroup>
                  <Field
                    type="text"
                    name="username"
                    component={Input}
                    placeholder="Введите логин"
                  />
                </FormGroup>
                <FormGroup className="mb-5">
                  <Field
                    type="password"
                    name="password"
                    component={Input}
                    placeholder="Введите пароль"
                  />
                </FormGroup>
                <FormGroup>
                  <Button type="submit" color="primary" size="lg" block>
                    Войти
                  </Button>
                </FormGroup>
                <div className="text-center">
                  <Link to={routes.resetPassword}>{'Забыли пароль?'}</Link>
                </div>
                {serverError && <div className="auth__error">{serverError}</div>}
              </Form>
            )}
          </Formik>
          <div className="auth__footer">
            <Link to={routes.signUp}>Все еще нет Аккаунта?</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SignIn
