import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import NavBar from '../../../components/layout/Navbar'
import './index.css'
import { Link } from 'react-router-dom'
import routes from '../../../constants/routes.constants'
function Smm() {
  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block">
          <NavBar />
        </Col>
        <Col xl={9}>
          <div className="headerb">
            <div id="menu">
              <ul>
                <li>
                  <a href="/addtask/vkontakte">
                    <span className="fa fa-plus-circle"></span>
                    <br />
                    Добавить задание
                  </a>
                </li>
                <li>
                  <a href="/mytask/vkontakte">
                    <span className="fa fa-tasks"></span>
                    <br />
                    Мои задания
                  </a>
                </li>
                <li>
                  <a href="/buy_points">
                    <span className="fa fa-rub"></span>
                    <br />
                    Купить баллы
                  </a>
                </li>
                <li>
                  <a href="/partners">
                    <span className="fa fa-users"></span>
                    <br />
                    Партнерка
                  </a>
                </li>
                <li>
                  <Link to={routes.smmsoc}>
                    <span className="fa fa-question-circle"></span>
                    <br />
                    Привязать соц сети
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="contentq">
            <div className="content_all">
              <div className="right_block">
                <div className="right_block_content">
                  <p>
                    <span className="index_title">
                      Отличная возможность получить живую, заинтересованную аудиторию
                    </span>
                  </p>
                  <br />
                  <div className="index_div_social">
                    Мы работаем со следующими соц. сетями:<br></br>
                    <a href="#vkontakte">
                      <img className="img_big" src="./img/vk.png" />
                    </a>
                    <a href="#instagram">
                      <img className="img_big" src="./img/in.png" />
                    </a>
                    <a href="#youtube">
                      <img className="img_big" src="./img/yt.png" />
                    </a>
                  </div>
                  <br />
                  <br />
                  <div className="index_div_social">
                    С помощью нашего сервиса Вы можете быстро, качественно и бесплатно накрутить
                    подписчиков, лайки, репосты, голоса и комментарии во всех популярных социальных
                    сетях.
                  </div>
                  <br />
                  <br />
                  <div className="content_block" id="vkontakte">
                    <div className="vkc">
                      <img src="./img/vk.png" alt="Вконтакте" />
                    </div>
                    <div className="vvv">
                      <span className="index_title">Вконтакте</span>
                      <br />
                      <br />
                      <b>Подписчики | Лайки | Репосты | Друзья | Голосования | Комментарии</b>
                      <br />
                      <br />
                      Бесплатная раскрутка вашей страницы, группы и записей.
                      <br />
                      Простой и удобный интерфейс добавления заданий.
                      <br />С нашим сервисом вы легко и в считанные сроки увеличите число
                      подписчиков на Вашей странице или в группе.
                    </div>
                    <div className="content_block" id="instagram">
                      <div style={{ display: 'inline-block', width: '500px', color: '#000000' }}>
                        <span className="index_title" style={{ color: '#E6544C' }}>
                          Инстаграмм
                        </span>
                        <br />
                        <br />
                        <b>Подписчики | Лайки | Комментарии</b>
                        <br />
                        <br />
                        Накрутка лайков и подписчиков в Инстаграм бесплатно.
                        <br />
                        Инстаграм - одна из самых популярных социальных сетей на данный момент.
                        <br />
                        С нашим сервисом Вы быстро увеличите количество подписчиков, которые будут
                        лайкать Ваши публикации и тем самым повышать рейтинг Вашего аккаунта.
                        <br />
                      </div>
                      <div className="imged">
                        <img src="./img/in.png" alt="Инстаграм" />
                      </div>
                      <div className="content_block" id="youtube">
                        <div>
                          <img className="vkc" src="./img/yt.png" alt="Ютуб" />
                        </div>
                        <div style={{ display: 'inline-block', width: '500px', color: '#000000' }}>
                          <span className="index_title" style={{ color: '#C8312B' }}>
                            Ютуб
                          </span>
                          <br />
                          <br />
                          <b>Подписчики | Лайки | Просмотры | Комментарии</b>
                          <br />
                          <br />
                          Ютуб является на данный момент самым популярным сервисом для видео
                          блогеров - это многомиллионная аудитория людей по всему миру.
                          <br />
                          Основным фактором популярности Вашего видео являются лайки. Наш сервис
                          позволит вам быстро накрутить нужно количество лайков и комментариев, тем
                          самым повысив ваш рейтинг в списке выдачи поиска Ютуба.
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Smm
