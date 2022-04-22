import React, { useCallback, useMemo } from 'react'
import { FormGroup, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import confirm from 'reactstrap-confirm'
import * as yup from 'yup'

import * as actions from '../../../actions/casino.actions'
import { formatter, declOfNum } from '../../../utils'
import Button from '../../../components/Button'
import Input from '../../../components/Input'

function DrawBuyModal() {
  const dispatch = useDispatch()
  const current = useSelector((state) => state.casino.active.current)
  const isVisible = useSelector((state) => state.casino.modals.buy)
  const isLoading = useSelector((state) => state.casino.loadings.buy)

  const initialValues = useMemo(
    () =>
      isVisible &&
      current && {
        isPrivate: current.isPrivate,
        casinoId: current.id,
        countPlace: '',
        password: '',
      },
    [isVisible, current],
  )

  const validationSchema = useMemo(() => {
    return yup.object({
      isPrivate: yup.bool(),
      password: yup.string().when('isPrivate', {
        is: true,
        then: yup
          .string()
          .required('Необходимо заполнить это поле')
          .min(6, 'Пароль должен быть не менее 6 символов'),
        otherwise: yup.string().notRequired(),
      }),
      casinoId: yup.number().required(),
      countPlace: yup
        .number()
        .typeError('Количество мест должно быть числом')
        .integer('Количество мест должно быть целым числом')
        .positive('Количество мест должно быть положительной')
        .required('Необходимо заполнить это поле')
        .max(
          current?.totalMembers - current?.currentMembersCount,
          `Максимальное количество участников ${
            current?.totalMembers - current?.currentMembersCount
          }`,
        ),
    })
  }, [current])

  const handleCloseModal = useCallback(() => {
    dispatch(actions.toggleCasinoDrawBuyModal(false))
  }, [dispatch])

  const handleOnSubmit = useCallback(
    async (values) => {
      const { casinoId, countPlace, password } = values
      const payload = { casinoId, countPlace: Number(countPlace), password }

      let result = await confirm({
        title: 'Принять участие',
        message: `Вы хотите приобрести ${countPlace} ${declOfNum(countPlace, [
          'место',
          'места',
          'мест',
        ])} в розыгрыше Клонов  от ${current.ownerName}, на сумму ${formatter
          .format(current.price * countPlace)
          .replace('₽', 'ST')}`,
        confirmText: 'Подтвердить',
        confirmColor: 'primary',
        cancelText: 'Отмена',
        cancelColor: 'link text-muted',
      })

      if (result) {
        dispatch(actions.casinoDrawBuy(payload))
      }
    },
    [dispatch, current],
  )

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleOnSubmit}
    >
      {({ isValid, dirty }) => (
        <Modal keyboard={false} backdrop="static" isOpen={isVisible} toggle={handleCloseModal}>
          <Form>
            <ModalHeader toggle={handleCloseModal}>
              Присоединиться к розыгрышу {current?.ownerName}
            </ModalHeader>
            <ModalBody>
              {current?.isPrivate && (
                <FormGroup>
                  <Field type="password" name="password" placeholder="Пароль" component={Input} />
                  <FormText>
                    Вы пытаетесь присоединиться к приватному розыгрышу. Пожалуйста введите пароль
                  </FormText>
                </FormGroup>
              )}
              <FormGroup>
                <Field
                  type="text"
                  name="countPlace"
                  placeholder="Сколько мест хотите приобрести?"
                  component={Input}
                />
                <FormText>
                  {`Вы можете приобрести максимум ${
                    current?.totalMembers - current?.currentMembersCount
                  } ${declOfNum(current?.totalMembers - current?.currentMembersCount, [
                    'место',
                    'места',
                    'мест',
                  ])}`}
                </FormText>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                type="submit"
                color="primary"
                disabled={!(isValid && dirty) || isLoading}
                loading={isLoading}
                block
              >
                Присоединиться
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      )}
    </Formik>
  )
}

export default DrawBuyModal
