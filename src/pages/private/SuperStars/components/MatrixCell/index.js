import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import dayjs from 'dayjs'

import avatarFallback from '../../../../../scss/media/camera_200.png'
import styles from './MatrixCell.module.scss'

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
        <path d="M1 22V12h90m91 12V12H91m0 0V0" stroke="#8083E6" strokeWidth="1.5" />
      </svg>
    )
  } else if (place === 1 || place === 2) {
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
  } else if (place === null) {
    return (
      <svg
        className={styles.branchingHorizontalLines}
        width="647"
        height="93"
        viewBox="0 0 647 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 86.0467V46.0654H215.536M645 93V46.0654H431.464M321.868 46.0654H319.692H306.636H215.536M321.868 46.0654V0M321.868 46.0654H431.464M215.536 46.0654V84.6404M215.536 46.0654H431.464M431.464 46.0654V85.1629"
          stroke="#8083E6"
          strokeWidth="3"
        />
      </svg>
    )
  }
}

// eslint-disable-next-line react/prop-types
export default function MatrixCell({ place, info, isActive, onDoubleClick }) {
  const history = useHistory()
  const [isMobile, setIsMobile] = useState(null)

  const matrixCellHandler = () => {
    if (isActive) {
      // eslint-disable-next-line react/prop-types
      if (info && info.id) {
        // eslint-disable-next-line react/prop-types
        history.push(`/MATRIX3-table/${info.id}`)
      } else {
        onDoubleClick && onDoubleClick()
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
      className={`${styles.MatrixCell} ${
        place === 0 || place === null ? styles.main : styles.small
      }`}
      onDoubleClick={matrixCellHandler}
    >
      {/* eslint-disable-next-line react/prop-types */}
      {info && info.count > 0 && (
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
      {info && (
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={({ placement, scheduleUpdate, arrowProps, outOfBoundaries, show, ...props }) => (
            <div
              {...props}
              style={{
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                backgroundColor: '#4b0fb2',
                border: '1px solid #8083E6',
                padding: '20px 5px 6px',
                lineHeight: '11px',
                marginTop: -16,
                fontSize: 11,
                color: '#fff',
                zIndex: 2,
                // eslint-disable-next-line react/prop-types
                ...props.style,
              }}
            >
              {/* eslint-disable-next-line react/prop-types */}
              {dayjs(info.date).format('DD.MM.YY HH:mm')}
            </div>
          )}
          rootClose
        >
          {/* eslint-disable-next-line react/prop-types */}
          <span className={styles.userName}>{info.userName}</span>
        </OverlayTrigger>
      )}
    </div>
  )
}
