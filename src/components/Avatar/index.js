import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import styles from './Avatar.module.scss'
import avatar from '../../scss/media/camera_200.png'
import { api } from '../../api'
import * as actions from '../../actions/app.actions'
import { isValidImageType } from '../../utils'
import { Input } from 'reactstrap'

const AutoSubmit = ({ initialValues, values, submitForm }) => {
  useEffect(() => {
    if (initialValues !== values) {
      submitForm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])
  return null
}

// eslint-disable-next-line react/prop-types
export default function Avatar({ url, className }) {
  const dispatch = useDispatch()

  const submitAvatarForm = ({ avatar }) => {
    api
      .updateAvatar(avatar)
      .then(() => {
        api
          .getUserInfo()
          .then((response) => {
            dispatch(actions.userInfoSuccess(response))
          })
          .catch(() => {})
      })
      .catch(() => {})
  }

  return (
    <div className={`${className}`}>
      <Formik
        initialValues={{
          avatar: null,
        }}
        validate={({ avatar }) => {
          const errors = {}

          if (avatar.size / 1024 / 1024 >= 10) {
            errors.avatar = 'Размер изображения превышает 10Mb'
          }

          if (!isValidImageType(avatar.type)) {
            errors.avatar = 'Неверный формат изображения'
          }

          return errors
        }}
        onSubmit={submitAvatarForm}
      >
        {(props) => (
          <Form>
            <Field>
              {({ form }) => (
                <div className={styles.inputWrapper}>
                  <img src={url || avatar} alt="аватар пользователя" />
                  <Input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={({ target: { files } }) => {
                      if (files && files[0]) {
                        const image = files[0]
                        form.setFieldValue('avatar', image)
                      }
                    }}
                  />
                </div>
              )}
            </Field>
            {/* eslint-disable-next-line react/prop-types */}
            {props.errors && (
              // eslint-disable-next-line react/prop-types
              <p className={styles.errorMessage}>{props.errors.avatar}</p>
            )}
            <AutoSubmit {...props} />
          </Form>
        )}
      </Formik>
      <span className={styles.circle}></span>
    </div>
  )
}
