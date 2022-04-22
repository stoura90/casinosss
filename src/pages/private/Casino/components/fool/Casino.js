import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import NavBar from '../../../../../components/layout/Navbar'
import Spin from '../Header'

function Fool() {
  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block">
          <NavBar />
        </Col>
        <Col>
          <Spin />
          <iframe src="http://admiral/lobby/game/resident/" width="100%" height="44%"></iframe>
        </Col>
      </Row>
    </Container>
  )
}
export default Fool
