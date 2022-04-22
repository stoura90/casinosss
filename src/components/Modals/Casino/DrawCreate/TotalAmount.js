import React from 'react'
import { useFormikContext } from 'formik'
import { toast } from 'react-toastify'

import {
  INCREASE_AMOUNT,
  MIN_NUMBER_PEOPLE,
  MAX_NUMBER_PEOPLE,
} from '../../../../constants/casino.constants'
import { formatter } from '../../../../utils'

// eslint-disable-next-line react/prop-types
function DrawCreateTotalAmount({ table }) {
  const { values, setFieldValue } = useFormikContext()

  const handleTotalPriceDown = () => {
    const decrease = values.prizesCount - INCREASE_AMOUNT
    let newValue = MIN_NUMBER_PEOPLE
    if (decrease >= MIN_NUMBER_PEOPLE) {
      newValue = decrease
    } else {
      toast.info('Вы достигли минимального кол-ва мест')
    }
    setFieldValue('prizesCount', newValue)
  }

  const handleTotalPriceUp = () => {
    const increase = values.prizesCount + INCREASE_AMOUNT
    let newValue = values.prizesCount
    if (increase <= MAX_NUMBER_PEOPLE) {
      newValue = increase
    } else {
      toast.info('Вы выбрали максимальное кол-во мест')
    }
    setFieldValue('prizesCount', newValue)
  }

  return table ? (
    <div className="casino-draw__counter">
      <div className="casino-draw__counter--down" onClick={handleTotalPriceDown}>
        -
      </div>
      <div className="casino-draw__counter--middle">
        {/* eslint-disable-next-line react/prop-types */}
        <strong>{formatter.format(table.cost * values.prizesCount).replace('₽', 'ST')}</strong>
      </div>
      <div className="casino-draw__counter--up" onClick={handleTotalPriceUp}>
        +
      </div>
    </div>
  ) : (
    '-'
  )
}

export default DrawCreateTotalAmount
