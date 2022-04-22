import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './BuyMatrixModal.module.scss'

import Button from '../../../../../components/OldButton'

// eslint-disable-next-line react/prop-types
export default function BuyMatrixModal({ onSubmit, onClose, status }) {
  return (
    <div className={styles.BuyMatrixModal}>
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
          <Col>
            <h3>Подтверждение покупки матрицы</h3>
            <p>Вы действительно хотите купить матрицу?</p>
            <Button
              className={styles.buyButton}
              /* eslint-disable-next-line react/prop-types */
              disabled={status.type === 'pending'}
              onClick={onSubmit}
              color="perrywinkle"
              size="medium"
            >
              Купить
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
