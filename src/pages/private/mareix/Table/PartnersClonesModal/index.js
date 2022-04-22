import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './PartnersClonesModal.module.scss'
import { api } from '../../../../../api'
import * as actions from '../../../../../actions/app.actions'

import Button from '../../../../../components/OldButton'

// eslint-disable-next-line react/prop-types
export default function PartnersClonesModal({ onClose, showPartnersModal }) {
  const dispatch = useDispatch()
  const matrixCellInfo = useSelector((state) => state.matrixReducer.matrixCellInfo)
  const matrixInfo = useSelector((state) => state.matrixReducer.matrixInfo)
  const [installCloneStatus, setInstallCloneStatus] = useState(null)
  const [matrixClones, setMatrixClones] = useState(null)
  const [setupClones, setSetupClones] = useState(false)

  const installClones = () => {
    if (matrixCellInfo) {
      setSetupClones(true)
      api
        .setUnoClone(matrixCellInfo)
        .then(() => {
          setInstallCloneStatus('Ваша заявка отправлена')
          api.getUserInfo().then((response) => {
            dispatch(actions.userInfoSuccess(response))
          })
          setSetupClones(false)
        })
        .catch((error) => {
          if (error.message) {
            setInstallCloneStatus(error.message)
          }
          setSetupClones(false)
        })
    }
  }

  useEffect(() => {
    if (matrixInfo) {
      api
        .getMatrixUnoClonesCout(matrixInfo.id)
        .then((response) => {
          if (response.count > -1) {
            setMatrixClones(response.count)
          }
        })
        .catch(() => {})
    }
  }, [matrixInfo])

  return (
    <div className={styles.PartnersClonesModal}>
      <svg
        className={styles.closeButton}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        onClick={onClose}
      >
        <g clipPath="url(#clip0)" fill="#fff">
          <path d="M29.2 24.3L5.7.8c-1-1-2.7-1-3.7 0L.8 2.1c-1 1-1 2.7 0 3.7l23.5 23.5c1 1 2.7 1 3.7 0l1.2-1.2c1-1 1-2.7 0-3.8z" />
          <path d="M24.3.8L.8 24.3c-1 1-1 2.7 0 3.8L2 29.3c1 1 2.7 1 3.7 0L29.2 5.8c1-1 1-2.7 0-3.7L28 .8c-1-1-2.7-1-3.7 0z" />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill="#fff" d="M0 0h30v30H0z" />
          </clipPath>
        </defs>
      </svg>
      {installCloneStatus ? (
        <div className={styles.statusMessage}>{installCloneStatus}</div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <div className={styles.header}>
              <svg
                className={styles.partnersIcon}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 31"
              >
                <path
                  d="M21.4 6.3a3.2 3.2 0 00.6-6L21 0h-.6a3.1 3.1 0 00-2.8 3c-.1 2 1.7 3.6 3.7 3.3z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M27.4 15.4a23 23 0 00-.8-3.6 8 8 0 00-4.8-5.2h-.3l-.7.7-.7-.7a.2.2 0 00-.2 0c-.2 0-.4 0-.6.2l-1 .7A7.8 7.8 0 0015 12a25 25 0 00-.8 3.7l.1 1a1.2 1.2 0 001.3.6c.6 0 1-.5 1-1.1.2-1.2.4-2.3.8-3.4v-.3 3.7l.2.7v12.4a1.4 1.4 0 003-.2V19h.2v10.2a1.4 1.4 0 001.8 1.3c.7-.2 1-.8 1-1.5V17.6l.1-.3.2-.9V14v-1.8h.1l.4 1.2.6 3a1.2 1.2 0 001.2 1c.6 0 1.1-.4 1.2-1v-.9z"
                  fill="url(#paint1_linear)"
                />
                <path
                  d="M7 6.3a3.2 3.2 0 00.7-6L6.8 0h-.6a3.1 3.1 0 00-2.8 3C3.3 5 5 6.6 7 6.3z"
                  fill="url(#paint2_linear)"
                />
                <path
                  d="M13.1 15.4a23 23 0 00-.8-3.6 8 8 0 00-5-5.3l-.1.1-.7.7-.6-.7a.2.2 0 00-.3 0c-.1 0-.4 0-.5.2L4 7.5A7.7 7.7 0 00.8 12L0 15.7l.1 1a1.2 1.2 0 001.3.6c.6 0 1-.5 1-1.1.2-1.2.4-2.3.8-3.4v-.3h.1v3.7l.1.7v11.5l.1.9a1.4 1.4 0 002.9-.2V19h.2V29.2a1.4 1.4 0 001.8 1.3c.7-.2 1-.8 1-1.5V17.6l.1-.3.3-.9V14v-1.8l.4 1.2.6 3a1.2 1.2 0 001.2 1c.6 0 1.1-.4 1.2-1v-.9z"
                  fill="url(#paint3_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="20.7"
                    y1="-.8"
                    x2="21.5"
                    y2="23.3"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".1" stopColor="#fff" />
                    <stop offset="1" stopColor="#615AD0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="13952.1"
                    y1="7399.6"
                    x2="14481.8"
                    y2="15783.6"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".1" stopColor="#fff" />
                    <stop offset="1" stopColor="#615AD0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="5398.4"
                    y1="1989.1"
                    x2="5475.2"
                    y2="4199.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".1" stopColor="#fff" />
                    <stop offset="1" stopColor="#615AD0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="11203.1"
                    y1="7572.9"
                    x2="11732.9"
                    y2="15957.4"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".1" stopColor="#fff" />
                    <stop offset="1" stopColor="#615AD0" />
                  </linearGradient>
                </defs>
              </svg>
              <h3 className={styles.title}>
                <span>{matrixClones || 0}</span> клонов
              </h3>
            </div>
            <Button
              size="medium"
              disabled={setupClones}
              color="perrywinkle"
              onClick={installClones}
            >
              Поставить
            </Button>
          </div>
          <div className={styles.box}>
            <div className={styles.header}>
              <svg
                className={styles.partnersIcon}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 32"
              >
                <path
                  d="M21.1 31.4c-.4-.2-.8-.3-1-.7-.2-.3-.4-.5-.4-.8v-2.7h3.5v2.7c-.1.7-.6 1.1-1.2 1.4H21z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M2.4 31.4l-.7-.4c-.5-.4-.7-.9-.7-1.5v-5-5.7l-.2-.5C0 17.7-.2 17 0 16l1.4-6.8c.3-1.3 1-2 2.3-2.2 1.5-.4 3.3.6 3.7 2l.3 2 .3 1a2 2 0 001.4 1.6 13.7 13.7 0 001.3.3h.1c.3-.4.7-.5 1.1-.6l2.3-.1c1.1-.2 1.6-.6 1.9-1.7l.4-2.2a3.2 3.2 0 012.6-2.4 3 3 0 011.6.2A2.2 2.2 0 0122 8.6l2.2 8.7c0 .4.2.8.6 1 .3.1.5.5.7.8 0 .2.1.3.3.3H28v7.3H18v-7.3h2.3l.3-.2c.3-.7.4-.8 1.2-1.2l-.8-2.8-.9-2.8-.2-.5a.3.3 0 00-.2 0l-.1.2v.2c.7 1.7 1.2 3.5 1.6 5.3l-.1.3-.8.9-.3.2c-.9 0-1.6-.5-1.8-1.5l-.6-2.7-.1-.4c-1.2 1.2-2.6 1.3-4 1.5a.4.4 0 00-.4.2c-.3.5-.7.7-1.3.6-1.2-.1-2.5-.3-3.7-1-.5-.2-1-.6-1.5-1l-.3 1.4-.3 1.2c-.1.8-.6 1.3-1.3 1.7-.2 0-.2.2-.2.4v9.8c0 1.3-.3 1.7-1.5 2.2h-.6zm19.1-12h3c0-.5-.4-.6-.7-.4a1.3 1.3 0 01-1.5 0c-.3-.2-.6-.1-.8.3z"
                  fill="url(#paint1_linear)"
                />
                <path
                  d="M17.2 6.7a3.4 3.4 0 110-6.7 3.4 3.4 0 010 6.7z"
                  fill="url(#paint2_linear)"
                />
                <path d="M6 6.7A3.4 3.4 0 116.2 0a3.4 3.4 0 010 6.7z" fill="url(#paint3_linear)" />
                <path
                  d="M2.4 31.4l-.7-.4c-.5-.4-.7-.9-.7-1.5v-5-5.7l-.2-.5C0 17.7-.2 17 0 16l1.4-6.8c.3-1.3 1-2 2.3-2.2 1.5-.4 3.3.6 3.7 2l.3 2 .3 1a2 2 0 001.4 1.6 13.7 13.7 0 001.3.3h.1c.3-.4.7-.5 1.1-.6l2.3-.1c1.1-.2 1.6-.6 1.9-1.7l.4-2.2a3.2 3.2 0 012.6-2.4 3 3 0 011.6.2A2.2 2.2 0 0122 8.6l2.2 8.7c0 .4.2.8.6 1 .3.1.5.5.7.8 0 .2.1.3.3.3H28v7.3H18v-7.3h2.3l.3-.2c.3-.7.4-.8 1.2-1.2l-.8-2.8-.9-2.8-.2-.5a.3.3 0 00-.2 0l-.1.2v.2c.7 1.7 1.2 3.5 1.6 5.3l-.1.3-.8.9-.3.2c-.9 0-1.6-.5-1.8-1.5l-.6-2.7-.1-.4c-1.2 1.2-2.6 1.3-4 1.5a.4.4 0 00-.4.2c-.3.5-.7.7-1.3.6-1.2-.1-2.5-.3-3.7-1-.5-.2-1-.6-1.5-1l-.3 1.4-.3 1.2c-.1.8-.6 1.3-1.3 1.7-.2 0-.2.2-.2.4v9.8c0 1.3-.3 1.7-1.5 2.2h-.6zm19.1-12h3c0-.5-.4-.6-.7-.4a1.3 1.3 0 01-1.5 0c-.3-.2-.6-.1-.8.3z"
                  fill="url(#paint4_linear)"
                />
                <path
                  d="M17.2 6.7a3.4 3.4 0 110-6.7 3.4 3.4 0 010 6.7z"
                  fill="url(#paint5_linear)"
                />
                <path d="M6 6.7A3.4 3.4 0 116.2 0a3.4 3.4 0 010 6.7z" fill="url(#paint6_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="3645.6"
                    y1="1370.1"
                    x2="3781.1"
                    y2="3092.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#615AD0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear"
                    x1="26430"
                    y1="8074.6"
                    x2="27017.8"
                    y2="18251.9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#615AD0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear"
                    x1="6768.3"
                    y1="2194.7"
                    x2="6953.5"
                    y2="4993.9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#615AD0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear"
                    x1="5696.2"
                    y1="2265.4"
                    x2="5881.4"
                    y2="5065.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#615AD0" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear"
                    x1="26430"
                    y1="8074.6"
                    x2="27017.8"
                    y2="18251.9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#615AD0" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear"
                    x1="6768.3"
                    y1="2194.7"
                    x2="6953.5"
                    y2="4993.9"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#615AD0" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear"
                    x1="5696.2"
                    y1="2265.4"
                    x2="5881.4"
                    y2="5065.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#615AD0" />
                  </linearGradient>
                </defs>
              </svg>
              <h3 className={styles.title}>Партнеры</h3>
            </div>
            <Button size="medium" color="perrywinkle" onClick={showPartnersModal}>
              Выбрать
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
