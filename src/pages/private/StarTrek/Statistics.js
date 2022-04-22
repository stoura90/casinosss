import React from 'react'
import { useSelector } from 'react-redux'
import { formatterNumber } from '../../../utils'

function Statistics() {
  const statistics = useSelector((state) => state.startrek.statistics)
  return (
    statistics && (
      <ul className="startrek__statistics">
        <li>
          <div className="startrek__counter">
            {formatterNumber
              .format(statistics.allPlanet)
              .replace(new RegExp(String.fromCharCode(160), 'g'), '')
              .replace('₽', '')}
          </div>
          <div>Куплено планет</div>
        </li>
        <li>
          <div className="startrek__counter">
            {formatterNumber
              .format(statistics.myPlanet)
              .replace(new RegExp(String.fromCharCode(160), 'g'), '')
              .replace('₽', '')}
          </div>
          <div>Мои места</div>
        </li>
        <li>
          <div className="startrek__counter">
            {formatterNumber
              .format(statistics.allComet)
              .replace(new RegExp(String.fromCharCode(160), 'g'), '')
              .replace('₽', '')}
          </div>
          <div>Всего мест</div>
        </li>
        <li>
          <div className="startrek__counter">
            {formatterNumber
              .format(statistics.myComet)
              .replace(new RegExp(String.fromCharCode(160), 'g'), '')
              .replace('₽', '')}
          </div>
          <div>Мои клонов</div>
        </li>
        <li>
          <div className="startrek__counter">
            {formatterNumber
              .format(statistics.structurePlanet)
              .replace(new RegExp(String.fromCharCode(160), 'g'), '')
              .replace('₽', '')}
          </div>
          <div>Мест в структуре</div>
        </li>
        <li>
          <div className="startrek__counter">
            {formatterNumber
              .format(statistics.firstLinePlanet)
              .replace(new RegExp(String.fromCharCode(160), 'g'), '')
              .replace('₽', '')}
          </div>
          <div>Мест в первой линии</div>
        </li>
        <li className="--full">
          <div className="startrek__counter">
            {formatterNumber
              .format(statistics.myInviterIncome)
              .replace(new RegExp(String.fromCharCode(160), 'g'), '')
              .replace('₽', '')}
          </div>
          <div>Реферальные</div>
        </li>
      </ul>
    )
  )
}

export default Statistics
