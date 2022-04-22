import React, { useEffect, useCallback } from 'react'
import { useParams, Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import ReactPaginate from 'react-paginate'
import isEmpty from 'lodash-es/isEmpty'

import styles from './TableQueue.module.scss'
import routes from '../../../constants/routes.constants'
import * as actions from '../../../actions/stars.actions'
import avatarFallback from '../../../scss/media/camera_200.png'
import arrowRight from '../../../scss/media/angle-right.2219c635.svg'
import arrowLeft from '../../../scss/media/angle-left.309b1344.svg'
import closeIcon from '../../../scss/media/close.ac2aaa1a.svg'
import StarRating from '../../../components/StarRating'
import { Spinner } from 'react-bootstrap'

// eslint-disable-next-line react/prop-types
const TableQuemini = ({ location: { state = {} } }) => {
  const { type } = useParams()
  const dispatch = useDispatch()

  const list = useSelector((state) => state.stars.queue.list)
  const isLoading = useSelector((state) => state.stars.loadings.queue)
  const matrixInfo = useSelector((state) => state.matrixReducer.matrixInfo)
  const { limit, line, name, offset } = useSelector((state) => state.stars.queue.query)
  const { total, page } = useSelector((state) => state.stars.queue.meta)

  const navRoute = useCallback(
    (route = '') => {
      let newRoute = '/'
      if (matrixInfo && matrixInfo.id) {
        newRoute = `/personal-pegasmini/${matrixInfo.id}${route}`
      } else if (type) {
        newRoute = `/pegasmini/${type}${route}`
      }
      return newRoute
    },
    [matrixInfo, type],
  )

  useEffect(() => {
    if (matrixInfo && matrixInfo.id) {
      dispatch(actions.matrixMiniQueue(matrixInfo.id, { ...state }))
    } else if (type) {
      dispatch(actions.matrixMiniQueue(type, { ...state }))
    }
  }, [dispatch, type, matrixInfo, state])

  const handleChangeLine = useCallback(
    (line) => {
      if (matrixInfo && matrixInfo.id) {
        dispatch(actions.setMatrixMiniQueueLine(line, matrixInfo.id))
      } else if (type) {
        dispatch(actions.setMatrixMiniQueueLine(line, type))
      }
    },
    [dispatch, type, matrixInfo],
  )

  const handleOnChangePage = useCallback(
    (page) => {
      if (matrixInfo && matrixInfo.id) {
        dispatch(actions.setMatrixMiniQueuePage(page, matrixInfo.id))
      } else if (type) {
        dispatch(actions.setMatrixMiniQueuePage(page, type))
      }
    },
    [dispatch, type, matrixInfo],
  )

  const handleOnChangeSearch = useCallback(
    (event) => {
      if (matrixInfo && matrixInfo.id) {
        dispatch(actions.setMatrixMiniQueueSearch(event.target.value, matrixInfo.id))
      } else if (type) {
        dispatch(actions.setMatrixMiniQueueSearch(event.target.value, type))
      }
    },
    [dispatch, type, matrixInfo],
  )

  return (
    <div className={styles.Table}>
      <Container>
        <div className={styles.header}>
          {matrixInfo && <h1 className={styles.title}>STARS - {matrixInfo.name}</h1>}
          <Link to={routes.matrixs} className={styles.close}>
            <img src={closeIcon} alt="Close" />
          </Link>
        </div>
        <div className={styles.subHeader}>
          {matrixInfo && matrixInfo.isActive && (
            <nav className={styles.nav}>
              <NavLink to={navRoute()} exact activeClassName={styles.active}>
                Структура
              </NavLink>
              <NavLink to={navRoute('/queue')} exact activeClassName={styles.active}>
                Очередь
              </NavLink>
            </nav>
          )}
          <div className={styles.actions}>
            <div>
              <button
                className={line === 0 ? styles.active : undefined}
                onClick={() => handleChangeLine(0)}
              >
                Мои клоны
              </button>
              <button
                className={line === 1 ? styles.active : undefined}
                onClick={() => handleChangeLine(1)}
              >
                Первая линия
              </button>
              <button
                className={line === 2 ? styles.active : undefined}
                onClick={() => handleChangeLine(2)}
              >
                Вторая линия
              </button>
            </div>
            {!!line && (
              <div className={styles.search}>
                <input
                  type="text"
                  autoComplete="off"
                  value={name}
                  onChange={handleOnChangeSearch}
                  placeholder="Поиск по логину"
                />
              </div>
            )}
          </div>
        </div>
        <div className={styles.container}>
          <Spinner isLoading={isLoading}>
            <Row>
              {!isEmpty(list) ? (
                list.map((user) => (
                  <Col key={user.id} lg={4}>
                    <Link
                      to={{
                        pathname: `/pegasmini/${user.id}`,
                        state: {
                          query: { line, offset, name },
                          meta: { page },
                        },
                      }}
                      className="starsup__user-card"
                    >
                      <div
                        className="starsup__user-card-picture starsup__user-card-picture--absolute"
                        style={{
                          backgroundImage: `url(${
                            user.photo
                              ? `${process.env.REACT_APP_BASE_URL}/getFile/avatar/${user.photo}`
                              : avatarFallback
                          })`,
                        }}
                      />
                      <div className="card">
                        <div className="card__header">
                          <div className="card__header-left">
                            <h3 className="card__title text-center">{user.name}</h3>
                          </div>
                        </div>
                        <div className="card__body">
                          <div className="list-info list-info--horizontal">
                            <div className="list-info__group">
                              <div className="list-info__label">Закрытых мест в столе</div>
                              <div className="list-info__value">
                                <StarRating
                                  max={10}
                                  size={18}
                                  className="star-rating--two-triangle"
                                  matrix={Object.values(user.freePlace)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))
              ) : (
                <Col>
                  <h4 className="text-center mb-4 mt-4">
                    У вас нет {line ? `пользователей в ${line} линии` : 'клонов в очереди'}
                  </h4>
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
        </div>
      </Container>
    </div>
  )
}

export default TableQuemini
