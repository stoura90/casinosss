import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { api } from '../../../api'
//import logo from '../../../scss/media/ss-logo-text.5a65c676.svg'
//import pdfPreview from '../../../scss/media/pdf-preview-super-star.b7bfc954.jpg'
//import pptRU from '../../../static/documents/star/Новый текстовый документ.txt'
//import pptMN from '../../../static/documents/star/Новый текстовый документ.txt'
//import pptKZ from '../../../static/documents/star/Новый текстовый документ.txt'
//import pptEN from '../../../static/documents/star/Новый текстовый документ.txt'
//import pptES from '../../../static/documents/star/Новый текстовый документ.txt'
import { matrixActions } from '../../../store/matrix/actions'
import styles from './SuperStars.module.scss'

import TablesElement from '../Star/TablesElement'
import NavBar from '../../../components/layout/Navbar'
//import UserInfo from '../../../components/UserInfo'
//import Icon from '../../../components/Icon'

function SuperStars() {
  const dispatch = useDispatch()
  const [matrixTypes, setMatrixTypes] = useState([])

  useEffect(() => {
    api
      .ssMatrixTypes()
      .then((response) => {
        if (Array.isArray(response.items)) {
          dispatch(matrixActions.saveUserMatrices(response.items))
          setMatrixTypes(response.items)
        }
      })
      .catch(() => {})
  }, [dispatch])
  return (
    <div className={styles.SuperStars}>
      <Container>
        <Row>
          <Col className="d-none d-xl-block" xl={3}>
            <NavBar />
          </Col>
          <Col xl={9}>
            <div className="circle-stars__container">
              <div className="circle__container">
                <div className="circle__center">
                  <div className="circle__center-content">
                    <div className={styles.userInfo}></div>
                  </div>
                </div>
                {matrixTypes.map((matrix, i) => {
                  const deg = -90 + i * (360 / matrixTypes.length)
                  const deg2 = deg * -1
                  const transform = 'rotate(' + deg + 'deg) translate(15em) rotate(' + deg2 + 'deg)'
                  return (
                    <TablesElement
                      key={i.toString()}
                      urlPrefix="MATRIX3-table"
                      transform={transform}
                      matrix={matrix}
                    />
                  )
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SuperStars
