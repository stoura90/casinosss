import React from 'react'
import { Row, Col, Container } from 'reactstrap'

import Chart from './components/Chart/Chart'
import '../../stoc.css'
import BuyFormComponent from './components/Form/BuyForm'
import SellFormComponent from './components/Form/SellForm'
import Market from './components/Market/Market'
import HistoriBuySel from './components/Market/HistoriBuySel'
import NavBar from '../../../../../components/layout/Navbar'

const Wawes = () => {
  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block col-xl-38">
          <NavBar />
        </Col>
        <Col xl={9}>
          <Chart />
          <BuyFormComponent />
          <SellFormComponent />
          <Market />
          <HistoriBuySel />
        </Col>
      </Row>
    </Container>
  )
}

export default Wawes
