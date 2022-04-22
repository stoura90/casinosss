import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './CreateComment.module.scss'
import routes from '../../../../constants/routes.constants'
import { api } from '../../../../api'
import * as actions from '../../../../actions/app.actions'

import Button from '../../../../components/OldButton'

const commentStatuses = {
  success: 'Спасибо за отзыв!',
  fail: 'Произошла ошибка. Ваш отзыв не был отправлен, повторите попытку снова. Приносим извинения',
}

export default function CreateComment() {
  const [rating, setRating] = useState(null)
  const dispatch = useDispatch()
  const [submitStatus, setSubmitStatus] = useState(null)

  const submitCommentForm = ({ text }) => {
    api
      .createComment(text)
      .then(() => {
        setSubmitStatus('success')
        api
          .getUserInfo()
          .then((response) => {
            dispatch(actions.userInfoSuccess(response))
          })
          .catch(() => {})
      })
      .catch(() => {
        setSubmitStatus('fail')
      })
  }

  return (
    <div className={styles.CreateComment}>
      <div className={styles.header}>
        <Container>
          <Row>
            <Col>
              <Link to={routes.education} className={styles.arrow}>
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 61">
                  <path
                    d="M52.59 24.92c1.93-.33 5.15-.44 7.98 1.58l-2.44 1.1s3.48.95 5.8 2.75c-2.55 1.49-6.12 1.95-6.12 1.95l2.27 1.42c-3.08 1.62-6.25 1.08-8.12.5l-5.79-4.37 6.42-4.93z"
                    fill="#8083E6"
                  />
                  <path
                    d="M23.35 21.86c-12.89.52-19.17 5.07-21.15 6.85-.22.19-.35.45-.38.72-.02.27.06.53.24.73 1.65 1.83 7.08 6.53 19.84 7.37 0 0 7.57.52 15.23-2.86l.44-4.78.45-4.79c-7.03-3.56-14.67-3.24-14.67-3.24zM41.45 26.85l-.65 6.3-2.52-.43.57-5.51 2.6-.36z"
                    fill="#fff"
                  />
                  <path d="M36.63 26.06l-.7 7.62 3.05.04.7-7.62-3.05-.04z" fill="#5430BF" />
                  <path
                    d="M25.72 35.72l5.74 4.9c.37.31.8.55 1.3.68.47.14.99.18 1.5.12l10.38-1.24a.9.9 0 00.76-.68.76.76 0 000-.34.7.7 0 00-.23-.37.76.76 0 00-.4-.17c-2.01-.25-9.42-1.4-11.22-5.39l-7.83 2.49zM26.84 23.62l6.64-4.74a4.2 4.2 0 012.95-.73l10.13 1.5c.11.02.22.07.32.13a.71.71 0 01.3.57.8.8 0 01-.06.34.88.88 0 01-.73.53c-2.06.19-9.66 1.16-12.19 5.08l-7.36-2.68z"
                    fill="#3F0A9A"
                  />
                  <path
                    d="M47.22 29.43l-.09 1.02c0 .05-.02.1-.04.16a.47.47 0 01-.26.23.47.47 0 01-.17.03L28.27 31a.53.53 0 01-.2-.04.48.48 0 01-.28-.28.49.49 0 01-.02-.2l.15-1.57c0-.07.02-.13.06-.2a.58.58 0 01.32-.27.57.57 0 01.2-.04l18.33.6a.4.4 0 01.3.14c.06.08.1.18.1.3z"
                    fill="#6663D7"
                  />
                  <path
                    d="M23.19 28.82c-.26-2.21-2.35-3.67-4.67-3.25-2.32.42-4 2.56-3.74 4.77.26 2.22 2.35 3.67 4.67 3.25 2.32-.42 4-2.55 3.74-4.77z"
                    fill="#3F0A9A"
                  />
                  <path
                    d="M19.24 26.9c.54 0 1.05.17 1.47.46.42.3.73.72.9 1.2.16.49.16 1.02 0 1.53a3.03 3.03 0 01-2.34 2.05c-.53.1-1.07.04-1.55-.17a2.42 2.42 0 01-1.46-2.46c.03-.35.14-.7.3-1.01a2.96 2.96 0 011.61-1.42c.35-.12.71-.19 1.07-.18z"
                    fill="#7679EA"
                  />
                </svg>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.main}>
        {submitStatus && (
          <div className={styles.statusModal}>
            <svg
              className={styles.closeButton}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 27 27"
              onClick={() => {
                setSubmitStatus(null)
              }}
            >
              <g clipPath="url(#clip0)" fill="#8083E6">
                <path d="M26.3 22L5.1.6c-.9-.9-2.4-.9-3.3 0L.7 2c-1 .9-1 2.4 0 3.3l21.2 21.2c.9.9 2.4.9 3.3 0l1.1-1.2c1-.9 1-2.4 0-3.3z" />
                <path d="M21.9.7L.7 22c-1 1-1 2.4 0 3.3l1.1 1.2c1 .9 2.4.9 3.3 0L26.3 5.2c1-1 1-2.4 0-3.3L25.2.7c-1-.9-2.4-.9-3.3 0z" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path fill="#fff" d="M0 0h27v27H0z" />
                </clipPath>
              </defs>
            </svg>
            {commentStatuses[submitStatus]}
          </div>
        )}
        <div className={submitStatus ? styles.invisible : ''}>
          <h2 className={styles.title}>Оставить отзыв</h2>
          <div className={styles.rating}>
            {[...Array(5).keys()].map((index) => (
              <svg
                key={index}
                className={index === rating ? styles.active : ''}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 33 31"
                onClick={() => setRating(index)}
              >
                <path
                  d="M15.7 1.2a1 1 0 011.85 0l3.63 8.68a1 1 0 00.85.62l9.41.75a1 1 0 01.57 1.75l-7.16 6.1a1 1 0 00-.33 1l2.2 9.13a1 1 0 01-1.5 1.09l-8.07-4.9a1 1 0 00-1.04 0l-8.08 4.9a1 1 0 01-1.49-1.1l2.2-9.12a1 1 0 00-.33-1L1.24 13a1 1 0 01.57-1.75l9.42-.75a1 1 0 00.84-.62L15.7 1.2z"
                  fill="#4B0FB2"
                />
              </svg>
            ))}
          </div>
          <Formik
            initialValues={{
              text: '',
            }}
            onSubmit={submitCommentForm}
          >
            {() => (
              <Form className={styles.form}>
                <Field name="text" component="textarea" />
                <Button color="perrywinkle" size="medium" type="submit">
                  Отправить
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}
