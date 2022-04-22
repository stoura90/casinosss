import React, { useCallback, useEffect } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate'
import confirm from 'reactstrap-confirm'
import { Row, Col } from 'reactstrap'
import isEmpty from 'lodash-es/isEmpty'

import * as actions from '../../../actions/starsup.actions'
import avatarFallback from '../../../scss/media/placeholder.7e85be59.svg'
import arrowRight from '../../../scss/media/angle-right.2219c635.svg'
import arrowLeft from '../../../scss/media/angle-left.309b1344.svg'
import Spinner from '../../../components/Spinner'

// eslint-disable-next-line react/prop-types
const UserList = ({ structureObj }) => {
  const dispatch = useDispatch()
  const { limit } = useSelector((state) => state.starsupTable.users.query)
  const { total, page } = useSelector((state) => state.starsupTable.users.meta)
  const isLoading = useSelector((state) => state.starsupTable.loadings.users)
  const isVisible = useSelector((state) => state.starsupTable.modals.users)
  const install = useSelector((state) => state.starsupTable.users.install)
  const list = useSelector((state) => state.starsupTable.users.list)
  const level = useSelector((state) => state.starsupTable.level)

  const handleCloseModal = useCallback(() => {
    dispatch(actions.toggleStarsUpUsersForInstallModal(false, null))
  }, [dispatch])

  const handleInstallUser = useCallback(
    async ({ id, username }) => {
      let result = await confirm({
        title: `Установка пользователя ${username}`,
        message: `Вы действительно хотите установить ${username} в эту ячейку?`,
        confirmText: 'Подтвердить',
        confirmColor: 'primary',
        cancelText: 'Отмена',
        cancelColor: 'link text-muted',
      })
      if (id && result && install) {
        dispatch(actions.starsupInstallMatrix({ ...install, child: id }, structureObj))
      }
    },
    [dispatch, install, structureObj],
  )

  const handleOnChangePage = useCallback(
    (page) => {
      dispatch(actions.setStarsupUsersForInstallPage(page, level))
    },
    [dispatch, level],
  )

  useEffect(() => {
    if (isVisible && level) {
      dispatch(actions.starsupUsersForInstall(level))
    }
  }, [dispatch, isVisible, level])

  return (
    <Modal
      size="lg"
      keyboard={false}
      backdrop="static"
      isOpen={isVisible}
      toggle={handleCloseModal}
    >
      <ModalHeader toggle={handleCloseModal}>Выбор пользователя из {level} линии</ModalHeader>
      <ModalBody>
        <Spinner isLoading={isLoading}>
          <Row>
            {!isEmpty(list) ? (
              list.map((user) => (
                <Col key={user.id} xs={6} sm={3}>
                  <div
                    onClick={() => handleInstallUser(user)}
                    className="starsup__user-card starsup__user-card--install"
                  >
                    <div className="starsup__user-card-count">{user.count}</div>
                    <div
                      className="starsup__user-card-picture"
                      style={{
                        backgroundImage: `url(${
                          user.avatar
                            ? `${process.env.REACT_APP_BASE_URL}/getFile/avatar/${user.avatar}`
                            : avatarFallback
                        })`,
                      }}
                    />
                    <div className="starsup__user-card-name">{user.username}</div>
                  </div>
                </Col>
              ))
            ) : (
              <Col>
                <h4 className="text-center mb-4 mt-4">У этого пользователя нет людей в команде</h4>
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
              zoomAble={() => console.log('d')}
              previousLabel={<img src={arrowLeft} className="arrowLeft" alt="Arrow left" />}
              nextLabel={<img src={arrowRight} className="arrowRight" alt="Arrow right" />}
            />
          )}
        </Spinner>
      </ModalBody>
    </Modal>
  )
}

export default UserList
