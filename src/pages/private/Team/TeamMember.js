import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import r from '../../../constants/routes.constants'
import { matrixActions } from '../../../store/matrix/actions'
import StarRating from '../../../components/StarRating'

function TeamMember({ member }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    id,
    username,
    email,
    // eslint-disable-next-line react/prop-types
    payed,
    phone,
    // eslint-disable-next-line react/prop-types
    matrix,
    // eslint-disable-next-line react/prop-types
    super: superStar,
    // eslint-disable-next-line react/prop-types
    comet,
    // eslint-disable-next-line react/prop-types
    planet,
    // eslint-disable-next-line react/prop-types
    auto,
    // eslint-disable-next-line react/prop-types
    tg,
    // eslint-disable-next-line react/prop-types
    vk,
    // eslint-disable-next-line react/prop-types
    instagram,
    // eslint-disable-next-line react/prop-types
    firstName,
    // eslint-disable-next-line react/prop-types
    lastName,
  } = member

  const saveCurrentMatrix = useCallback(
    (matrixInfo) => {
      dispatch(matrixActions.saveCurrentMatrix(matrixInfo))
    },
    [dispatch],
  )

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__header-left">
          <h3 className="card__title">
            <Link className="team__user" to={`${r.team}/${id}`}>
              {username}
            </Link>
          </h3>
        </div>
        <div className="card__header-right">ID: {id}</div>
      </div>
      <div className="card__body">
        <div className="list-info list-info--horizontal">
          <div className="list-info__group">
            <div className="list-info__label">Имя Фамилия:</div>
            <div className="list-info__value">{`${firstName} ${lastName}`}</div>
          </div>
          <div className="list-info__group">
            <div className="list-info__label">Почта:</div>
            <div className="list-info__value">{email}</div>
          </div>
          <div className="list-info__group">
            <div className="list-info__label">Оплата:</div>
            <div className="list-info__value">{payed ? 'Да' : 'Нет'}</div>
          </div>
          <div className="list-info__group">
            <div className="list-info__label">Телефон:</div>
            <div className="list-info__value">{phone}</div>
          </div>
          <div className="list-info__group">
            <div className="list-info__label">SuperStar:</div>
            <div className="list-info__value">
              {superStar ? (
                <StarRating
                  max={10}
                  size={18}
                  matrix={Object.values(superStar)}
                  onClick={(value) => {
                    saveCurrentMatrix(value)
                    history.push(`/MATRIX3-table/${value.matrixId}`, {
                      useBack: true,
                    })
                  }}
                />
              ) : (
                '-'
              )}
            </div>
          </div>
          <div className="list-info__group">
            <div className="list-info__label">Stars:</div>
            <div className="list-info__value">
              {matrix ? (
                <StarRating
                  max={10}
                  size={18}
                  matrix={Object.values(matrix)}
                  onClick={(value) => {
                    saveCurrentMatrix(value)
                    history.push(`/table/${value.matrixId}`, { useBack: true })
                  }}
                />
              ) : (
                '-'
              )}
            </div>
          </div>
          <div className="list-info__group">
            <div className="list-info__label">PremiumStars:</div>
            <div className="list-info__value">
              {auto ? (
                <StarRating
                  max={10}
                  size={18}
                  matrix={Object.values(auto)}
                  onClick={(value) => {
                    saveCurrentMatrix(value)
                    history.push(`/auto-table/${value.matrixId}`, {
                      useBack: true,
                    })
                  }}
                />
              ) : (
                '-'
              )}
            </div>
          </div>
          <div className="list-info__group">
            <div className="list-info__label">Куплено планет:</div>
            <div className="list-info__value">{planet}</div>
          </div>
          <div className="list-info__group">
            <div className="list-info__label">Куплено комет:</div>
            <div className="list-info__value">{comet}</div>
          </div>
          <div className="list-info__group">
            <div className="list-info__label">Instagram:</div>
            <div className="list-info__value">
              {instagram ? (
                <a href={`https://www.instagram.com/${instagram}`} rel="noreferrer" target="_blank">
                  {instagram}
                </a>
              ) : (
                '-'
              )}
            </div>
          </div>
          <div className="list-info__group">
            <div className="list-info__label">Вконтакте:</div>
            <div className="list-info__value">
              {vk ? (
                <a href={`https://vk.com/${vk}`} rel="noreferrer" target="_blank">
                  {vk}
                </a>
              ) : (
                '-'
              )}
            </div>
          </div>
          <div className="list-info__group">
            <div className="list-info__label">Telegram:</div>
            <div className="list-info__value">
              {tg ? (
                <a href={`https://t.me/${tg}`} rel="noreferrer" target="_blank">
                  {tg}
                </a>
              ) : (
                '-'
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

TeamMember.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
}

export default TeamMember
