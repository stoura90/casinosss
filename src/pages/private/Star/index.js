import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'reactstrap'
import { useDispatch } from 'react-redux'
import isEmpty from 'lodash'

import { matrixActions } from '../../../store/matrix/actions'
//import logo from '../../../scss/media/logo-text.a2a64ad6.svg'
//import pdfPreview from '../../../scss/media/pdf-preview-stars.830beffd.jpg'
//import pptRU from '../../../static/documents/star/Новый текстовый документ.txt'
//import pptMN from '../../../static/documents/star/Новый текстовый документ.txt'
//import pptKZ from '../../../static/documents/star/Новый текстовый документ.txt'
//import pptES from '../../../static/documents/star/Новый текстовый документ.txt'
//import pptEN from '../../../static/documents/star/Новый текстовый документ.txt'
import styles from './Tables.module.scss'
import { api } from '../../../api'

import TablesElement from './TablesElement'
import NavBar from '../../../components/layout/Navbar'
//import Icon from '../../../components/Icon'

function Tables() {
  const dispatch = useDispatch()
  const [matrixTypes, setMatrixTypes] = useState([])

  useEffect(() => {
    api
      .getMatrixCloneStatTypes()
      .then((cloneStats) => {
        api
          .getMatrixTypes()
          .then((response) => {
            if (!isEmpty(cloneStats.items) && !isEmpty(response.items)) {
              const newArrayItems = response.items.map((type, index) => ({
                ...type,
                clones: cloneStats.items[index].count,
              }))

              dispatch(matrixActions.saveUserMatrices(newArrayItems))
              setMatrixTypes(newArrayItems)
            }
          })
          .catch(() => {})
      })
      .catch(() => {})
  }, [dispatch])

  return (
    <div className={styles.Tables}>
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
                      urlPrefix="personal-table"
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

export default Tables
