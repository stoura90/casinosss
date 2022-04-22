import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './ClonesModal.module.scss'
import { api } from '../../../../../api'
import { isValidNumber } from '../../../../../utils'

import Input from '../../../../../components/OldInput'
import Button from '../../../../../components/OldButton'

//TODO: create component 'Modal'

// eslint-disable-next-line react/prop-types
export default function ClonesModal({ status, matrixType, onClose }) {
  const [callStatus, setCallStatus] = useState(false)
  const [matrixClones, setMatrixClones] = useState(null)
  const [submitMessage, setSubmitMessage] = useState(null)

  const submitArrangeClonesForm = (info) => {
    setCallStatus(true)
    api
      .arrangeAutoMatrixClones({
        matrix_type: Number(info.matrix_type),
        count: Number(info.count),
      })
      .then(() => {
        setSubmitMessage('Ваша заявка отправлена')
        setMatrixClones((prevState) => prevState - info.count)
        setCallStatus(false)
      })
      .catch(() => {
        setSubmitMessage('Произошла ошибка')
        setCallStatus(false)
      })
  }

  useEffect(() => {
    if (matrixType) {
      api
        .getAutoMatrixClonesCout(matrixType)
        .then((response) => {
          if (response.count > -1) {
            setMatrixClones(response.count)
          }
        })
        .catch(() => {})
    }
  }, [matrixType])

  return (
    <div className={styles.ClonesModal}>
      <Container>
        <Row>
          <Col className="position-static">
            <svg
              className={styles.closeButton}
              width="30"
              height="30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClose}
            >
              <g clipPath="url(#clip0)" fill="#fff">
                <path d="M29.2 24.3L5.7.8c-1-1-2.7-1-3.7 0L.8 2.1c-1 1-1 2.7 0 3.7l23.5 23.5c1 1 2.7 1 3.7 0l1.2-1.2c1-1 1-2.7 0-3.8z" />
                <path d="M24.3.8L.8 24.3c-1 1-1 2.7 0 3.8L2 29.3c1 1 2.7 1 3.7 0L29.2 5.8c1-1 1-2.7 0-3.7L28 .8c-1-1-2.7-1-3.7 0z" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <path fill="#fff" d="M0 0h30v30H0z" />
                </clipPath>
              </defs>
            </svg>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="d-xl-flex justify-content-between">
            {matrixClones > -1 && (
              <div className={styles.clonesCounter}>
                <p>У вас есть</p>
                <span className={styles.counter}>{matrixClones}</span>
                <p>клонов в M{matrixType}</p>
              </div>
            )}

            {matrixType && matrixClones > -1 && (
              <div className={styles.arrangeClones}>
                <Formik
                  initialValues={{
                    count: '',
                    matrix_type: matrixType,
                  }}
                  validate={({ count }) => {
                    const errors = {}

                    if (!isValidNumber(count) || count > matrixClones) {
                      errors.count = 'Неверное количество клонов'
                    }

                    return errors
                  }}
                  onSubmit={submitArrangeClonesForm}
                >
                  {() => (
                    <Form>
                      <Field placeholder="Количество" type="text" name="count" component={Input} />
                      <Button type="submit" disabled={callStatus || true} color="violet-blue">
                        Расставить
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col>{submitMessage && <p className={styles.submitMessage}>{submitMessage}</p>}</Col>
        </Row>
      </Container>
    </div>
  )
}
