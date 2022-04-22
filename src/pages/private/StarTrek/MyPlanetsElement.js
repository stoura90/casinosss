import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames'
import { randomBetween } from '../../../utils'

import * as actions from '../../../actions/startrek.actions'

function MyPlanetsElement({ planet }) {
  const dispatch = useDispatch()
  const { level, comets, sum, dateCreate, id } = planet
  const selected = useSelector((state) => state.startrek.selected)
  const isSelected = !!selected.includes(id)

  const random = useMemo(() => randomBetween(1, 8), [])
  const planetImg = useMemo(() => require(`../../../scss/media/planet-${random}.png`), [random])

  const handleOnSetPlanetForUpdate = () => dispatch(actions.setPlanetForUpdate(id))

  return (
    <div
      onClick={handleOnSetPlanetForUpdate}
      className={classnames('startrek__planet-card', {
        'startrek__planet-card--selected': isSelected,
      })}
    >
      <div
        className="startrek__planet-card-picture"
        style={{ backgroundImage: `url(${planetImg.default})` }}
      />
      <div className="card">
        <div className="card__header">
          <div className="card__header-left">
            <h3 className="card__title text-center">место №{id}</h3>
          </div>
        </div>
        <div className="card__body">
          <div className="list-info list-info--horizontal">
            <div className="list-info__group">
              <div className="list-info__label">Время приобретения:</div>
              <div className="list-info__value">{dateCreate}</div>
            </div>
            <div className="list-info__group">
              <div className="list-info__label">Уровень:</div>
              <div className="list-info__value">{level}</div>
            </div>
            <div className="list-info__group">
              <div className="list-info__label">Выплаты по уровням (RUB):</div>
              <div className="list-info__value">{sum}</div>
            </div>
            <div className="list-info__group">
              <div className="list-info__label">Остаток клонов:</div>
              <div className="list-info__value">{comets}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

MyPlanetsElement.propTypes = {
  planet: PropTypes.shape({
    id: PropTypes.number,
    level: PropTypes.number,
    sum: PropTypes.number,
    comets: PropTypes.number,
    dateCreate: PropTypes.string,
  }),
}

export default MyPlanetsElement
