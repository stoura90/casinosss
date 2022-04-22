import React from 'react'
import styles from './Checkbox.module.scss'

// eslint-disable-next-line react/prop-types
export default function Checkbox({ className, label, field, form, ...props }) {
  return (
    <label className={`${styles.Checkbox} ${className}`}>
      <input {...field} {...props} />
      <span className={styles.checkboxControl}>
        <svg width="14" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 6.5l4.5 4 7-9.5"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={styles.label}>{label}</span>
    </label>
  )
}
