import PropTypes from 'prop-types'
import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate'
import Modal from 'react-bootstrap/Modal'
import isEmpty from 'lodash-es/isEmpty'

import * as actions from '../../../../../actions/superstar.actions'
import arrowRight from '../../../../../scss/media/angle-right.2219c635.svg'
import arrowLeft from '../../../../../scss/media/angle-left.309b1344.svg'
import closeIcon from '../../../../../scss/media/close.ac2aaa1a.svg'
import QueueElement from './QueueElement'
import Spinner from '../../../../../components/Spinner'
import styles from './Queue.module.scss'

function QueueModal({ matrixType }) {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.superstar.queue.list)
  const { name, limit } = useSelector((state) => state.superstar.queue.query)
  const { total, page } = useSelector((state) => state.superstar.queue.meta)
  const isVisible = useSelector((state) => state.superstar.queue.isVisible)
  const isLoading = useSelector((state) => state.superstar.queue.isLoading)

  const handleCloseModal = useCallback(() => {
    dispatch(actions.toggleSuperStarQueueModal(false))
  }, [dispatch])

  const handleOnChangeSearch = useCallback(
    (event) => {
      dispatch(actions.setSuperStarQueueSearch(matrixType, event.target.value))
    },
    [dispatch, matrixType],
  )

  const handleOnChangePage = useCallback(
    (page) => {
      dispatch(actions.setSuperStarQueuePage(matrixType, page))
    },
    [dispatch, matrixType],
  )

  useEffect(() => {
    if (isVisible) {
      dispatch(actions.getSuperStarQueue(matrixType))
    }
  }, [dispatch, matrixType, isVisible])

  return (
    <Modal size="lg" show={isVisible} backdrop="static" keyboard={false} onHide={handleCloseModal}>
      <Modal.Header>
        <Modal.Title as="h3">Моя очередь</Modal.Title>
        <button type="button" onClick={handleCloseModal} className="close">
          <img src={closeIcon} alt="Close" />
        </button>
      </Modal.Header>

      <Modal.Body>
        <div className={styles.search}>
          <input
            type="text"
            autoComplete="off"
            defaultValue={name}
            onChange={handleOnChangeSearch}
            placeholder="Поиск партнера по логину"
          />
        </div>
        <Spinner isLoading={isLoading}>
          {!isEmpty(list) ? (
            <ul className={styles.list}>
              {list.map((user) => (
                <li key={user.matrixId}>
                  <QueueElement user={user} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center h5">Не найдено ни одного элемента</div>
          )}
        </Spinner>
        {!isEmpty(list) && !isLoading && (
          <ReactPaginate
            forcePage={page}
            marginPagesDisplayed={1}
            activeClassName={styles.active}
            pageCount={Math.ceil(total / limit)}
            /* eslint-disable-next-line react/prop-types */
            onPageChange={(props) => handleOnChangePage(props.selected)}
            containerClassName={styles.pagination}
            previousLabel={<img src={arrowLeft} className={styles.arrowLeft} alt="Arrow left" />}
            nextLabel={<img src={arrowRight} className={styles.arrowRight} alt="Arrow right" />}
          />
        )}
      </Modal.Body>
    </Modal>
  )
}

QueueModal.propTypes = {
  matrixType: PropTypes.number.isRequired,
}

export default QueueModal
