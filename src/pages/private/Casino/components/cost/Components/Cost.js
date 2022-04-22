import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import NavBar from '../../../../../../components/layout/Navbar'
import Spin from '../../Header'

function Cost() {
  return (
    <Container className="root-page">
      <Row>
        <Col xl={2} className="d-none d-xl-block">
          <NavBar />
        </Col>
        <Col>
          <Spin />
          <iframe src="http://admiral/lobby/game/lucky_haunter/" width="100%" height="44%" />
        </Col>
      </Row>
    </Container>
  )
}
export default Cost
