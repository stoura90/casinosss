import React, { useCallback } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { declOfNum } from '../../../utils'

import * as actions from '../../../actions/starsup.actions'

function PackageBuySuccessModal() {
  const dispatch = useDispatch()
  const result = useSelector((state) => state.starsup.package)
  const isVisible = useSelector((state) => state.starsup.modals.buyPackage)

  const handleCloseModal = useCallback(() => {
    dispatch(actions.toggleStarsUpPackageBuySuccessModal(false))
  }, [dispatch])

  return (
    <Modal centered keyboard={false} backdrop="static" isOpen={isVisible} toggle={handleCloseModal}>
      {result && (
        <>
          <ModalHeader toggle={handleCloseModal}>
            {`Спасибо, что ${
              result.pack
                ? `выбрали пакет ${result.pack.packName}`
                : `приобрели ${result.count} ${declOfNum(result.count, ['место', 'места', 'мест'])}`
            }!`}
          </ModalHeader>
          <ModalBody>
            <h5 className="text-center">
              {`«Ожидайте, ваша заявка принята, ${declOfNum(result.count, [
                'место будет начислено',
                'места будут начислены',
                'мест будет начислено',
              ])} в течении пяти
          минут. Позволь вселенной работать для тебя вместе с StarsUp!»`}
            </h5>
          </ModalBody>
        </>
      )}
    </Modal>
  )
}

export default PackageBuySuccessModal
