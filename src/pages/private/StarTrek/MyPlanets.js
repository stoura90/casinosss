import React, { useEffect, useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Timer, { zeroPad } from 'react-countdown'
import { Row, Col, Container } from 'reactstrap'
import ReactPaginate from 'react-paginate'
import confirm from 'reactstrap-confirm'
import isEmpty from 'lodash-es/isEmpty'
import { declOfNum } from '../../../utils'
import dayjs from 'dayjs'

import * as actions from '../../../actions/startrek.actions'
import arrowRight from '../../../scss/media/angle-right.2219c635.svg'
import arrowLeft from '../../../scss/media/angle-left.309b1344.svg'
import MyPlanetsElement from './MyPlanetsElement'
import NavBar from '../../../components/layout/Navbar'
import UserInfo from '../../../components/UserInfo'
import Button from '../../../components/Button'
import Icon from '../../../components/Icon'
import { Spinner } from 'react-bootstrap'

function MyPlanets() {
  const history = useHistory()
  const dispatch = useDispatch()
  const list = useSelector((state) => state.startrek.list)
  const selected = useSelector((state) => state.startrek.selected)
  const isLoading = useSelector((state) => state.startrek.loadings.list)
  const isUpdateLoading = useSelector((state) => state.startrek.loadings.update)
  // const user = useSelector(state => state.app.user);
  const { total, page } = useSelector((state) => state.startrek.meta)
  const { limit } = useSelector((state) => state.startrek.query)
  const start = dayjs().tz('Europe/Minsk').startOf('date')
  const end = start.add(10, 'hour')

  const isDisable = useMemo(() => {
    return dayjs().isBetween(start, end)
  }, [start, end])

  useEffect(() => {
    dispatch(actions.startrekPlanets())
  }, [dispatch])

  const handleOnChangePage = useCallback(
    (page) => {
      dispatch(actions.setStartrekPlanetsPage(page))
    },
    [dispatch],
  )

  const handleOnPlanetsUpdate = async () => {
    const planetLength = selected.length
    let result = await confirm({
      title: 'Продление мест',
      message: `Вы хотите продлить ${planetLength} ${declOfNum(planetLength, [
        'место',
        'места',
        'мест',
      ])}, на сумму ${planetLength * 360} RUB`,
      confirmText: 'Подтвердить',
      confirmColor: 'danger',
      cancelText: 'Отмена',
      cancelColor: 'link text-muted',
    })

    if (result) {
      dispatch(actions.startrekPlanetsUpdate())
    }
  }

  const handleSelectAllOnPage = () => {
    dispatch(actions.toggleAllPlanetOnPage())
  }

  const rendererTimer = ({ hours, minutes, seconds }) => (
    <span>
      {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  )

  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block">
          <NavBar />
        </Col>
        <Col xl={9}>
          <div className="root-page-header">
            <div className="root-page-header__left">
              <Button
                className="root-page-header__back"
                onClick={() => history.goBack()}
                color="link"
                size="lg"
              >
                <Icon iconName="back" />
              </Button>
            </div>
            <h1 className="root-page-title">Мои планеты</h1>
            <div className="root-page-header__right">&nbsp;</div>
          </div>
          {/* <div className="text-center">
            <h3>
              Авто-продление планет{' '}
              <strong>{user?.autoRefill ? 'включено' : 'выключено'}</strong>
            </h3>
            <Link to={r.settings}>изменить</Link>
          </div> */}
          <Spinner isLoading={isLoading}>
            <Row>
              {!isEmpty(list) ? (
                list.map((planet) => (
                  <Col key={planet.id} lg={6}>
                    <MyPlanetsElement planet={planet} />
                  </Col>
                ))
              ) : (
                <Col>
                  <h4 className="text-center mb-4 mt-4">У вас нет планет</h4>
                </Col>
              )}
            </Row>
            {!isEmpty(list) && !isLoading && (
              <ReactPaginate
                forcePage={page}
                marginPagesDisplayed={1}
                activeClassName="active"
                pageCount={Math.ceil(total / limit)}
                /* eslint-disable-next-line react/prop-types */
                onPageChange={(props) => handleOnChangePage(props.selected)}
                containerClassName="pagination"
                previousLabel={<img src={arrowLeft} className="arrowLeft" alt="Arrow left" />}
                nextLabel={<img src={arrowRight} className="arrowRight" alt="Arrow right" />}
              />
            )}
          </Spinner>
          <div className="text-center mt-5 mb-5">
            {!isEmpty(selected) &&
              (isDisable && end ? (
                <div className="mb-5">
                  <p>
                    В данный момент осуществляется запуск комет, <br /> продление баланса комет
                    будет доступно с 10:00 по мск
                  </p>
                  <div>
                    Осталось: <Timer date={end.format()} renderer={rendererTimer} />
                  </div>
                </div>
              ) : (
                <Button
                  color="primary"
                  onClick={handleOnPlanetsUpdate}
                  disabled={isUpdateLoading}
                  loading={isUpdateLoading}
                >
                  Продлить выбранные
                </Button>
              ))}
            {!isLoading && (
              <div className="mt-3">
                <Button color="primary" onClick={handleSelectAllOnPage}>
                  {selected.length !== list.length ? 'Выбрать' : 'Убрать'} все
                </Button>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default MyPlanets
