import React, { useEffect, useState } from 'react'
import { Scrollbar } from 'react-scrollbars-custom'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './NewsItem.module.scss'
import { api } from '../../../../api'
import telegram from '../../../../scss/media/insta.svg'
import vk from '../../../../scss/media/vk.svg'
import instagram from '../../../../scss/media/insta.svg'
import youtube from '../../../../scss/media/yotob.svg'
import routes from '../../../../constants/routes.constants'

const socialLinks = [
  {
    icon: telegram,
    alt: 'Telegram',
    link: 'https://t.me/joinchat/5trTW-xurLRlN2Uy',
  },
  {
    icon: vk,
    alt: 'VK',
    link: 'https://vk.com/public202035837',
  },
  {
    icon: instagram,
    alt: 'Instagram',
    link: 'https://instagram.com/stars_matrix?igshid=saos17iyb7lx',
  },
  {
    icon: youtube,
    alt: 'Youtube',
    link: 'https://www.youtube.com/channel/UCrmcF7JcICRxIYCMMnPyrrg',
  },
]

// eslint-disable-next-line react/prop-types
export default function NewsItemPage({ match: { params } }) {
  const [newsInfo, setNewsInfo] = useState(null)

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (params.id) {
      api
        // eslint-disable-next-line react/prop-types
        .getNewsById(params.id)
        .then((response) => {
          setNewsInfo(response)
        })
        .catch(() => {})
    }
    // eslint-disable-next-line react/prop-types
  }, [params.id])

  return (
    <div className={styles.NewsItem}>
      {newsInfo && (
        <Container>
          <Row>
            <div className={styles.mainImage}>
              <img src={`${process.env.REACT_APP_BASE_URL}${newsInfo.image}`} alt="" />
            </div>
            <Col xs={12}>
              <div className={styles.newsContent}>
                <h2 className={styles.title}>{newsInfo.ruTitle}</h2>
                <Link className={styles.closeButtton} to={routes.news}>
                  <svg
                    width="31"
                    height="31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 31 31"
                  >
                    <g clipPath="url(#clip0)" fill="#8083E6">
                      <path d="M30.2 25.15L5.92.85a2.71 2.71 0 00-3.83 0L.79 2.14a2.71 2.71 0 000 3.84l24.3 24.3a2.71 2.71 0 003.84 0l1.27-1.28a2.71 2.71 0 000-3.84z" />
                      <path d="M25.09.86L.79 25.16a2.71 2.71 0 000 3.83l1.28 1.27a2.71 2.71 0 003.84 0L30.2 5.97a2.71 2.71 0 000-3.83L28.93.86a2.71 2.71 0 00-3.84 0z" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <path fill="#fff" d="M0 0h31v31H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <div className={styles.date}>
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                      d="M17.42 1.56h-1.8V.62a.62.62 0 10-1.24 0v.94H5.62V.62a.62.62 0 10-1.25 0v.94h-1.8A2.58 2.58 0 000 4.14v13.28A2.58 2.58 0 002.58 20h14.84A2.58 2.58 0 0020 17.42V4.14a2.58 2.58 0 00-2.58-2.58zM2.58 2.81h1.8v.63a.62.62 0 101.25 0V2.8h8.75v.63a.62.62 0 101.24 0V2.8h1.8c.73 0 1.33.6 1.33 1.33v1.49H1.25V4.13c0-.73.6-1.33 1.33-1.33zm14.84 15.94H2.58c-.73 0-1.33-.6-1.33-1.33V6.87h17.5v10.55c0 .73-.6 1.33-1.33 1.33z"
                      fill="#8083E6"
                    />
                  </svg>
                  <time>{newsInfo.date.split('-').reverse().join('.')}</time>
                </div>
                <p
                  className={styles.text}
                  dangerouslySetInnerHTML={{ __html: newsInfo.ruText }}
                ></p>
                <Scrollbar
                  className={styles.scrollbar}
                  trackYProps={{
                    renderer: (props) => {
                      // eslint-disable-next-line react/prop-types
                      const { elementRef, ...restProps } = props
                      return <span {...restProps} ref={elementRef} className={styles.trackY} />
                    },
                  }}
                  thumbYProps={{
                    renderer: (props) => {
                      // eslint-disable-next-line react/prop-types
                      const { elementRef, ...restProps } = props
                      return <span {...restProps} ref={elementRef} className={styles.thumbY} />
                    },
                  }}
                >
                  <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{ __html: newsInfo.ruText }}
                  ></p>
                </Scrollbar>
                <div className={styles.footer}>
                  <hr className={styles.delimiter} />
                  <div className="d-xl-flex align-items-center">
                    <p className={styles.footerTitle}>Наши социальные сети:</p>
                    <div className={styles.socialLinks}>
                      {socialLinks.map(({ link, icon, alt }) => (
                        <a
                          className={styles.icon}
                          key={link}
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={icon} alt={alt} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  )
}
