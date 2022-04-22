import React, { useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './PartnerModal.module.scss'
import { api } from '../../../../../api'

import avatar from '../../../../../scss/media/placeholder.7e85be59.svg'
import Button from '../../../../../components/OldButton'

//TODO: create component 'Modal'

// eslint-disable-next-line react/prop-types
export default function PartnerModal({ onClose }) {
  const [selectPartner, setSelectPartner] = useState(false)
  const [partnersList, setPartnersList] = useState([])
  const [activePartner, setActivePartner] = useState(null)
  const matrixInfo = useSelector((state) => state.matrixReducer.matrixInfo)
  const matrixCellInfo = useSelector((state) => state.matrixReducer.matrixCellInfo)

  const choosePartner = () => {
    if (activePartner && matrixCellInfo) {
      setSelectPartner(true)
      api
        .installMatrix({ ...matrixCellInfo, matrix_id: activePartner })
        .then(() => {
          onClose()
          setSelectPartner(false)
        })
        .catch(() => {
          onClose()
          setSelectPartner(false)
        })
    }
  }

  useEffect(() => {
    if (matrixInfo) {
      api
        .getMatrixListForInstall(matrixInfo.id)
        .then((response) => {
          if (Array.isArray(response.items)) {
            setPartnersList(response.items)
          }
        })
        .catch(() => {})
    }
  }, [matrixInfo])

  return (
    <div className={styles.PartnerModal}>
      <Container>
        <Row>
          <Col>
            <svg
              className={styles.closeButton}
              width="30"
              height="30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className={styles.title}>Выбрать партнёра</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Scrollbars
              className={styles.partnersWrapper}
              renderView={(props) => <div {...props} className={styles.partnersList} />}
              renderTrackVertical={(props) => <div {...props} className={styles.verticalTrack} />}
            >
              {partnersList.map(({ id, image, userName }) => (
                <div
                  key={id}
                  className={`${styles.partnerItem} ${activePartner === id ? styles.active : ''}`}
                  onClick={() => {
                    setActivePartner(id)
                  }}
                >
                  <div className={styles.avatar}>
                    <svg
                      className={styles.circle}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 216 216"
                    >
                      <g filter="url(#filter0_d)">
                        <circle cx="108.2" cy="108.2" r="56.2" fill="none" />
                      </g>
                      <circle
                        className={styles.innerCircle}
                        cx="108.4"
                        cy="109"
                        r="40.1"
                        stroke="#8083E6"
                        strokeWidth="15.7"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_radial"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="rotate(90 0 108.2) scale(56.1921)"
                        >
                          <stop stopColor="#fff" />
                          <stop offset="1" stopColor="#fff" stopOpacity="0" />
                        </radialGradient>
                        <filter
                          id="filter0_d"
                          x=".9"
                          y=".9"
                          width="214.6"
                          height="214.6"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix
                            in="SourceAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="25.5" />
                          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.13 0" />
                          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                        </filter>
                      </defs>
                    </svg>

                    <img
                      className={styles.image}
                      src={image ? `${process.env.REACT_APP_BASE_URL}${image}` : avatar}
                      alt=""
                    />
                  </div>
                  {userName && <p className={styles.userName}>{userName}</p>}
                </div>
              ))}
            </Scrollbars>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className={styles.chooseButton}
              color="perrywinkle"
              size="medium"
              onClick={choosePartner}
              disabled={selectPartner}
            >
              Выбрать
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
