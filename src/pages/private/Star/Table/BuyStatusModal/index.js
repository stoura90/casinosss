import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './BuyStatusModal.module.scss'

// eslint-disable-next-line react/prop-types
export default function BuyStatusModal({ status, onClose }) {
  return (
    // eslint-disable-next-line react/prop-types
    <div
      className={`${styles.BuyStatusModal} ${
        // eslint-disable-next-line react/prop-types
        status.type === 'error' && styles.isError
      }`}
    >
      <Container>
        <Row>
          <Col className="position-static">
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
          <Col xs={12} className="d-xl-flex justify-content-between">
            {/* eslint-disable-next-line react/prop-types */}
            {status.message}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
