import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Container, Button } from 'reactstrap'

//import posterVideo from '../../../scss/media/leader-poster-video.56a4c9bf.jpg'
//import avatar from '../../../scss/media/placeholder.7e85be59.svg'
//import video from '../../../scss/media/leader-poster-video.56a4c9bf.jpg'

import NavBar from '../../../components/layout/Navbar'
import Avatar from '../../../components/Avatar'
import Icon from '../../../components/Icon'
import { toast } from 'react-toastify'
import { formatter } from '../../../utils'
import CountdownTimer from '../StarTrek/CountdownTimer/CountdownTimer'
//import UserInfo from '../../../components/UserInfo'

function Dashboard() {
  const userInfo = useSelector((state) => state.app.user)

  const copyRefLinkToClipboard = async () => {
    if (userInfo && userInfo.refLink) {
      navigator.clipboard.writeText(userInfo.refLink).then(() => {
        toast.info('Ссылка успешно скопирована')
      })
    }
  }

  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block">
          <NavBar />
        </Col>
        <Col>
          <h1 className="root-page-title">Личный кабинет</h1>
          {userInfo && (
            <>
              <div className="leader">
                <div className="leader__figure">
                  <div className="leader__image">
                    <Avatar
                      className="user-info__avatar"
                      url={userInfo.avatar && `${process.env.REACT_APP_BASE_URL}${userInfo.avatar}`}
                    />
                  </div>
                </div>
                <div className="leader__info">
                  <div className="card">
                    <div className="card__header">
                      <div className="card__header-left">
                        <h3 className="card__title">
                          {userInfo.firstName || '-'} {userInfo.lastName || '-'}
                        </h3>
                      </div>
                    </div>
                    <div className="card__body">
                      <div className="list-info list-info--horizontal">
                        <div className="list-info__group">
                          <div className="list-info__label">Мой баланс:</div>
                          <div className="list-info__value">
                            {formatter.format(userInfo.balance || 0).replace('₽', 'RUB') ? (
                              <div>
                                {formatter.format(userInfo.balance || 0).replace('₽', 'RUB')}
                              </div>
                            ) : (
                              '-'
                            )}
                          </div>
                        </div>
                        <div className="list-info__group">
                          <div className="list-info__label">Дата регистрации:</div>
                          <div className="list-info__value">
                            {userInfo.registrationDate ? (
                              <div>{userInfo.registrationDate}</div>
                            ) : (
                              '-'
                            )}
                          </div>
                        </div>
                        <div className="list-info__group">
                          <div className="list-info__label">Дата активации:</div>
                          <div className="list-info__value">
                            {userInfo.activationDate ? <div>{userInfo.activationDate}</div> : '-'}
                          </div>
                        </div>
                        <div className="list-info__group">
                          <div className="list-info__label">Пригласитель:</div>
                          <div className="list-info__value">
                            {userInfo.inviter ? <div>{userInfo.inviter}</div> : '-'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card__header">
                  <div className="card__header-left">
                    <h3 className="card__title">Реферальная ссылка</h3>
                  </div>
                </div>
                <div className="card__body">
                  <div className="referral-link">
                    <div className="referral-link__url">{userInfo.refLink}</div>
                    <Button
                      color="link"
                      className="referral-link__btn"
                      onClick={copyRefLinkToClipboard}
                    >
                      <Icon iconName="copy" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="startrek__title1">
                <span>До запуска осталось</span>
              </div>
              <div className="startrek__title">
                <CountdownTimer countdownTimestampMs={1659983662000} />
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
