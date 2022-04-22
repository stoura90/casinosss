import React from 'react'
import { FormText } from 'reactstrap'
import InputMask from 'react-input-mask'

import styles from './Input.module.scss'

// eslint-disable-next-line react/prop-types
function InputPhone({ className, field, form, ...props }) {
  const isInvalid =
    // eslint-disable-next-line react/prop-types
    form && form.errors && form.touched[field.name] && form.errors[field.name]

  return (
    <div className={`${styles.Input} ${isInvalid ? styles.invalid : ''} ${className}`}>
      <InputMask
        {...field}
        type="tel"
        mask="+ 9999999999999"
        maskChar=""
        onChange={(e) => {
          const val = e.target.value.replace(/\D/g, '')
          // eslint-disable-next-line react/prop-types
          form.setFieldValue('phone', val)
        }}
      />
      {/* eslint-disable-next-line react/prop-types */}
      {props.placeholder && (
        // eslint-disable-next-line react/prop-types
        <span className={styles.placeholder}>{props.placeholder}</span>
      )}
      {isInvalid && <FormText color="danger">{isInvalid}</FormText>}
    </div>
  )
}

export default InputPhone
