import React from 'react'
import Slider from 'react-slick'
import styles from './Roadmap.module.scss'
import 'slick-carousel/slick/slick.css'

import rocketLeft from '../../scss/media/rocket-left.3228ab4a.svg'
import rocketRight from '../../scss/media/rocket-right.3d8685d1.svg'

function RocketNextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={rocketRight} alt="Rocket Arrow Right" />
    </div>
  )
}

function RocketPrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={rocketLeft} alt="Rocket Arrow Left" />
    </div>
  )
}

const settings = {
  nextArrow: <RocketNextArrow />,
  prevArrow: <RocketPrevArrow />,
  slidesToScroll: 1,
  slidesToShow: 1,
  infinite: false,
  speed: 500,
  dots: true,
}

function Roadmap() {
  return (
    <Slider className={styles.slider} {...settings}>
      <div className={styles.slider}>
        <div className={styles.slideWrapper}>
          <div className={styles.slidePicture}>
            <div className="roadmap-fb-image" />
          </div>
          <div className={styles.slideInfo}>
            <ul>
              <li>Запуск платформы</li>
              <li>Запуск маркетинга Stars</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slideWrapper}>
          <div className={styles.slidePicture}>
            <div className="roadmap-mar-image" />
          </div>
          <div className={styles.slideInfo}>
            <ul>
              <li>PremiumStar</li>
              <li>StarsSchool</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slideWrapper}>
          <div className={styles.slidePicture}>
            <div className="roadmap-apr-image" />
          </div>
          <div className={styles.slideInfo}>
            <ul>
              <li>SuperStars</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slideWrapper}>
          <div className={styles.slidePicture}>
            <div className="roadmap-my-image" />
          </div>
          <div className={styles.slideInfo}>
            <ul>
              <li>LuckyStars</li>
              <li>StarsAcademy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slideWrapper}>
          <div className={styles.slidePicture}>
            <div className="roadmap-jn-image" />
          </div>
          <div className={styles.slideInfo}>
            <ul>
              <li>StarTrek</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slideWrapper}>
          <div className={styles.slidePicture}>
            <div className="roadmap-jl-image" />
          </div>
          <div className={styles.slideInfo}>
            <ul>
              <li>Предстарт StarsUp</li>
              <li>Информационный бот</li>
              <li>Автоматизированная система обучения</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slideWrapper}>
          <div className={styles.slidePicture}>
            <div className="roadmap-ag-image" />
          </div>
          <div className={styles.slideInfo}>
            <ul>
              <li>Бренд бук</li>
              <li>Запуск StarsUp</li>
              <li>Редизайн личных кабинетов</li>
              <li>Биржа внутрянки</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slideWrapper}>
          <div className={styles.slidePicture}>
            <div className="roadmap-au-image" />
          </div>
          <div className={styles.slideInfo}>
            <ul>
              <li>Stars Online (демо версия)</li>
              <li>Жилищная программа</li>
              <li>Крипто-матрица</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slideWrapper}>
          <div className={styles.slidePicture}>
            <div className="roadmap-wr-image" />
          </div>
          <div className={styles.slideInfo}>
            <ul>
              <li>VIP матрица</li>
              <li>Токенизация Бизнеса</li>
            </ul>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default Roadmap
