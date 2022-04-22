import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import NavBar from '../../../../../components/layout/Navbar'
import BuyFormComponent from './components/Form/BuyForm'
import SellFormComponent from './components/Form/SellForm'
import HistoriBuySel from './components/Market/HistoriBuySel'
import Chart from './components/Chart/Chart'
import Markets from './components/Market/Market'

const Dashbtc = () => {
  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block col-xl-38">
          <NavBar />
        </Col>
        <Col xl={9}>
          <Chart width="100%" />
          <BuyFormComponent width="100%" />
          <SellFormComponent width="100%" />
          <Markets />
          <HistoriBuySel width="100%" />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashbtc
