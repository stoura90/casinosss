import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../../../../actions/superstar.actions'
import StarRating from '../../../../../components/StarRating'
import styles from './Queue.module.scss'

const STAR_RATING_MAX = 4

function QueueElement({ user }) {
  const dispatch = useDispatch()
  const { userName, photo, freeSlots } = user

  const handleClickUser = useCallback(() => {
    dispatch(actions.setSuperStarInstallComet(user))
    dispatch(actions.toggleSuperStarQueueModal(false))
    dispatch(actions.toggleSuperStarInstallCometsModal())
  }, [dispatch, user])

  return (
    <figure
      onClick={handleClickUser}
      className={`${styles.queueElement} ${freeSlots ? styles.interaction : undefined}`}
    >
      <div
        className={styles.circle}
        /* eslint-disable-next-line react/prop-types */
        style={user.color && { boxShadow: `0 0 25px 5px ${user.color}` }}
      >
        <div className={styles.picture}>
          {photo && <img className={styles.avatar} alt={userName} src={photo} />}
        </div>
      </div>
      <figcaption>
        <StarRating max={STAR_RATING_MAX} rating={STAR_RATING_MAX - freeSlots} />
        <div className={styles.name}>{userName}</div>
      </figcaption>
    </figure>
  )
}

QueueElement.propTypes = {
  user: PropTypes.shape({
    matrixId: PropTypes.number.isRequired,
    freeSlots: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    photo: PropTypes.oneOfType([PropTypes.string]),
  }).isRequired,
}

export default QueueElement
