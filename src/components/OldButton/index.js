import React from 'react'
import styles from './Button.module.scss'

export default function Button({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  size,
  // eslint-disable-next-line react/prop-types
  color,
  // eslint-disable-next-line react/prop-types
  className = '',
  ...props
}) {
  return (
    <button className={`${styles.Button} ${styles[size]} ${styles[color]} ${className}`} {...props}>
      {children}
    </button>
  )
}
