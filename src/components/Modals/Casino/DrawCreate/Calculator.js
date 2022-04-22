import React from 'react'
import { useFormikContext } from 'formik'

import DrawCreateParticipationPrice from './ParticipationPrice'
import DrawCreateNumberParticipants from './NumberParticipants'
import DrawCreateTotalAmount from './TotalAmount'
import { formatter } from '../../../../utils'

// eslint-disable-next-line react/prop-types
function DrawCreateCalculator({ table }) {
  const { values } = useFormikContext()

  return (
    <dl className="casino-draw__calculator">
      <dt className="h5">Калькулятор</dt>
      <dd>
        {table ? (
          <strong className="casino-draw__calculator-name">
            {/* eslint-disable-next-line react/prop-types */}
            {`${table.name.toUpperCase()} (${values.prizesCount}) x ${formatter
              // eslint-disable-next-line react/prop-types
              .format(table.cost)
              .replace('₽', 'ST')}`}
          </strong>
        ) : (
          '-'
        )}
      </dd>
      <dt>Количество участников:</dt>
      <dd>
        <DrawCreateNumberParticipants table={table} />
      </dd>
      <dt>Сумма для участия:</dt>
      <dd>
        <DrawCreateParticipationPrice table={table} />
      </dd>
      <dt>Общая сумма розыгрыша:</dt>
      <dd>
        <DrawCreateTotalAmount table={table} />
      </dd>
    </dl>
  )
}

DrawCreateCalculator.propTypes = {}

export default DrawCreateCalculator
