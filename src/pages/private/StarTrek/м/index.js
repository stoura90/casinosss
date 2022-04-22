import React, { useEffect } from 'react'
import { Row, Col, Container } from 'reactstrap'
import { useDispatch } from 'react-redux'
//import Timer, { zeroPad } from 'react-countdown'
//import confirm from 'reactstrap-confirm'
//import { Link } from 'react-router-dom'

//import r from '../../../constants/routes.constants'
import * as actions from '../../../actions/startrek.actions'
//import previewText from '../../../scss/media/startrek-logo.f688a0a8.svg'
import NavBar from '../../../components/layout/Navbar'
//import UserInfo from '../../../components/UserInfo'
//import Button from '../../../components/Button'

//import Statistics from './Statistics'
//import Documents from './Documents'
//import Summary from './Summary'
//import { Spinner } from 'react-bootstrap'
import CountdownTimer from './CountdownTimer/CountdownTimer'
//import { cibGravatar } from '@coreui/icons'

function StarTrek() {
  const dispatch = useDispatch()
  // const CountdownTimer = useSelector((state) => state.startrek.timer)
  //const statistics = useSelector((state) => state.startrek.statistics)
  //const isLoading = useSelector((state) => state.startrek.loadings.statistics)
  //const isBuyLoading = useSelector((state) => state.startrek.loadings.buy)

  useEffect(() => {
    dispatch(actions.startrekStatistics())
    dispatch(actions.startrekResetTimer())
  }, [dispatch])

  // const handleButtonClick = async () => {
  //   let result = await confirm({
  //     title: 'Приобретение матрици',
  //     message: 'Вы хотите приобрести матрицу?',
  //     confirmText: 'Подтвердить',
  //    confirmColor: 'danger',
  //    cancelText: 'Отмена',
  //    cancelColor: 'link text-muted',
  //  })

  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block">
          <NavBar />
        </Col>
        <Col xl={9}>
          <div className="startrek__title1">
            <span>До запуска осталось</span>
          </div>
          <div className="startrek__title">
            <CountdownTimer countdownTimestampMs={1659983662000} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default StarTrek
