import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './MatrixCell.module.scss'
import avatarFallback from '../../../../../scss/media/camera_200.png'

const branchingLines = (place) => {
  if (place === 0) {
    return (
      <svg
        className={styles.branchingLines}
        width="183"
        height="24"
        viewBox="0 0 183 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 52V12h90m91 32V12H91m0 32V12H91m0 0V0" stroke="#FF0F20" strokeWidth="2" />
      </svg>
    )
  } else if (place === 1 || place === 2 || place === 3) {
    return (
      <svg
        className={styles.branchingLines}
        width="92"
        height="20"
        viewBox="0 0 92 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 18v-8h45m45 9v-9H46m0 0V1" stroke="#8083E6" strokeWidth="1.5" />
      </svg>
    )
  }
}

// eslint-disable-next-line react/prop-types
export default function MatrixCell({
  // eslint-disable-next-line react/prop-types
  place,
  // eslint-disable-next-line react/prop-types
  info,
  // eslint-disable-next-line react/prop-types
  isActive,
  // eslint-disable-next-line react/prop-types
  onClick,
  // eslint-disable-next-line react/prop-types
  onDoubleClick,
}) {
  const history = useHistory()
  const [isMobile, setIsMobile] = useState(null)

  const matrixCellHandler = () => {
    if (isActive) {
      // eslint-disable-next-line react/prop-types
      if (info && info.id) {
        // eslint-disable-next-line react/prop-types
        history.push(`/premium-table/${info.id}`)
      } else {
        onDoubleClick()
      }
    }
  }

  const getShadowSize = () => {
    //TODO: Convert to useMemo
    if (isMobile) {
      return place === 0 ? '45px' : '35px'
    } else {
      return place === 0 ? '80px' : '60px'
    }
  }

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 1200) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <div
      className={`${styles.MatrixCell} ${place === 0 ? styles.main : styles.small}`}
      onDoubleClick={matrixCellHandler}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {info && info.count > -1 && (
        // eslint-disable-next-line react/prop-types
        <span className={styles.counter}>{info.count}</span>
      )}
      <div className={styles.photo}>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 62">
          <circle cx="30.6305" cy="30.9177" r="25.2154" stroke="#8083E6" strokeWidth="9.86691" />
        </svg>
        <img
          src={`${
            info
              ? // eslint-disable-next-line react/prop-types
                info.photo
                ? // eslint-disable-next-line react/prop-types
                  `${process.env.REACT_APP_BASE_URL}${info.photo}`
                : avatarFallback
              : avatarFallback
          }`}
          alt=""
        />
        <div
          className={styles.shadow}
          style={{
            // eslint-disable-next-line react/prop-types
            boxShadow: `0px 0px 24px ${getShadowSize()} ${
              // eslint-disable-next-line react/prop-types
              info ? info.color : 'transparent'
            }`,
          }}
        />
      </div>
      {branchingLines(place)}
      {/* eslint-disable-next-line react/prop-types */}
      {info && <span className={styles.userName}>{info.userName}</span>}
    </div>
  )
}
