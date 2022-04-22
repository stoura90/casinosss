import React, { useEffect, useState, useCallback } from 'react'
import { resizeFreeInformationImage, formatterNumber } from '../../../utils'
import { useSelector, useDispatch } from 'react-redux'
import * as htmlToImage from 'html-to-image'
import { saveAs } from 'file-saver'
import { Button } from 'reactstrap'
import Raven from 'raven-js'

import * as actions from '../../../actions/app.actions'
import avatar from '../../../scss/media/placeholder.7e85be59.svg'
import inImage from '../../../scss/media/insta.svg'
import vkImage from '../../../scss/media/vk.svg'
import tgImage from '../../../scss/media/vk.svg'
import Icon from '../../../components/Icon'

function Summary() {
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.app.user)
  const statistics = useSelector((state) => state.startrek.statistics)
  const isLoadingPublish = useSelector((state) => state.app.loadings.publish)
  const [freeInfoAvatar, setFreeInfoAvatar] = useState(null)

  useEffect(() => {
    async function fetchImage() {
      if (userInfo?.avatar) {
        const load = await fetch(`${process.env.REACT_APP_BASE_URL}${userInfo.avatar}`)
        const blob = await load.blob()
        const resizeImage = await resizeFreeInformationImage(blob)
        setFreeInfoAvatar(resizeImage)
      } else {
        setFreeInfoAvatar(avatar)
      }
    }
    fetchImage()
  }, [userInfo])

  const downloadSummary = useCallback(async () => {
    dispatch(actions.publishSummaryToTelegram())
    try {
      const imgData = await htmlToImage.toBlob(document.getElementById('startrek-summary'), {
        style: { backgroundColor: '#130132' },
        cacheBust: true,
        pixelRatio: 1,
      })

      if (imgData && statistics?.totalSum && userInfo?.avatar) {
        // Send to Telegram
        dispatch(actions.publishSummaryToTelegramUpload(imgData))
      } else if (imgData && userInfo) {
        const filename = userInfo.firstName.trim()
          ? `startrek-summary-${userInfo.firstName.trim()}`
          : 'startrek-summary'

        saveAs(imgData, `${filename}.jpeg`)
      }
    } catch (error) {
      Raven.captureException(error)
    }
  }, [dispatch, userInfo, statistics])

  return (
    userInfo &&
    statistics && (
      <div className="free-information">
        <Button
          disabled={isLoadingPublish}
          className="free-information__download"
          onClick={downloadSummary}
          color="link"
        >
          <Icon iconName="download" />
        </Button>
        <div className="free-information__render" id="startrek-summary">
          <figure className="free-information__avatar">
            <img
              src={freeInfoAvatar || avatar}
              alt={`${userInfo.firstName} ${userInfo.lastName}`}
            />
          </figure>
          <div className="free-information__name">
            <div>{userInfo.firstName}</div>
            <div>{userInfo.lastName}</div>
          </div>
          <ul className="free-information__social">
            <li>
              {userInfo.myInstagram ? (
                <a
                  href={`https://www.instagram.com/${userInfo.myInstagram}`}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    className="free-information__social--image"
                    src={inImage}
                    alt={userInfo.myInstagram}
                  />
                  {userInfo.myInstagram}
                </a>
              ) : (
                '-'
              )}
            </li>
            <li>
              {userInfo.myTg ? (
                <a href={`https://t.me/${userInfo.myTg}`} rel="noreferrer" target="_blank">
                  <img
                    className="free-information__social--image"
                    src={tgImage}
                    alt={userInfo.myTg}
                  />
                  {userInfo.myTg}
                </a>
              ) : (
                '-'
              )}
            </li>
            <li>
              {userInfo.myVk ? (
                <a href={`https://vk.com/${userInfo.myVk}`} rel="noreferrer" target="_blank">
                  <img
                    className="free-information__social--image"
                    src={vkImage}
                    alt={userInfo.myVk}
                  />
                  {userInfo.myVk}
                </a>
              ) : (
                '-'
              )}
            </li>
          </ul>
          <div className="free-information__total">
            <div>Общий чек MATRIX Reloaded</div>
            <strong>
              {formatterNumber
                .format(statistics.totalSum + statistics.myInviterIncome || 0)
                .replace('₽', 'RUB')}
            </strong>
          </div>
        </div>
      </div>
    )
  )
}

export default Summary
