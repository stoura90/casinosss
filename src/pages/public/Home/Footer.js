import React from 'react'
import { useTranslation } from 'react-i18next'

import contractOffer from '../documents/contract-offer.pdf'
import privacyPolicy from '../documents/privacy-policy.pdf'
import termsOfUse from '../documents/terms-of-use.pdf'
import payeerLogo from '../../../scss/media/payeer-logo.8aa750cc.svg'
import AOS from 'aos'
AOS.init()
AOS.refresh()
function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="footer">
      <div className="footer__container" data-aos="fade-down" data-aos-duration="800">
        <p className="footer__title">{t('Официальные каналы')}</p>
        <div className="footer__social">
          <a
            className="footer__social-link"
            href="https://t.me/kosmosmatrix"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              width="41"
              height="43"
              viewBox="0 0 41 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M15.9018 27.1591L15.2314 37.0596C16.1906 37.0596 16.606 36.627 17.1041 36.1075L21.6008 31.5952L30.9185 38.76C32.6274 39.76 33.8313 39.2334 34.2923 37.1093L40.4084 7.01749L40.4101 7.01571C40.9521 4.36327 39.4966 3.32605 37.8316 3.97675L1.8814 18.4287C-0.572134 19.4287 -0.534985 20.8648 1.46431 21.5155L10.6553 24.5173L32.0043 10.4908C33.009 9.79227 33.9225 10.1788 33.1711 10.8774L15.9018 27.1591Z"
                  fill="#8083E6"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="40.5263"
                    height="42.5526"
                    fill="white"
                    transform="translate(0 0.242676)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Telegram&nbsp;chat</span>
          </a>

          <a
            className="footer__social-link"
            href="https://t.me/kosmosmatrix"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              width="41"
              height="43"
              viewBox="0 0 41 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M15.9018 27.1591L15.2314 37.0596C16.1906 37.0596 16.606 36.627 17.1041 36.1075L21.6008 31.5952L30.9185 38.76C32.6274 39.76 33.8313 39.2334 34.2923 37.1093L40.4084 7.01749L40.4101 7.01571C40.9521 4.36327 39.4966 3.32605 37.8316 3.97675L1.8814 18.4287C-0.572134 19.4287 -0.534985 20.8648 1.46431 21.5155L10.6553 24.5173L32.0043 10.4908C33.009 9.79227 33.9225 10.1788 33.1711 10.8774L15.9018 27.1591Z"
                  fill="#8083E6"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="40.5263"
                    height="42.5526"
                    fill="white"
                    transform="translate(0 0.242676)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Telegram&nbsp;Media</span>
          </a>

          <a
            className="footer__social-link"
            href="https://t.me/kosmosmatrix"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              width="41"
              height="43"
              viewBox="0 0 41 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.4533 0.242676H12.073C5.41592 0.242676 0 5.9294 0 12.9193V30.1186C0 37.1086 5.41592 42.7953 12.073 42.7953H28.4533C35.1104 42.7953 40.5263 37.1086 40.5263 30.1186V12.9193C40.5262 5.9294 35.1103 0.242676 28.4533 0.242676ZM36.4494 30.1186C36.4494 34.7555 32.8694 38.5145 28.4533 38.5145H12.073C7.65694 38.5145 4.07695 34.7555 4.07695 30.1186V12.9193C4.07695 8.28239 7.65694 4.52347 12.073 4.52347H28.4533C32.8694 4.52347 36.4494 8.28239 36.4494 12.9193V30.1186Z"
                fill="#8083E6"
              />
              <path
                d="M20.2638 10.5132C14.4842 10.5132 9.78223 15.4503 9.78223 21.5187C9.78223 27.5872 14.4842 32.5244 20.2638 32.5244C26.0433 32.5244 30.7453 27.5872 30.7453 21.5187C30.7453 15.4502 26.0433 10.5132 20.2638 10.5132ZM20.2638 28.2436C16.7266 28.2436 13.8592 25.2329 13.8592 21.5188C13.8592 17.8048 16.7267 14.794 20.2638 14.794C23.801 14.794 26.6684 17.8048 26.6684 21.5188C26.6684 25.2328 23.8009 28.2436 20.2638 28.2436Z"
                fill="#8083E6"
              />
              <path
                d="M30.7655 13.2333C32.1526 13.2333 33.2771 12.0526 33.2771 10.5962C33.2771 9.13969 32.1526 7.95898 30.7655 7.95898C29.3784 7.95898 28.2539 9.13969 28.2539 10.5962C28.2539 12.0526 29.3784 13.2333 30.7655 13.2333Z"
                fill="#8083E6"
              />
            </svg>
            <span>Instagram</span>
          </a>

          <a
            className="footer__social-link"
            href="https://t.me/kosmosmatrix"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              width="41"
              height="43"
              viewBox="0 0 41 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M32.1095 6.46338H8.4168C3.76832 6.46338 0 10.4201 0 15.301V27.7371C0 32.618 3.76832 36.5747 8.4168 36.5747H32.1095C36.758 36.5747 40.5263 32.618 40.5263 27.7371V15.301C40.5263 10.4201 36.758 6.46338 32.1095 6.46338ZM26.4173 22.1241L15.3354 27.6737C15.0402 27.8216 14.6991 27.5956 14.6991 27.2521V15.8059C14.6991 15.4576 15.0491 15.2318 15.345 15.3893L26.4269 21.2858C26.7564 21.4611 26.7507 21.9572 26.4173 22.1241Z"
                  fill="#8083E6"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="40.5263"
                    height="42.5526"
                    fill="white"
                    transform="translate(0 0.242676)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Youtube</span>
          </a>

          <a className="footer__social-link" href="/" rel="noreferrer" target="_blank">
            <svg
              width="41"
              height="43"
              viewBox="0 0 41 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M33.6284 22.9873C32.9732 22.1185 33.1607 21.732 33.6284 20.9554C33.6368 20.9465 39.0454 13.0991 39.6026 10.4378L39.606 10.436C39.883 9.46617 39.606 8.75342 38.267 8.75342H33.8361C32.7081 8.75342 32.188 9.36511 31.9094 10.0495C31.9094 10.0495 29.6534 15.7196 26.462 19.3951C25.4319 20.4572 24.9558 20.7976 24.3935 20.7976C24.1165 20.7976 23.6859 20.4572 23.6859 19.4873V10.436C23.6859 9.27291 23.3702 8.75342 22.4364 8.75342H15.4692C14.7617 8.75342 14.3412 9.29596 14.3412 9.80128C14.3412 10.9041 15.937 11.1576 16.1025 14.2604V20.9926C16.1025 22.4678 15.8475 22.739 15.2818 22.739C13.7756 22.739 10.1198 17.0459 7.95329 10.53C7.51594 9.26582 7.08873 8.75519 5.9523 8.75519H1.51974C0.254978 8.75519 0 9.36688 0 10.0513C0 11.2605 1.50623 17.2728 7.0043 25.216C10.6686 30.6379 15.8289 33.5758 20.5232 33.5758C23.3448 33.5758 23.6893 32.9233 23.6893 31.801C23.6893 26.6202 23.4343 26.1308 24.8477 26.1308C25.5029 26.1308 26.6309 26.4713 29.2651 29.0865C32.2758 32.1875 32.7706 33.5758 34.4558 33.5758H38.8867C40.1498 33.5758 40.7897 32.9233 40.4216 31.6361C39.579 28.9287 33.8851 23.3596 33.6284 22.9873Z"
                  fill="#8083E6"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="40.5263"
                    height="42.5526"
                    fill="white"
                    transform="translate(0 0.242676)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>ВКонтакте</span>
          </a>
        </div>
        <div className="footer__bottom">
          <a className="footer__contract-offer" download="Договор оферты" href={contractOffer}>
            {t('Договор оферты')}
          </a>
          <a
            className="footer__contract-offer"
            download={t('Политика конфендициальности')}
            href={privacyPolicy}
          >
            {t('Политика конфендициальности')}
          </a>
          <a
            className="footer__contract-offer"
            download={t('Правила использования')}
            href={termsOfUse}
          >
            {t('Правила использования')}
          </a>
          <a
            className="footer__bottom-box"
            href="https://www.free-kassa.ru/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://www.free-kassa.ru/img/fk_btn/23.png" alt="" />
          </a>
          <div className="footer__bottom-box payeer-logo">
            <img src={payeerLogo} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
