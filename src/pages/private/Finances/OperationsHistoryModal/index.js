import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './OperationsHistoryModal.module.scss'
import { api } from '../../../../api'

import Table from '../../../../components/Table'

// eslint-disable-next-line react/prop-types
export default function OperationsHistoryModal({ onClose }) {
  const [operationsList, setOperationsList] = useState(null)
  const [currentOperationsPage, setCurrentOperationsPage] = useState(0)

  useEffect(() => {
    api
      .getTransactionsHistory({ limit: 10, offset: currentOperationsPage })
      .then((response) => {
        if (Array.isArray(response.items)) {
          setOperationsList(response)
        }
      })
      .catch(() => {})
  }, [currentOperationsPage])

  return (
    <div className={styles.OperationsHistoryModal}>
      <div className="star-container" />
      <div className={styles.OperationsHistoryModalWrapper}>
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
              <h1 className={styles.mainTitle}>История операций</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              {operationsList && (
                <Table
                  columns={{
                    user: 'Кому',
                    type: 'Тип операции',
                    amount: 'Сумма',
                    status: 'Статус',
                    date: 'Дата',
                    time: 'Время',
                  }}
                  data={operationsList.items}
                  count={operationsList.count}
                  onPageChange={({ selected }) => {
                    setCurrentOperationsPage(selected * 10)
                  }}
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
