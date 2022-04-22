import React, { useEffect, useMemo, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import Modal from 'react-bootstrap/Modal'
import * as yup from 'yup'

import * as actions from '../../../../../actions/superstar.actions'
import styles from './AssignComets.module.scss'
import closeIcon from '../../../../../scss/media/close.ac2aaa1a.svg'
import Button from '../../../../../components/OldButton'
import Input from '../../../../../components/OldInput'
import { declOfNum } from '../../../../../utils'
import { api } from '../../../../../api'

// eslint-disable-next-line react/prop-types
function AssignComets({ matrixType }) {
  const dispatch = useDispatch()
  const isVisible = useSelector((state) => state.superstar.modals.installComets)
  const user = useSelector((state) => state.superstar.queue.current)
  const [sendCometStatus, setSendCometStatus] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)
  const [matrixClones, setMatrixClones] = useState(null)

  const getMatrixClones = useCallback(async () => {
    if (matrixType && user) {
      const { count } = await api.ssMatrixClones(matrixType)
      if (count > -1) {
        setMatrixClones(count)
      }
    }
  }, [matrixType, user])

  const handleCloseModal = useCallback(() => {
    dispatch(actions.toggleSuperStarInstallCometsModal(false))
  }, [dispatch])

  const initialValue = useMemo(() => ({ count: '', matrix_id: user && user.matrixId }), [user])

  const validationSchema = useMemo(() => {
    const userFreeSlots = user && user.freeSlots
    return yup.object().shape({
      count: yup
        .number()
        .typeError('Количество должно быть числом')
        .positive('Количество должно быть положительным')
        .required('Количество это необходимое поле')
        .test('count', 'У вас нет столько комет', (value) => value <= matrixClones)
        .test(
          'count',
          `У пользователя свободно только ${userFreeSlots} ${declOfNum(userFreeSlots, [
            'место',
            'места',
            'мест',
          ])} `,
          (value) => value <= userFreeSlots,
        ),
      matrix_id: yup.number().required(),
    })
  }, [matrixClones, user])

  const handleOnSubmit = (values, actions) => {
    const payload = {
      matrix_id: Number(values.matrix_id),
      count: Number(values.count),
    }
    setSendCometStatus(true)
    api
      .ssInstallMatrixClones(payload)
      .then(() => {
        setSubmitMessage('Ваша заявка отправлена')
        setMatrixClones((prevState) => prevState - values.count)
        setSendCometStatus(false)
        actions.resetForm()
        setTimeout(() => handleCloseModal(), 1500)
      })
      .catch(() => {
        setSubmitMessage('Произошла ошибка')
        setSendCometStatus(false)
      })
  }

  useEffect(() => {
    getMatrixClones()

    if (!isVisible) {
      setSubmitMessage(null)
    }
  }, [isVisible, getMatrixClones])

  return (
    <Modal show={isVisible} backdrop="static" keyboard={false} onHide={handleCloseModal}>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        <Form>
          <Modal.Header>
            <Modal.Title as="h3">Запустить комету пользователю {user && user.userName}</Modal.Title>
            <button type="button" onClick={handleCloseModal} className="close">
              <img src={closeIcon} alt="Close" />
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className={styles.row}>
              {matrixClones > -1 && (
                <div className={styles.info}>
                  У вас есть <span className={styles.counter}>{matrixClones}</span> <br />
                  {declOfNum(matrixClones, ['комета', 'кометы', 'комет'])} в lvl
                  {matrixType}
                </div>
              )}
              {matrixType && matrixClones > -1 && (
                <div>
                  <Field type="text" name="count" placeholder="Количество" component={Input} />
                </div>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer className={styles.footer}>
            {submitMessage ? (
              submitMessage
            ) : (
              <Button type="submit" disabled={sendCometStatus} color="perrywinkle" size="small">
                Запустить
              </Button>
            )}
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  )
}

export default AssignComets
