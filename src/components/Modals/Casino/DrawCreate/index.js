import React, { useCallback, useState, useEffect, useMemo } from 'react'
import {
  Row,
  Col,
  FormGroup,
  Input as SelectInput,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import confirm from 'reactstrap-confirm'
import isEmpty from 'lodash-es/isEmpty'

import * as actions from '../../../../actions/casino.actions'
import DrawCreateCalculator from './Calculator'
import { validationSchema } from './validationSchema'
import Button from '../../../../components/Button'
import Input from '../../../../components/Input'
import { formatter } from '../../../../utils'

function DrawCreateModal() {
  const dispatch = useDispatch()
  const [table, setTable] = useState(null)
  const prizes = useSelector((state) => state.casino.prizes)
  const isVisible = useSelector((state) => state.casino.modals.create)
  const isLoading = useSelector((state) => state.casino.loadings.create)

  const initialValues = useMemo(
    () =>
      isVisible && {
        public: 'true',
        password: '',
        repeat_password: '',
        prizesProgram: '',
        prizesId: '',
        prizesCount: 1,
        membersCount: 10,
      },
    [isVisible],
  )

  const handleCloseModal = useCallback(() => {
    dispatch(actions.toggleCasinoDrawCreateModal(false))
  }, [dispatch])

  const handleOnSubmit = useCallback(
    async (values) => {
      const { public: typeDraw, membersCount, password, prizesId, prizesCount } = values
      const requestValue = {
        prizes: [{ id: Number(prizesId), count: Number(prizesCount) }],
        password: password || null,
        membersCount,
      }

      let result = await confirm({
        title: 'Создание розыгрыша',
        message: `Вы хотите запустить ${
          typeDraw === 'true' ? 'Публичный' : 'Частный'
        } розыгрыш, выигрыш в котором ${formatter
          .format(table.cost * prizesCount)
          .replace('₽', 'ST')}, на ${membersCount} участников?`,
        confirmText: 'Подтвердить',
        confirmColor: 'primary',
        cancelText: 'Отмена',
        cancelColor: 'link text-muted',
      })

      if (result) {
        dispatch(actions.casinoDrawCreate(requestValue))
      }
    },
    [dispatch, table],
  )

  useEffect(() => {
    if (isVisible) {
      dispatch(actions.casinoDrawPrizes())
    } else {
      setTable(null)
    }
  }, [dispatch, isVisible])

  const filterMatrixByProgram = useCallback(
    (program) => {
      let prefix = null
      switch (program) {
        case 'star':
          prefix = 'm'
          break
        case 'premium':
          prefix = 'auto'
          break
        case 'startrek':
          prefix = 'trek'
          break

        default:
          break
      }
      return prizes.filter((item) => item.name.toLowerCase().includes(prefix))
    },
    [prizes],
  )

  // set default values for table after select program
  const handleSelectProgram = useCallback((setFieldValue) => {
    setFieldValue('prizesId', '')
    setFieldValue('prizesCount', 1)
    setTable(null)
  }, [])

  const handleSelectTable = useCallback(
    (tableId) => {
      let newTable = null
      if (!isEmpty(prizes) && tableId) {
        newTable = prizes.find((prize) => prize.id === Number(tableId)) || null
      }

      setTable(newTable)
    },
    [prizes],
  )

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ values, errors, touched, setFieldValue, handleChange, handleBlur, isValid, dirty }) => (
        <Modal
          size="lg"
          keyboard={false}
          backdrop="static"
          isOpen={isVisible}
          toggle={handleCloseModal}
        >
          <Form>
            <ModalHeader toggle={handleCloseModal}>Создание розыгрыша</ModalHeader>
            <ModalBody>
              <Row>
                <Col lg={8}>
                  <FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Field
                          type="radio"
                          className="form-check-input"
                          id="publicTrue"
                          name="public"
                          value="true"
                        />
                        Публичный
                      </Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Label check>
                        <Field
                          type="radio"
                          className="form-check-input"
                          id="publicFalse"
                          name="public"
                          value="false"
                        />
                        Частный
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  {values.public === 'false' && (
                    <>
                      <FormGroup>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Задайте пароль"
                          component={Input}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Field
                          type="password"
                          name="repeat_password"
                          placeholder="Повторить пароль"
                          component={Input}
                        />
                      </FormGroup>
                    </>
                  )}
                  <FormGroup>
                    <Label className="form-control-label">Выберите программу</Label>
                    <SelectInput
                      type="select"
                      name="prizesProgram"
                      value={values.prizesProgram}
                      onBlur={handleBlur}
                      onChange={(event) => {
                        handleSelectProgram(setFieldValue)
                        handleChange(event)
                      }}
                    >
                      <option value="">-</option>
                      <option value="star">STAR</option>
                      <option value="premium">Premium STARS</option>
                      {/* <option value="startrek">Star Trek</option> */}
                    </SelectInput>
                    {errors.prizesProgram && touched.prizesProgram && (
                      <small className="form-text text-danger">{errors.prizesProgram}</small>
                    )}
                  </FormGroup>
                  {values.prizesProgram && (
                    <>
                      <FormGroup>
                        <Label className="form-control-label">Выберите место</Label>
                        <SelectInput
                          type="select"
                          name="prizesId"
                          onBlur={handleBlur}
                          onChange={(event) => {
                            handleSelectTable(event.target.value)
                            handleChange(event)
                          }}
                          disabled={!values.prizesProgram}
                          value={values.prizesId}
                        >
                          <option value="">-</option>
                          {filterMatrixByProgram(values.prizesProgram).map((matrix) => (
                            <option key={matrix.id} value={matrix.id}>
                              {matrix.name.toUpperCase()}
                            </option>
                          ))}
                        </SelectInput>
                        {errors.prizesId && touched.prizesId && (
                          <small className="form-text text-danger">{errors.prizesId}</small>
                        )}
                      </FormGroup>
                      <FormGroup>
                        <Field
                          type="text"
                          name="prizesCount"
                          placeholder={
                            Number(values.prizesId) === 10
                              ? 'Количество призов: 1 приз равен STARTREK (10 планет)'
                              : 'Количество призов'
                          }
                          component={Input}
                        />
                      </FormGroup>
                    </>
                  )}
                </Col>
                <Col lg={4}>
                  <DrawCreateCalculator table={table} />
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <Row className="w-100">
                <Col lg={8}>
                  <Button
                    type="submit"
                    color="primary"
                    disabled={!(isValid && dirty) || isLoading}
                    loading={isLoading}
                    block
                  >
                    Запустить
                  </Button>
                </Col>
                <Col lg={4}>
                  <Button onClick={handleCloseModal} color="danger" block>
                    Отменить
                  </Button>
                </Col>
              </Row>
            </ModalFooter>
          </Form>
        </Modal>
      )}
    </Formik>
  )
}

export default DrawCreateModal
