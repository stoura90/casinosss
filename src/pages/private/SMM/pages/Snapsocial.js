import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import NavBar from '../../../../components/layout/Navbar'
import { Link } from 'react-router-dom'
import routes from '../../../../constants/routes.constants'
function Snapsocial() {
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
          <div className="right_block">
            <div className="right_block_content">
              <div className="content_block">
                <div className="text_title">
                  <span className="fa fa-link"></span>
                  Привязка аккаунтов
                </div>
                <hr className="hr_green" />
                <script type="text/javascript" src="//vk.com/js/api/openapi.js?105"></script>
                <div className="center">
                  <b>Привяжите социальные сети для начала работы с сервисом.</b>
                </div>
                <div className="div_snap_social">
                  <div style={{ display: 'inline-block', right: '15px' }}>
                    <img src="../img/vk.png" />
                  </div>
                  <div style={{ display: 'inline-block', width: '150px' }} className="xxx">
                    <div
                      id="uLogin_1"
                      data-ulogin="display=buttons;optional=first_name,last_name,photo;providers=vkontakte;redirect_uri=http%3A%2F%2Fsmm%2Fsnapsocial"
                    >
                      <a href="#" data-uloginbutton="vkontakte" className="btn btn-primary">
                        Привязать
                      </a>
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
export default Snapsocial
