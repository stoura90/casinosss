import React, { useState } from 'react'
import styles from './SearchSelect.module.scss'

// eslint-disable-next-line react/prop-types
export default function SearchSelect({
  // eslint-disable-next-line react/prop-types
  values,
  // eslint-disable-next-line react/prop-types
  placeholder,
  // eslint-disable-next-line react/prop-types
  className,
  // eslint-disable-next-line react/prop-types
  onChange,
  // eslint-disable-next-line react/prop-types
  onInput,
}) {
  const [currentValue, setCurrentValue] = useState('')

  const changeCurrentValue = ({ target: { value } }) => {
    setCurrentValue(value)
    onInput && onInput(value)
  }

  const onChangeHandler = ({ label, value }) => {
    setCurrentValue(label)
    onChange && onChange(value)
  }

  return (
    <div className={`${styles.SearchSelect} ${className}`}>
      <input
        type="text"
        value={currentValue}
        placeholder={placeholder}
        onChange={changeCurrentValue}
      />
      <svg
        className={styles.searchIcon}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M19.878 18.7l-5.81-5.81a7.876 7.876 0 001.765-4.973C15.833 3.55 12.282 0 7.917 0 3.55 0 0 3.551 0 7.917c0 4.365 3.551 7.916 7.917 7.916a7.876 7.876 0 004.973-1.765l5.81 5.81a.417.417 0 00.589 0l.589-.59a.417.417 0 000-.588zM7.917 14.167a6.257 6.257 0 01-6.25-6.25 6.257 6.257 0 016.25-6.25 6.257 6.257 0 016.25 6.25 6.257 6.257 0 01-6.25 6.25z"
          fill="#fff"
        />
      </svg>
      {/* eslint-disable-next-line react/prop-types */}
      <div
        className={`${styles.variants} ${
          // eslint-disable-next-line react/prop-types
          values.length > 0 ? styles.opened : ''
        }`}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {values.map(({ label, value }, index) => (
          <div
            key={index}
            className={styles.variants}
            onClick={() => {
              onChangeHandler({ label, value })
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}
