import React, { useState, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import isEmpty from 'lodash'

import arrowLeft from '../../../scss/media/angle-left.309b1344.svg'
import arrowRight from '../../../scss/media/angle-right.2219c635.svg'
import styles from './SuperStars.module.scss'

// eslint-disable-next-line react/prop-types
function SuperStarPagination({ items, currentId }) {
  const history = useHistory()
  const [currentPage, setCurrentPage] = useState(1)

  const pager = useMemo(() => {
    let end = 5
    let begin = 0
    if (currentPage > 3) {
      begin = currentPage - 3
      end = currentPage + 2
    }

    // eslint-disable-next-line react/prop-types
    if (items.length > 4 && currentPage > items.length - 3) {
      // eslint-disable-next-line react/prop-types
      begin = items.length - 5
      // eslint-disable-next-line react/prop-types
      end = items.length
    }

    return [...items].slice(begin, end)
  }, [currentPage, items])

  const changePage = (page) => {
    // eslint-disable-next-line react/prop-types
    const elem = items.find((e) => e.page === page)
    if (elem) {
      history.push(`/MATRIX3-table/${elem.value}`)
    }

    setCurrentPage(page)
  }

  return (
    <div className={styles.navigation}>
      <div
        className={`${currentPage === 1 ? styles.disabled : undefined} ${styles.sideArrow}`}
        onClick={() => changePage(1)}
      >
        <img src={arrowLeft} className={styles.arrowLeft} alt="Arrow left" />
      </div>
      <div
        className={`${currentPage === 1 && styles.disabled} ${styles.arrow}`}
        onClick={() => {
          changePage(currentPage - 1 > 1 ? currentPage - 1 : 1)
        }}
      >
        <img src={arrowLeft} className={styles.arrowLeft} alt="Arrow left" />
      </div>
      {!isEmpty(items) &&
        pager.map((elem, i) => {
          return (
            <div
              key={i.toString()}
              className={currentPage === elem.page ? styles.active : undefined}
              onClick={() => changePage(elem.page)}
            >
              {elem.page}
            </div>
          )
        })}
      <div
        /* eslint-disable-next-line react/prop-types */
        className={`${
          // eslint-disable-next-line react/prop-types
          currentPage === items.length ? styles.disabled : undefined
        } ${styles.arrow}`}
        onClick={() => changePage(currentPage + 1)}
      >
        <img src={arrowRight} className={styles.arrowRight} alt="Arrow right" />
      </div>
      <div
        /* eslint-disable-next-line react/prop-types */
        className={`${currentPage === items.length && styles.disabled} ${styles.sideArrow}`}
        /* eslint-disable-next-line react/prop-types */
        onClick={() => changePage(items.length)}
      >
        <img src={arrowRight} className={styles.arrowRight} alt="Arrow right" />
      </div>
    </div>
  )
}

export default SuperStarPagination
