import React from 'react'
import styles from './Input.module.scss'

// eslint-disable-next-line react/prop-types
export default function Input({ className, field, form, ...props }) {
  // eslint-disable-next-line react/prop-types
  const isInvalid =
    // eslint-disable-next-line react/prop-types
    form && form.errors && form.touched[field.name] && form.errors[field.name]

  return (
    <div className={`${styles.Input} ${isInvalid ? styles.invalid : ''} ${className}`}>
      <input {...field} {...props} />
      {/* eslint-disable-next-line react/prop-types */}
      {props.placeholder && (
        // eslint-disable-next-line react/prop-types
        <span className={styles.placeholder}>{props.placeholder}</span>
      )}
      {isInvalid && <p className={styles.errorMessage}>{isInvalid}</p>}
    </div>
  )
}
