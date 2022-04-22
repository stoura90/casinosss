import React, { useState, useCallback } from 'react'
import { Row, Col, Container, Button } from 'reactstrap'
import NavBar from '../../../components/layout/Navbar'

function Finances() {
  return (
    <>
      <Container className="root-page">
        <Row>
          <Col xl={3} className="d-none d-xl-block">
            <NavBar />
          </Col>
          <Col>
            <h1 className="root-page-title">Финансы</h1>
            <>
              <Row>
                <Col lg={6}></Col>
                <Col lg={6}></Col>
              </Row>
            </>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Finances
