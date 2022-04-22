import React, { useState, useMemo } from 'react'
import { Row, Col, Button } from 'reactstrap'
import Lightbox from 'react-image-lightbox'
import { useSelector } from 'react-redux'

function NewsBlock() {
  const [isOpen, setIsOpen] = useState(false)
  const blocks = useSelector((state) => state.news.block)

  const lastWeekNews = useMemo(
    () => (blocks && blocks.week[blocks.week.length - 1]) || null,
    [blocks],
  )

  const lastDayNews = useMemo(() => (blocks && blocks.day[blocks.day.length - 1]) || null, [blocks])

  const imageSrc = useMemo(
    () => lastWeekNews && `${process.env.REACT_APP_BASE_URL}${lastWeekNews.image}`,
    [lastWeekNews],
  )

  const handleOpenPreview = () => setIsOpen(true)

  return (
    <>
      <Row>
        <Col md={6}>
          {lastWeekNews && (
            <figure className="news__figure">
              <h3 className="news__figure-title">{lastWeekNews.ruTitle}</h3>
              <div
                className="news__figure-image news__figure-image--pointer"
                onClick={handleOpenPreview}
              >
                <img
                  src={`${process.env.REACT_APP_BASE_URL}${lastWeekNews.image}`}
                  alt={lastWeekNews.ruTitle}
                />
              </div>
              <figcaption className="news__figure-body">
                <Button onClick={handleOpenPreview} color="primary" outline block>
                  Посмотреть
                </Button>
              </figcaption>
            </figure>
          )}
        </Col>
        <Col md={6}>
          {lastDayNews && (
            <figure className="news__figure">
              <h3 className="news__figure-title">{lastDayNews.ruTitle}</h3>
              <div className="news__figure-image">
                <img
                  src={`${process.env.REACT_APP_BASE_URL}${lastDayNews.image}`}
                  alt={lastDayNews.ruTitle}
                />
              </div>
              <figcaption className="news__figure-body">
                {lastDayNews.event && lastDayNews.link && (
                  <Button tag="a" href={lastDayNews.link} target="_blank" color="primary" block>
                    Посетить
                  </Button>
                )}
              </figcaption>
            </figure>
          )}
        </Col>
      </Row>
      {isOpen && (
        <Lightbox
          mainSrc={imageSrc}
          mainSrcThumbnail={imageSrc}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default NewsBlock
