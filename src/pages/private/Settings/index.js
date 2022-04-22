import React from 'react'
import { Row, Col, Container } from 'reactstrap'

import NavBar from '../../../components/layout/Navbar'
import UserInfo from '../../../components/UserInfo'

import FinancePassword from './FinancePassword'
import ChangePassword from './ChangePassword'
import ChangeUserInfo from './ChangeUserInfo'
import SocialNetwork from './SocialNetwork'
import ChangeDescription from './ChangeDescription'
// import StarTrek from './StarTrek';

function Settings() {
  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block">
          <UserInfo />
          <NavBar />
        </Col>
        <Col>
          <h1 className="root-page-title">Настройки</h1>
          <Row>
            <Col lg={6}>
              <ChangePassword />
              <FinancePassword />
            </Col>
            <Col lg={6}>
              <ChangeUserInfo />
              <SocialNetwork />
              {/* <StarTrek /> */}
            </Col>
          </Row>
          <ChangeDescription />
        </Col>
      </Row>
    </Container>
  )
}

export default Settings
