import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import NavBar from '../../../../../../components/layout/Navbar'
import Spin from '../../Header'

const Bar = () => {
  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block">
          <NavBar />
        </Col>
        <Col xl={9}>
          <Spin />
          <iframe src="http://admiral/lobby/game/crmonkey/" width="100%" height="44%" />
        </Col>
      </Row>
    </Container>
  )
}

export default Bar
