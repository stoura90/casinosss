import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../../../../../actions/finance.actions'
import Button from '../../../../../../../components/OldButton'
import { formatter } from '../../../../../../../utils'

// eslint-disable-next-line react/prop-types
const Balance = ({ Balnce }) => {
  const dispatch = useDispatch()
  const [isOperationsHistoryModalVisible, setIsOperationsHistoryModalVisible] = useState(false)
  const userInfo = useSelector((state) => state.app.user)

  const handleVisibleTransferMoneyModal = useCallback(() => {
    dispatch(actions.toggleTransferMoneyModal(true))
  }, [dispatch])

  const openOperationsHistoryModal = () => {
    document.body.style.overflow = 'hidden'
    setIsOperationsHistoryModalVisible(true)
  }

  const closeOperationsHistoryModal = () => {
    document.body.style.overflow = 'initial'
    setIsOperationsHistoryModalVisible(false)
  }
  const optsBTC = { format: '%v %c', code: 'BTC', maxFraction: 4 }
  const [priceValue, setPriceValue] = useState(0)
  const [totalValue, setTotalValue] = useState(0)
  const estimatedAmount = totalValue / priceValue
  const fee = estimatedAmount * (0.2 / 100)

  // set default prive value
  // when component mounted with useEffect hooks
  useEffect(() => {
    setPriceValue(Balnce)
  }, [Balnce])
  const [totalBalanse, setTotalBalanse] = useState('Anil')
  return (
    <>
      {userInfo && (
        <div className="line_first">
          <span className="c1">Баланс:</span>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,no-script-url */}
          <Button className="c2 clBuyBalance">
            <span
              id="label_buy_balance"
              onClick={(event) => {
                setTotalBalanse(event.target.value)
              }}
            >
              {formatter
                .format((userInfo.balance > -1 && userInfo.balance) || 0.0)
                .replace('₽', 'BTC')}
            </span>{' '}
          </Button>
          <br />
        </div>
      )}
    </>
  )
}
export default Balance
