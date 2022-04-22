import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import classnames from 'classnames'
import { matrixActions } from '../../../store/matrix/actions'

// eslint-disable-next-line react/prop-types
function TablesElement({ matrix, transform, urlPrefix }) {
  const dispatch = useDispatch()
  const pointClass = classnames('circle__point', {
    // eslint-disable-next-line react/prop-types
    'circle__point--active': matrix.isActive,
  })

  const saveMatrixInfo = useCallback(
    (matrixInfo) => {
      dispatch(matrixActions.saveCurrentMatrix(matrixInfo))
    },
    [dispatch],
  )

  return (
    <Link
      style={{ transform }}
      className={pointClass}
      /* eslint-disable-next-line react/prop-types */
      to={`/${urlPrefix}/${matrix.id}`}
      onClick={() => saveMatrixInfo(matrix)}
    >
      <div className="circle__star"></div>
      {/* eslint-disable-next-line react/prop-types */}
      <span className="circle__point-number">{matrix.id}</span>
      {/* eslint-disable-next-line react/prop-types */}
      {!!Number(matrix.count) && (
        // eslint-disable-next-line react/prop-types
        <span className="circle__point-count">{matrix.count}</span>
      )}
      {/* eslint-disable-next-line react/prop-types */}
      {!!Number(matrix.clones) && (
        // eslint-disable-next-line react/prop-types
        <span className="circle__point-clones">{matrix.clones}</span>
      )}
    </Link>
  )
}

export default TablesElement
