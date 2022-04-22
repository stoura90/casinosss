import React, { useState } from 'react'
import styles from './Select.module.scss'

// eslint-disable-next-line react/prop-types
export default function Select({
  // eslint-disable-next-line react/prop-types
  values = [],
  // eslint-disable-next-line react/prop-types
  defaultValue,
  // eslint-disable-next-line react/prop-types
  placeholder,
  // eslint-disable-next-line react/prop-types
  className,
  // eslint-disable-next-line react/prop-types
  onChange,
}) {
  const [currentValue, setCurrentValue] = useState(defaultValue || placeholder)
  const [isOpened, setIsOpened] = useState(false)

  const toggleOptions = () => {
    isOpened ? setIsOpened(false) : setIsOpened(true)
  }

  return (
    <div className={`${styles.Select} ${className}`}>
      <div className={styles.currentValue} onClick={toggleOptions}>
        {currentValue}
        <svg
          className={styles.arrow}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21 15"
        >
          <path
            d="M11 14l9.8-11.6c.3-.4.3-1 0-1.4a.7.7 0 00-1.2 0l-9.1 11L1.4 1A.7.7 0 00.2 1a1 1 0 00-.2.7c0 .3 0 .5.2.7L10 14l.6.3.6-.3z"
            fill="#fff"
          />
        </svg>
      </div>
      <div className={`${styles.options} ${isOpened ? styles.opened : ''}`} onClick={toggleOptions}>
        <div className={styles.wrapper}>
          {values.map(({ label, value }, id) => (
            <div
              key={id}
              className={`${styles.option} ${currentValue === label ? styles.active : ''}`}
              onClick={() => {
                onChange && onChange(value)
                setCurrentValue(label)
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
