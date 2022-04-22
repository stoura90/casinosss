import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classname from 'classnames'

import routes from '../../../constants/routes.constants'
import AOS from 'aos'
AOS.init()
AOS.refresh()
function Authentication() {
  const [animation, setAnimation] = useState(true)
  const { t } = useTranslation('common')

  useEffect(() => {
    setAnimation(false)
  }, [setAnimation])

  return (
    <div
      className={classname('authentication', {
        'authentication--animate': animation,
      })}
    >
      <div className="authentication__container">
        <div className="authentication__flex">
          <div className="authentication__btn-wrap">
            <Link
              to={routes.signUp}
              className="authentication__link button button--violet authentication__btn"
            >
              {t('Ркгистрация')}
            </Link>
            <Link to={routes.signIn} className="authentication__link button authentication__btn">
              {t('Вход')}
            </Link>
          </div>
          <div className="authentication__btn-wrap">
            <a
              href="/"
              className="authentication__link button button--svg-evlipses authentication__btn"
              rel="noreferrer"
              target="_blank"
            >
              <span>{t('Смотреть')}</span>
              <svg
                className="button__svg-eclipses"
                width="92"
                height="93"
                viewBox="0 0 92 93"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="46" cy="46.9619" r="30" fill="white" />
                <circle opacity="0.3" cx="46" cy="46.9619" r="46" fill="white" />
                <path d="M42 39.9619V53.9619L53 46.9619L42 39.9619Z" fill="#11032C" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authentication
