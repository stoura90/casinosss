import React, { useEffect } from 'react'
import { Row, Col, Container } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import Timer, { zeroPad } from 'react-countdown'
import confirm from 'reactstrap-confirm'
import { Link } from 'react-router-dom'

import r from '../../../constants/routes.constants'
import * as actions from '../../../actions/startrek.actions'
import previewText from '../../../scss/media/startrek-logo.f688a0a8.svg'
import NavBar from '../../../components/layout/Navbar'
import UserInfo from '../../../components/UserInfo'
import Button from '../../../components/Button'

import Statistics from './Statistics'
import Documents from './Documents'
import Summary from './Summary'
import { Spinner } from 'react-bootstrap'

function arTrek() {
  const dispatch = useDispatch()
  const timer = useSelector((state) => state.startrek.timer)
  const statistics = useSelector((state) => state.startrek.statistics)
  const isLoading = useSelector((state) => state.startrek.loadings.statistics)
  const isBuyLoading = useSelector((state) => state.startrek.loadings.buy)

  useEffect(() => {
    dispatch(actions.startrekStatistics())
    dispatch(actions.startrekResetTimer())
  }, [dispatch])

  const handleButtonClick = async () => {
    let result = await confirm({
      title: 'Приобретение планеты',
      message: 'Вы хотите приобрести планету?',
      confirmText: 'Подтвердить',
      confirmColor: 'danger',
      cancelText: 'Отмена',
      cancelColor: 'link text-muted',
    })

    if (result) {
      dispatch(actions.startrekBuy())
    }
  }

  const renderer = ({ hours, minutes, seconds }) => (
    <span>
      {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  )

  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block">
          <UserInfo />
          <NavBar />
        </Col>
        <Col xl={9}>
          <div className="startrek__title">
            <img src={previewText} alt="До запуска Star Trek" />
          </div>
          <Spinner isLoading={isLoading}>
            <Statistics />
            <div className="text-center">
              <Button className="m-2" tag={Link} to={r.starTrekPlanets} color="primary">
                Мои планеты
              </Button>
              {/* TODO: delete all functions */}
              <Button
                color="primary"
                className="m-2"
                loading={isBuyLoading}
                disabled={Boolean(timer) || isBuyLoading}
                onClick={handleButtonClick}
              >
                {timer ? (
                  <Timer
                    date={timer}
                    renderer={renderer}
                    onComplete={() => {
                      dispatch(actions.startrekResetTimer())
                    }}
                  />
                ) : (
                  `${
                    statistics?.myPlanet > 0
                      ? 'Приобрести планету'
                      : 'Активировать StarTrack'.toLocaleUpperCase()
                  }`
                )}
              </Button>
            </div>
            <div className="text-center">
              <Button className="m-2" to={r.starTrekStatistic} color="primary" tag={Link}>
                Статистика
              </Button>
            </div>

            <Summary />
            <Documents />
          </Spinner>
        </Col>
      </Row>
    </Container>
  )
}

export default arTrek
