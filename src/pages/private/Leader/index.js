import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Container, Button } from 'reactstrap'

import posterVideo from '../../../scss/media/leader-poster-video.56a4c9bf.jpg'
import avatar from '../../../scss/media/camera_200.png'
import video from '../../../scss/media/leader-poster-video.56a4c9bf.jpg'

import NavBar from '../../../components/layout/Navbar'
//import UserInfo from '../../../components/UserInfo'

function Leader() {
  const userInfo = useSelector((state) => state.app.user)

  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block">
          <NavBar />
        </Col>
        <Col>
          <h1 className="root-page-title">Наставник</h1>
          {userInfo && (
            <>
              <div className="leader">
                <div className="leader__figure">
                  <div className="leader__image">
                    <img
                      src={
                        userInfo.inviterAvatar
                          ? `${process.env.REACT_APP_BASE_URL}${userInfo.inviterAvatar}`
                          : avatar
                      }
                      alt={userInfo.inviterFio}
                    />
                  </div>
                </div>
                <div className="leader__info">
                  <div className="card">
                    <div className="card__header">
                      <div className="card__header-left">
                        <h3 className="card__title">{userInfo.inviterFio}</h3>
                      </div>
                    </div>
                    <div className="card__body">
                      <div className="list-info list-info--horizontal">
                        <div className="list-info__group">
                          <div className="list-info__label">Telegram:</div>
                          <div className="list-info__value">
                            {userInfo.tg ? (
                              <a
                                href={`https://t.me/${userInfo.tg}`}
                                rel="noreferrer"
                                target="_blank"
                              >
                                {userInfo.tg}
                              </a>
                            ) : (
                              '-'
                            )}
                          </div>
                        </div>
                        <div className="list-info__group">
                          <div className="list-info__label">ВКонтакте:</div>
                          <div className="list-info__value">
                            {userInfo.vk ? (
                              <a
                                href={`https://vk.com/${userInfo.vk}`}
                                rel="noreferrer"
                                target="_blank"
                              >
                                {userInfo.vk}
                              </a>
                            ) : (
                              '-'
                            )}
                          </div>
                        </div>
                        <div className="list-info__group">
                          <div className="list-info__label">Instagram:</div>
                          <div className="list-info__value">
                            {userInfo.instagram ? (
                              <a
                                href={`https://www.instagram.com/${userInfo.instagram}`}
                                rel="noreferrer"
                                target="_blank"
                              >
                                {userInfo.instagram}
                              </a>
                            ) : (
                              '-'
                            )}
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
                    <h3 className="card__title">Kosmo_Bot</h3>
                  </div>
                </div>
                <div className="card__body">
                  Хочешь быть в курсе всех новостей, оперативно отслеживать все регистрации и
                  финансовые операции в своём кабинете? Специально для тебя у нас есть KosmoBot,{' '}
                  <br />
                  <br />
                  <strong style={{ color: '#00C3E1' }}>
                    ОБЯЗАТЕЛЬНО вступай в него нажав на кнопку ниже!
                  </strong>
                  <br />
                  <br />
                  <Button tag="a" color="primary" href={``}>
                    Вступить
                  </Button>
                </div>
              </div>
              <div className="card">
                <div className="card__header">
                  <div className="card__header-left">
                    <h3 className="card__title">Обо мне</h3>
                  </div>
                </div>
                <div className="card__body">{userInfo.description || '-'}</div>
              </div>
              <video
                controls
                poster={posterVideo}
                controlsList="nodownload nofullscreen noremoteplayback"
              >
                <source src={video} type="video/mp4" />
              </video>
              {userInfo && userInfo.showInviter && (
                <h3 className="text-center mb-5 mt-5">
                  Если хотите пополнить кабинет без комиссии, напишите мне в Telegram, ссылка
                  наверху
                </h3>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Leader
