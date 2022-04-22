import React from 'react'
import NavBar from '../../../../../components/layout/Navbar'
import { Col, Container, Row } from 'reactstrap'
import Spin from '../Header'
function DICE() {
  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block">
          <NavBar />
        </Col>
        <Col xl={9}>
          <Spin />
          <iframe src="http://admiral/lobby/game/fairy_land/" width="100%" height="44%" />
        </Col>
      </Row>
    </Container>
  )
}

export default DICE
