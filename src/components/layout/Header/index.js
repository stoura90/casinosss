import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '../../../scss/media/kosmos.png'
import hamburger from '../../../scss/media/hamburger.d7c1214b.svg'
import signIn from '../../../scss/media/sig.svg'
import signOut from '../../../scss/media/sign-out.23817495.svg'
import routes from '../../../constants/routes.constants'
import * as actions from '../../../actions/auth.actions'
import leader from '../../../scss/media/leader.42ee91d2.svg'
import user from '../../../scss/media/user.5e48b571.svg'
import news from '../../../scss/media/news.58147b12.svg'
import car from '../../../scss/media/car.9ce679da.svg'
import superstar from '../../../scss/media/suprestar.424178cf.svg'
import luckyStar from '../../../scss/media/12345.png'
import starsUp from '../../../scss/media/leader.42ee91d2.svg'
import question from '../../../scss/media/question.d8eb4f5a.svg'
import money from '../../../scss/media/money-coin.1ab3ac3b.svg'
import team from '../../../scss/media/team.9cf5738b.svg'
import cap from '../../../scss/media/academic-cap.24d75e30.svg'
import gear from '../../../scss/media/gear.08e3a0ec.svg'
import bbb from '../../../scss/media/bbb.svg'
import chat from '../../../scss/media/chat.svg'

const publicNavLinks = [
  {
    name: 'О проекте',
    route: '/start-page#description',
  },
  {
    name: 'Преимущества',
    route: '/start-page#benefits',
  },
  {
    name: 'Маркетинг',
    route: '/start-page#marketing',
  },
  {
    name: 'Промо материалы',
    route: '/start-page#materials',
  },
]

const privateNavLinks = [
  {
    label: 'Наставник',
    route: routes.leader,
    isDisabled: false,
    icon: leader,
  },
  {
    label: 'Кабинет',
    route: routes.dashboard,
    isDisabled: false,
    icon: user,
  },
  {
    label: 'Новости',
    route: routes.news,
    isDisabled: false,
    icon: news,
  },
  {
    label: 'Пегас mini',
    route: routes.matrixmini,
    isDisabled: false,
    icon: logo,
  },
  {
    label: 'Пегас uno',
    route: routes.matrixs,
    isDisabled: false,
    icon: logo,
  },
  {
    label: 'Пегас',
    route: routes.tables,
    isDisabled: false,
    icon: logo,
  },
  {
    label: 'Аида',
    route: routes.premiumStars,
    isDisabled: false,
    icon: car,
  },
  {
    label: 'Андромеда',
    route: routes.superStars,
    isDisabled: false,
    icon: superstar,
  },
  {
    label: 'Млечный путь',
    route: routes.starTrek,
    isDisabled: false,
    icon: logo,
  },
  {
    label: 'exchange',
    route: routes.exchange,
    isDisabled: false,
    icon: luckyStar,
  },
  {
    label: 'Investbox',
    route: routes.starsUp,
    isDisabled: false,
    icon: starsUp,
  },
  {
    label: 'Игры',
    route: routes.casino,
    isDisabled: false,
    icon: bbb,
  },
  {
    label: 'О нас',
    route: routes.aboutUs,
    isDisabled: false,
    icon: question,
  },
  {
    label: 'Кошелек',
    route: routes.finances,
    isDisabled: false,
    icon: money,
  },
  {
    label: 'Рефераллы',
    route: routes.team,
    isDisabled: false,
    icon: team,
  },
  {
    label: 'Продвижение',
    route: routes.smm,
    isDisabled: false,
    icon: team,
  },
  // {
  //   label: 'Промо',
  //   route: routes.promo,
  //   isDisabled: true,
  //   icon: megaphone,
  // },
  {
    label: 'Торговый бот',
    route: routes.education,
    isDisabled: false,
    icon: cap,
  },
  {
    label: 'Чат участников',
    isDisabled: false,
    route: routes.chat,
    icon: chat,
  },
  // {
  //   label: 'Отзывы',
  //   route: routes.reviews,
  //   isDisabled: true,
  //   icon: reviews,
  // },
  {
    label: 'Настройки',
    route: routes.settings,
    isDisabled: false,
    icon: gear,
  },
]

