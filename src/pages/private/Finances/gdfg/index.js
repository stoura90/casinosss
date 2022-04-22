import React, { useState, useCallback } from 'react'
import { Row, Col, Container, Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { formatter } from '../../../utils'

import * as actions from '../../../actions/finance.actions'
import OperationsHistoryModal from './OperationsHistoryModal'
import MoneyTransferModal from './MoneyTransferModal'
import NavBar from '../../../components/layout/Navbar'
//import UserInfo from '../../../components/UserInfo'

import WithdrawalOfMoney from './WithdrawalOfMoney'
import ReplenishmentOfMoney from './ReplenishmentOfMoney'

function Finances() {
  const dispatch = useDispatch()
  const [isOperationsHistoryModalVisible, setIsOperationsHistoryModalVisible] = useState(false)
  const userInfo = useSelector((state) => state.app.user)

  const handleVisibleTransferMoneyModal = useCallback(() => {
    dispatch(actions.toggleTransferMoneyModal(true))
  }, [dispatch])

  const openOperationsHistoryModal = () => {
    document.body.style.overflow = 'hidden'
    setIsOperationsHistoryModalVisible(true)
  }

  const closeOperationsHistoryModal = () => {
    document.body.style.overflow = 'initial'
    setIsOperationsHistoryModalVisible(false)
  }

  return (
    <>
      <Container className="root-page">
        <Row>
          <Col xl={3} className="d-none d-xl-block">
            <NavBar />
          </Col>
          <Col>
            <h1 className="root-page-title">Финансы</h1>
            {userInfo && (
              <>
                <Row>
                  <Col lg={6}>
                    <div className="card">
                      <div className="card__header">
                        <div className="card__header-left">
                          <h3 className="card__title">Основной баланс</h3>
                        </div>
                      </div>
                      <div className="card__body">
                        <h3>
                          {formatter
                            .format((userInfo.balance > -1 && userInfo.balance) || 0)
                            .replace('₽', 'RUB')}
                        </h3>
                        <br />
                        <Button onClick={handleVisibleTransferMoneyModal} color="primary" block>
                          Перевод партнеру
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="card">
                      <div className="card__header">
                        <div className="card__header-left">
                          <h3 className="card__title">Внутренний Счет</h3>
                        </div>
                      </div>
                      <div className="card__body">
                        <h3>
                          {formatter
                            .format(
                              (userInfo.transferBalance > -1 && userInfo.transferBalance) || 0,
                            )
                            .replace('₽', 'RUB')}
                        </h3>

                        <br />
                        <Button onClick={openOperationsHistoryModal} color="primary" block>
                          История операций
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
                <h2>Приобрести</h2>
                <ReplenishmentOfMoney />
                <h2>Вывод</h2>
                <WithdrawalOfMoney />
              </>
            )}
          </Col>
        </Row>
      </Container>
      <MoneyTransferModal />
      {isOperationsHistoryModalVisible && (
        <OperationsHistoryModal onClose={closeOperationsHistoryModal} />
      )}
    </>
  )
}

export default Finances
