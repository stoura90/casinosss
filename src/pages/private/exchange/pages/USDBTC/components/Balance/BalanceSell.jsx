import React, { useCallback, useEffect, useState } from 'react'
//import { formatter } from '../../../../../utils'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../../../../../actions/finance.actions'
import Button from '../../../../../../../components/OldButton'

// eslint-disable-next-line react/prop-types
const BalanceSell = ({ Balnce }) => {
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
  return (
    <div className="line_first">
      <span className="c1">Баланс:</span>
      <Button href="javascript:void(0)" className="c2 clSellBalance">
        <span id="label_sell_balance">0.00000000</span> BTC
      </Button>
    </div>
  )
}
export default BalanceSell
