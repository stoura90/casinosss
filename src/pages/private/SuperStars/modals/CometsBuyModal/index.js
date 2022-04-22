import React, { useEffect, useMemo, useCallback, useState } from 'react'
import { Formik, Form, Field } from 'formik'

import Input from '../../../../../components/OldInput'
import Button from '../../../../../components/OldButton'
import styles from './CometsBuyModal.module.scss'
import closeIcon from '../../../../../scss/media/close.ac2aaa1a.svg'
import { isValidNumber } from '../../../../../utils'
import { api } from '../../../../../api'

// eslint-disable-next-line react/prop-types
function CometsBuy({ matrixType, onClose }) {
  const [byStatus, setByStatus] = useState(false)
  const [matrixClones, setMatrixClones] = useState(null)
  const [submitMessage, setSubmitMessage] = useState(null)

  const submitArrangeClonesForm = (info, actions) => {
    setByStatus(true)
    api
      .ssBuyMatrixClones({
        matrix_id: Number(info.matrix_id),
        count: Number(info.count),
      })
      .then(() => {
        setSubmitMessage('Кометы куплены, порадуйте своих партнеров')
        setMatrixClones((prevState) => prevState + Number(info.count))
        actions.resetForm()
        setByStatus(false)

        setTimeout(() => {
          onClose()
        }, 2000)
      })
      .catch(() => {
        setSubmitMessage('Произошла ошибка')
        setByStatus(false)
      })
  }

  const initialValue = useMemo(() => ({ count: '', matrix_id: matrixType }), [matrixType])

  const validate = useCallback(({ count }) => {
    const errors = {}

    if (!isValidNumber(count) || count <= 0) {
      errors.count = 'Неверное количество комет'
    }

    return errors
  }, [])

  useEffect(() => {
    if (matrixType) {
      api
        .ssMatrixClones(matrixType)
        .then((response) => {
          if (response.count > -1) {
            setMatrixClones(response.count)
          }
        })
        .catch(() => {})
    }
  }, [matrixType])

  return (
    <Formik onSubmit={submitArrangeClonesForm} initialValues={initialValue} validate={validate}>
      <Form className={styles.ClonesModal}>
        <div className={styles.header}>
          <button type="button" onClick={onClose} className={styles.close}>
            <img src={closeIcon} alt="Close" />
          </button>
          <h3>Купить комет</h3>
        </div>

        <div className={styles.content}>
          <div className={styles.row}>
            {matrixClones > -1 && (
              <div className={styles.info}>
                У вас есть <span className={styles.counter}>{matrixClones}</span> <br />
                Комет в lvl{matrixType}
              </div>
            )}
            {matrixType && matrixClones > -1 && (
              <div>
                <Field type="text" name="count" placeholder="Количество" component={Input} />
              </div>
            )}
          </div>
        </div>
        <div className={styles.footer}>
          <Button type="submit" disabled={byStatus} color="perrywinkle" size="small">
            Купить
          </Button>
        </div>
        {submitMessage && <div className={styles.window}>{submitMessage}</div>}
      </Form>
    </Formik>
  )
}

export default CometsBuy
