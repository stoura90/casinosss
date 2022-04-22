import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import logo from '../../../scss/media/m.png'
import txt from '../../../scss/media/kosmos.png'
import routes from '../../../constants/routes.constants'
import { CContainer, CHeader, CHeaderNav, CNavLink, CNavItem } from '@coreui/react'

function Header() {
  const [open, setOpen] = useState(false)
  const { t, i18n } = useTranslation('common')

  console.log(`i18n`, i18n)

  const handleHamburgerClick = () => {
    if (window.matchMedia('(max-width: 1300px)').matches) {
      document.querySelector('body').classList.toggle('no-scroll')
      setOpen(!open)
    }
  }

  return (
    <CHeader
      className={classnames('header', { 'header--transform-none': false })}
      data-aos="fade-down"
      data-aos-duration="300"
    >
      <CContainer className="header__container">
        <div className="header__flex">
          <div className="header__box">
            <Link to="/" className={classnames('header__logo-link', { 'd-none ': open })}>
              <img className="header__logo-star" width="40" height="40" alt={logo} src={logo} />
              <img className="header__logo-text" width="80" height="40" alt={txt} src={txt} />
            </Link>
          </div>

          <CHeaderNav className={classnames('header__mob-menu', { open })}>
            <CNavLink className="header__box">
              <CNavItem className="nav">
                <a className="nav__item" href="#about" onClick={handleHamburgerClick}>
                  {t('О проекте')}
                </a>
                <a className="nav__item" href="#advantages" onClick={handleHamburgerClick}>
                  {t('Преимущества')}
                </a>
                <a href="#roadmap" className="nav__item" onClick={handleHamburgerClick}>
                  Дорожная карта
                </a>
                <a className="nav__item" href="#materials" onClick={handleHamburgerClick}>
                  {t('Материалы')}
                </a>
              </CNavItem>
            </CNavLink>

            <Link to={routes.signIn} className="header-mob__btn header-mob__sign-in button">
              {t('Войти')}
            </Link>
            <Link
              to={routes.signUp}
              className="header-mob__btn header-mob__registration button button--violet"
            >
              {t('Регистрация')}
            </Link>

            <div className="header__box">
              <div className="header__social">
                <a
                  className="header__social-link"
                  href="https://t.me/kosmosmatrix"
                  rel="noreferrer"
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.84765 12.2832L7.51682 17.1692C7.99015 17.1692 8.19515 16.9557 8.44098 16.6994L10.6601 14.4725L15.2585 18.0084C16.1018 18.5019 16.696 18.242 16.9235 17.1937L19.9418 2.34324L19.9426 2.34237C20.2101 1.03337 19.4918 0.521492 18.6701 0.842617L0.928482 7.97474C-0.282352 8.46824 -0.264018 9.17699 0.722648 9.49812L5.25848 10.9795L15.7943 4.05737C16.2901 3.71262 16.741 3.90337 16.3701 4.24812L7.84765 12.2832Z"
                      fill="#8083E6"
                    />
                  </svg>
                </a>
                <a className="header__social-link" href="/" rel="noreferrer" target="_blank">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5958 11.2245C16.2725 10.7957 16.365 10.605 16.5958 10.2217C16.6 10.2173 19.2692 6.34458 19.5442 5.0312L19.5458 5.03033C19.6825 4.5517 19.5458 4.19995 18.885 4.19995H16.6983C16.1417 4.19995 15.885 4.50183 15.7475 4.83958C15.7475 4.83958 14.6342 7.63783 13.0592 9.4517C12.5508 9.97583 12.3158 10.1438 12.0383 10.1438C11.9017 10.1438 11.6892 9.97583 11.6892 9.4972V5.03033C11.6892 4.45633 11.5333 4.19995 11.0725 4.19995H7.63417C7.285 4.19995 7.0775 4.4677 7.0775 4.71708C7.0775 5.26133 7.865 5.38645 7.94667 6.9177V10.2401C7.94667 10.9681 7.82083 11.102 7.54167 11.102C6.79833 11.102 4.99417 8.29233 3.925 5.0767C3.70917 4.45283 3.49833 4.20083 2.9375 4.20083H0.75C0.125833 4.20083 0 4.5027 0 4.84045C0 5.4372 0.743333 8.40433 3.45667 12.3243C5.265 15.0001 7.81167 16.45 10.1283 16.45C11.5208 16.45 11.6908 16.128 11.6908 15.5741C11.6908 13.0173 11.565 12.7758 12.2625 12.7758C12.5858 12.7758 13.1425 12.9438 14.4425 14.2345C15.9283 15.7648 16.1725 16.45 17.0042 16.45H19.1908C19.8142 16.45 20.13 16.128 19.9483 15.4927C19.5325 14.1566 16.7225 11.4082 16.5958 11.2245Z"
                      fill="#8083E6"
                    />
                  </svg>
                </a>
                <a className="header__social-link" href="/" rel="noreferrer" target="_blank">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0419 0H5.95811C2.67279 0 0 2.80643 0 6.25601V14.744C0 18.1936 2.67279 21 5.95811 21H14.0419C17.3272 21 20 18.1936 20 14.744V6.25601C20 2.80643 17.3272 0 14.0419 0ZM17.988 14.744C17.988 17.0323 16.2213 18.8874 14.0419 18.8874H5.95811C3.77875 18.8874 2.012 17.0323 2.012 14.744V6.25601C2.012 3.96765 3.77875 2.1126 5.95811 2.1126H14.0419C16.2213 2.1126 17.988 3.96765 17.988 6.25601V14.744Z"
                      fill="#8083E6"
                    />
                    <path
                      d="M9.99986 5.0686C7.14762 5.0686 4.82715 7.5051 4.82715 10.4999C4.82715 13.4947 7.14762 15.9313 9.99986 15.9313C12.8521 15.9313 15.1726 13.4948 15.1726 10.4999C15.1726 7.50506 12.8521 5.0686 9.99986 5.0686ZM9.99986 13.8187C8.25423 13.8187 6.83915 12.3329 6.83915 10.5C6.83915 8.66704 8.25427 7.1812 9.99986 7.1812C11.7455 7.1812 13.1606 8.66704 13.1606 10.5C13.1606 12.3328 11.7455 13.8187 9.99986 13.8187Z"
                      fill="#8083E6"
                    />
                    <path
                      d="M15.1828 6.41091C15.8674 6.41091 16.4223 5.82822 16.4223 5.10945C16.4223 4.39067 15.8674 3.80798 15.1828 3.80798C14.4983 3.80798 13.9434 4.39067 13.9434 5.10945C13.9434 5.82822 14.4983 6.41091 15.1828 6.41091Z"
                      fill="#8083E6"
                    />
                  </svg>
                </a>
                <a className="header__social-link" href="/" rel="noreferrer" target="_blank">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8463 3.06995H4.15374C1.85969 3.06995 0 5.02262 0 7.43138V13.5686C0 15.9774 1.85969 17.9301 4.15374 17.9301H15.8463C18.1403 17.9301 20 15.9774 20 13.5686V7.43138C20 5.02262 18.1403 3.06995 15.8463 3.06995ZM13.0371 10.7986L7.56814 13.5374C7.42241 13.6104 7.25408 13.4988 7.25408 13.3293V7.68055C7.25408 7.50863 7.42684 7.39721 7.57287 7.47493L13.0418 10.3849C13.2044 10.4714 13.2016 10.7163 13.0371 10.7986Z"
                      fill="#8083E6"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="header__box">
              <div className="header__lang-switcher">
                <Link
                  to="#"
                  className={`header__lang ${i18n.language === 'en' ? 'header__lang--active' : ''}`}
                  onClick={() => {
                    i18n.changeLanguage('en')
                  }}
                >
                  EN
                </Link>
                <Link
                  to="#"
                  className={`header__lang ${i18n.language === 'ru' ? 'header__lang--active' : ''}`}
                  onClick={() => {
                    i18n.changeLanguage('ru')
                  }}
                >
                  RU
                </Link>
                <Link
                  to="#"
                  className={`header__lang ${i18n.language === 'kz' ? 'header__lang--active' : ''}`}
                  onClick={() => {
                    i18n.changeLanguage('kz')
                  }}
                >
                  KZ
                </Link>
              </div>
            </div>
          </CHeaderNav>
          <div className="header__box">
            <Link to={routes.signIn} className="header__sign-in">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2608 10.6824H0.652174C0.292173 10.6824 0 10.3769 0 10.0005C0 9.62418 0.292173 9.31873 0.652174 9.31873H13.2608C13.6208 9.31873 13.913 9.62418 13.913 10.0005C13.913 10.3769 13.6208 10.6824 13.2608 10.6824Z"
                  fill="white"
                />
                <path
                  d="M9.78239 14.3184C9.61536 14.3184 9.4485 14.2522 9.32144 14.1185C9.06668 13.8522 9.06668 13.4204 9.32144 13.1539L12.3389 9.99948L9.32144 6.84492C9.06668 6.57859 9.06668 6.14663 9.32144 5.88029C9.57635 5.61396 9.98937 5.61396 10.2441 5.88029L13.7223 9.51675C13.9771 9.78308 13.9771 10.2149 13.7223 10.4812L10.2441 14.1175C10.1163 14.2522 9.94941 14.3184 9.78239 14.3184Z"
                  fill="white"
                />
                <path
                  d="M10.4345 20C6.47703 20 2.98321 17.5109 1.5319 13.6581C1.39975 13.309 1.56486 12.9127 1.89971 12.7745C2.2336 12.6382 2.61366 12.8082 2.74581 13.16C3.99889 16.4864 7.01711 18.6364 10.4345 18.6364C14.9892 18.6364 18.6954 14.7617 18.6954 10C18.6954 5.23829 14.9892 1.36363 10.4345 1.36363C7.01711 1.36363 3.99889 3.51361 2.74581 6.83995C2.6127 7.19184 2.2336 7.3618 1.89971 7.22547C1.56486 7.08731 1.39975 6.69097 1.5319 6.34191C2.98321 2.48906 6.47703 0 10.4345 0C15.7084 0 19.9998 4.48639 19.9998 10C19.9998 15.5136 15.7084 20 10.4345 20Z"
                  fill="white"
                />
              </svg>
              <span>Войти</span>
            </Link>
            <div className={classnames('nav__hamburger', { open })} onClick={handleHamburgerClick}>
              <span className="nav__bar nav__bar--1" />
              <span className="nav__bar nav__bar--2" />
              <span className="nav__bar nav__bar--3" />
            </div>
          </div>
        </div>
      </CContainer>
    </CHeader>
  )
}

export default Header
