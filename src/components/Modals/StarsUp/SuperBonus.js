import React, { useCallback } from 'react'
import { Modal, ModalBody, Button } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import * as actions from '../../../actions/starsup.actions'

function SuperBonusModal() {
  const history = useHistory()
  const dispatch = useDispatch()
  const isVisible = useSelector((state) => state.starsup.modals.superBonus)

  const handleCloseModal = useCallback(() => {
    dispatch(actions.toggleStarsUpSuperBonusModal(false))
    history.push('/starsup')
  }, [dispatch, history])

  return (
    <Modal centered keyboard={false} backdrop="static" isOpen={isVisible}>
      <ModalBody>
        <h4 className="text-center">
          Поздравляем Вас и Вашу команду с получением SuperBonus! <br />
          Благодарим за выбор StarsCommunity, желаем дальнейших успехов!
        </h4>
        <br />
        <div className="text-center">
          <Button color="primary" onClick={handleCloseModal}>
            Спасибо!
          </Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default SuperBonusModal
