import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import NavBar from '../../../../components/layout/Navbar'
import { Link } from 'react-router-dom'
import routes from '../../../../constants/routes.constants'
import php from '../index.css'
function Snapsocial() {
  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block">
          <NavBar />
        </Col>
        <Col xl={9}>
          <div className="headerv">
            <div className="header_top">
              <div className="logo">
                <a href="/"></a>
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
            </div>
            <iframe src="http://localhost:3000/pages/snap_social.php" width="100%" height="1000%" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Snapsocial
