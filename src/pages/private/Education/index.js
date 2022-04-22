import React, { useEffect, useState } from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import styles from './Education.module.scss'
import video from '../../../scss/media/academy-video.1aec7fc8.png'
import { api } from '../../../api'
import routes from '../../../constants/routes.constants'

import Button from '../../../components/OldButton'
//import UserInfo from '../../../components/UserInfo'
import NavBar from '../../../components/layout/Navbar'
import CreateComment from './CreateComment'
import FillForm from './FillForm'

// eslint-disable-next-line react/prop-types
const MainPage = ({ comments, userPermissions }) => {
  return (
    <>
      <h1 className={styles.mainTitle}>
        Стань владельцем уникального торгового бота <span>KOSMOBOT</span>
      </h1>
      <a
        href="https://www.youtube.com/watch?v=OL4_3NmFHJI"
        target="_blank"
        rel="noreferrer"
        className={styles.videoPresentation}
      >
        <img src={video} alt="" />
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 57">
          <circle cx="27.9" cy="28.7" r="27.9" fill="#fff" />
          <path d="M24 22v13.5l10.6-6.8L24.1 22z" fill="#11032C" />
        </svg>
      </a>
      {/* eslint-disable-next-line react/prop-types */}
      {userPermissions.canCreateForm ? (
        <Link to={routes.educationForm}>
          <Button className={styles.formButton} color="perrywinkle" size="medium">
            Заполнить анкету
          </Button>
        </Link>
      ) : (
        <Link rel="noreferrer" target="_blank" to={routes.educationForm}>
          <Button className={styles.formButton} color="transparent" size="medium">
            Заказать Торгового бота
          </Button>
        </Link>
      )}

      <h2 className={styles.title}>Отзывы</h2>
      {comments && (
        <>
          <div className={styles.carousel}>
            <Carousel
              prevIcon={
                <svg
                  className={styles.arrow}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 22"
                >
                  <path
                    d="M12.29 20.22L2.24 12.04a1.29 1.29 0 010-2L12.3 2"
                    stroke="#fff"
                    strokeWidth="2.02"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              nextIcon={
                <svg
                  className={styles.arrow}
                  viewBox="0 0 14 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.29 20.22l10.04-8.18c.64-.52.64-1.5 0-2L1.28 2"
                    stroke="#fff"
                    strokeWidth="2.02"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            >
              {/* eslint-disable-next-line react/prop-types */}
              {comments.map(({ avatar, text, user_name }) => (
                // eslint-disable-next-line react/jsx-key
                <Carousel.Item>
                  <div className={styles.slide}>
                    <div className={styles.header}>
                      <img
                        className={styles.avatar}
                        src={`${process.env.REACT_APP_BASE_URL}${avatar}`}
                        alt=""
                      />
                      <span className={styles.username}>{user_name}</span>
                    </div>
                    <p className={styles.description}>{text}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </>
      )}
      {/* eslint-disable-next-line react/prop-types */}
      <Link
        to={
          // eslint-disable-next-line react/prop-types
          userPermissions.canComment ? routes.educationComment : routes.education
        }
      >
        <Button
          size="medium"
          /* eslint-disable-next-line react/prop-types */
          color={`${
            // eslint-disable-next-line react/prop-types
            userPermissions.canComment ? 'perrywinkle' : 'transparent'
          }`}
          className={styles.reviewButton}
        >
          Оставить отзыв
        </Button>
      </Link>
    </>
  )
}

export default function Education() {
  const [comments, setComments] = useState(null)
  const [userPermissions, setUserPermissions] = useState({
    canComment: false,
    canCreateForm: false,
  })
  const userInfo = useSelector((state) => state.app.user)

  useEffect(() => {
    api
      .getComments()
      .then((response) => {
        if (Array.isArray(response.items) && response.items.length > 0) {
          setComments(response.items)
        }
      })
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (userInfo) {
      setUserPermissions({
        canComment: userInfo.can_create_comment,
        canCreateForm: userInfo.can_use_school,
      })
    }
  }, [userInfo])

  return (
    <div className={styles.Education}>
      <Container>
        <Row>
          <Col className="d-none d-xl-block" xl={3}>
            <NavBar />
          </Col>
          <Col xs={12} xl={9} className="position-static">
            <Switch>
              <Route
                exact
                path={routes.education}
                render={() => <MainPage comments={comments} userPermissions={userPermissions} />}
              />
              <Route exact path={routes.educationComment} component={CreateComment} />
              <Route exact path={routes.educationForm} component={FillForm} />
              <Redirect to={routes.education} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
