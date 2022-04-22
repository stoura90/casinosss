import React, { useState, useEffect } from 'react'
import './CountdownTimer.css'
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtils'
import PropTypes from 'prop-types'

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
}

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [countdownTimestampMs])

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
  }

  return (
    <div className="countdown-timer">
      <span>{remainingTime.days}</span>
      <span>Дней</span>
      <span className="two-numbers">{remainingTime.hours}</span>
      <span>:</span>
      <span className="two-numbers">{remainingTime.minutes}</span>
      <span>:</span>
      <span className="two-numbers">{remainingTime.seconds}</span>
    </div>
  )
}
CountdownTimer.propTypes = {
  countdownTimestampMs: PropTypes.string.isRequired,
}
export default CountdownTimer
