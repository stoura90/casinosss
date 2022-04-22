import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import NavBar from '../../../../../components/layout/Navbar'
import Spin from '../Header'

function ETRace() {
  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block">
          <NavBar />
        </Col>
        <Col xl={9}>
          <Spin />
          <iframe
            src="https://demo.evoplay.games/demo/instant/html5/evoplay/etraces"
            width="100%"
            height="44%"
          />
        </Col>
      </Row>
    </Container>
  )
}
export default ETRace