// eslint-disable-next-line react/prop-types
export default function Header({ variant }) {
  const dispatch = useDispatch()
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)

  const logout = () => {
    dispatch(actions.signOutSuccess())

    const timer = localStorage.getItem('w')
    localStorage.clear()
    localStorage.setItem('w', timer)
  }

  const toggleNavMenu = () => {
    if (isNavMenuVisible) {
      document.body.style.overflow = 'initial'
      setIsNavMenuVisible(false)
    } else {
      document.body.style.overflow = 'hidden'
      setIsNavMenuVisible(true)
    }
  }

  useEffect(() => {
    setIsHeaderVisible(true)
  }, [])

  return (
    <header
      className={`${styles.Header} ${styles[variant]} ${isHeaderVisible ? styles.visible : ''}`}
    >
      <div className={styles.wrapper}>
        <Container>
          {variant === 'public' && (
            <Row>
              <Col xs={6} xl={9} className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <div className={styles.mainLogo}>
                    <svg
                      className={styles.star}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 42 40"
                    >
                      <path
                        d="M14.2 18.7c.1-.3.6-.3.7 0l1 3.1c0 .2.2.3.4.3h3.2c.3 0 .5.4.2.6l-2.6 2c-.1 0-.2.2-.1.3l1 3.1c0 .4-.3.6-.6.4l-2.6-1.9h-.4l-2.6 2c-.3.1-.7-.1-.6-.5l1-3-.1-.5-2.7-1.9a.4.4 0 01.3-.6h3.2c.1 0 .3-.1.3-.3l1-3z"
                        fill="#fff"
                      />
                      <path
                        d="M13.7 15.8l-1.4 4-.4.2H6.5h-.2L.9 16a.4.4 0 01.2-.7h12.2c.3 0 .4.2.4.5z"
                        fill="#8083E6"
                      />
                      <path
                        d="M18.9 31.2l-3.5-2.4c-.1-.1-.3-.1-.4 0l-4.5 3.1v.2l-2.1 6.4c-.1.4.2.6.5.4l10-7c.2-.2.2-.5 0-.7zM21.6 31l-1.9-5.3c0-.2 0-.4.2-.5l7.3-4.7c.3-.2.1-.7-.2-.7l-8.7.4a.4.4 0 01-.4-.2l-1.7-5.3v-.2l4.2-13.2c.1-.3.6-.3.7 0l4.4 13.8.3.2h14.6c.4 0 .5.5.3.7l-11.8 8.5c-.2.1-.2.3-.2.4l4.5 14c.1.3-.3.6-.5.4l-11-8.1V31z"
                        fill="#4B0FB2"
                      />
                    </svg>
                    <svg
                      className={styles.label}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 57 18"
                    >
                      <path
                        d="M52.05 17.5a8.83 8.83 0 01-3.02-.52 6.78 6.78 0 01-2.48-1.53l1.13-2.05c.74.6 1.47 1.03 2.17 1.32.71.28 1.4.42 2.08.42.61 0 1.1-.1 1.46-.33.38-.22.57-.55.57-.99 0-.46-.23-.76-.69-.92-.45-.17-1.09-.38-1.9-.64a16.4 16.4 0 01-2.3-.87 3.7 3.7 0 01-1.39-1.08 2.8 2.8 0 01-.44-1.65c0-1.22.45-2.18 1.36-2.9a5.68 5.68 0 013.64-1.09c.88 0 1.71.14 2.5.42.78.27 1.5.71 2.14 1.32l-1.27 2a5.78 5.78 0 00-3.52-1.4c-.5 0-.95.09-1.34.28-.38.19-.57.52-.57.99 0 .44.19.75.55.94.37.19.94.4 1.7.61.97.3 1.8.6 2.47.88.7.28 1.21.64 1.56 1.08.36.44.54 1.04.54 1.8 0 1.22-.45 2.18-1.34 2.87-.9.7-2.1 1.04-3.61 1.04zM43.26 8.5a5.67 5.67 0 012.57-.57V5.05a4.18 4.18 0 00-2.8.78 5.37 5.37 0 00-1.66 2V5.2h-2.9V7.97c.52-.07 1.59 0 1.77.88.22 1.1-.45 2.13-1.77 2.28v6.42h3.16v-7.47c.33-.7.87-1.22 1.63-1.58zM16.27 7.35v7.1l3.16-1.06V7.35h2.6V4.92h-2.6v-4h-3.16v4h-1.62v2.43h1.62zM21.4 17.2c.62-.18 1.15-.37 1.57-.56l-.63-2.5-5.93 1.33c0 .15.08.37.29.75.3.44.7.76 1.18.96.49.2 1.02.31 1.6.31.66 0 1.3-.1 1.91-.28zM10.84 4.36c.45.25.75.46.9.61l1.43-2.64c-.72-.48-1.59-.92-2.6-1.3A9.2 9.2 0 007.33.48c-1.13 0-2.16.2-3.09.61-.93.4-1.66.99-2.21 1.77-.54.77-.8 1.73-.8 2.88 0 .86.17 1.58.51 2.15A4.1 4.1 0 003.3 9.27c.7.36 1.6.69 2.66.99.87.25 1.62.48 2.27.68.66.2 1.17.46 1.53.76.36.3.54.69.54 1.17 0 1.15-.9 1.73-2.69 1.73-.62 0-1.25-.08-1.86-.24-.61-.16-1.18-.35-1.7-.57-.52-.23-.96-.46-1.32-.68a5.07 5.07 0 01-.75-.57L.53 15.35a12 12 0 003.28 1.6c.54.15 1.72.42 2.14.36l7-1.91c.59-.74.8-1.66.8-2.86 0-1.02-.21-1.83-.65-2.45a4.4 4.4 0 00-1.86-1.5c-.8-.38-1.76-.71-2.86-1-.85-.22-1.55-.42-2.12-.61-.57-.19-.99-.42-1.27-.68a1.42 1.42 0 01-.43-1.09c0-1.26.89-1.89 2.67-1.89a8.13 8.13 0 013.6 1.04zM7.56 17.52c1.1 0 2.12-.16 3.06-.5.49-.16.92-.39 1.3-.66l-5.58 1.1 1.22.06zM24.57 11.55a4.35 4.35 0 011.89-1.42 7.2 7.2 0 012.76-.49c.52 0 1.04.05 1.58.14.37.03.73.1 1.15.1l.06-.02.18-.39c0-.78-.24-1.39-.7-1.81-.46-.43-1.15-.64-2.06-.64-.68 0-1.32.12-1.93.36-.62.23-1.26.58-1.94 1.03l-1.01-2.07a9.13 9.13 0 015.21-1.6c1.76 0 3.13.43 4.1 1.32 1 .8 1.15 1.32 1.37 2.87l-3.22.93-.01.02h-.05l-7.6 2.2.22-.53zM35.52 14.5c-.12-.14-.17-.39-.17-.73l-.02-1.98-3.26.67.12.74c0 .35-.2.7-.59 1.09a3.7 3.7 0 01-2.5.94c-.7 0-1.25-.19-1.63-.57-.37-.37-.56-.8-.56-1.27l-3 .54c0 .73.18 1.13.54 1.72a4.1 4.1 0 001.54 1.4c.64.33 1.38.49 2.21.49a5.5 5.5 0 004.46-2.17l.07.64c.07.4.26.75.6 1.04.32.28.8.42 1.43.42.16 0 .35-.02.57-.05.23-.01.5-.05.77-.12v-2.57c-.28-.03-.47-.1-.58-.23z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                </div>
                <nav className={styles.navMenu}>
                  {publicNavLinks.map(({ name, route }) => (
                    <HashLink key={name} to={route} className={styles.navLink}>
                      {name}
                    </HashLink>
                  ))}
                </nav>
              </Col>
              <Col xs={6} xl={3} className="d-flex align-items-center justify-content-end">
                <Link to={routes.signIn} className={styles.signInLink}>
                  <img src={signIn} alt="Войти" />
                  Войти
                </Link>
                <button className={styles.hamburgerButton}>
                  <img src={hamburger} alt="Иконка гамбургер меню" />
                </button>
              </Col>
            </Row>
          )}
          {variant === 'private' && (
            <Row>
              <Col className="d-flex align-items-center">
                <button className={styles.hamburgerButton} onClick={toggleNavMenu}>
                  <img src={hamburger} alt="Иконка гамбургер меню" />
                </button>
              </Col>
              <Col>
                <Link to={routes.root}>
                  <img className={styles.mainLogo} src={logo} alt="Логотип Stars" />
                </Link>
              </Col>
              <Col className="d-flex align-items-center justify-content-end">
                <button className={styles.signoutButton} onClick={logout}>
                  <img src={signOut} alt="Выйти" />
                </button>
              </Col>
            </Row>
          )}
        </Container>
        <nav className={`${styles.mobileNavBar} ${isNavMenuVisible ? styles.opened : ''}`}>
          <Container>
            <Row>
              <Col xs={12}>
                {privateNavLinks.map(({ label, route }) => (
                  <Link
                    key={route}
                    to={route}
                    className={styles.mobileNavLink}
                    onClick={toggleNavMenu}
                  >
                    {label}
                  </Link>
                ))}
              </Col>
            </Row>
          </Container>
        </nav>
      </div>
    </header>
  )
}
