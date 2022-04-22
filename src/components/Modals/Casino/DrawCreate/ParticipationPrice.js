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
function DrawCreateParticipationPrice({ table }) {
  const { values, setFieldValue } = useFormikContext()

  const handleParticipationPriceDown = () => {
    const increase = values.membersCount + INCREASE_AMOUNT
    let newValue = values.membersCount
    if (increase <= MAX_NUMBER_PEOPLE) {
      newValue = increase
    } else {
      toast.info('Вы выбрали максимальное кол-во участников')
    }
    setFieldValue('membersCount', newValue)
  }

  const handleParticipationPriceUp = () => {
    const decrease = values.membersCount - INCREASE_AMOUNT
    let newValue = MIN_NUMBER_PEOPLE
    if (decrease >= MIN_NUMBER_PEOPLE) {
      newValue = decrease
    } else {
      toast.info('Вы достигли минимального кол-ва участников')
    }
    setFieldValue('membersCount', newValue)
  }

  return table ? (
    <div className="casino-draw__counter">
      <div className="casino-draw__counter--down" onClick={handleParticipationPriceDown}>
        -
      </div>
      <div className="casino-draw__counter--middle">
        <strong>
          {formatter
            // eslint-disable-next-line react/prop-types
            .format((table.cost * values.prizesCount) / values.membersCount)
            .replace('₽', 'ST')}
        </strong>
      </div>
      <div className="casino-draw__counter--up" onClick={handleParticipationPriceUp}>
        +
      </div>
    </div>
  ) : (
    '-'
  )
}

DrawCreateParticipationPrice.propTypes = {}

export default DrawCreateParticipationPrice
