import React from 'react'
import closeIcon from '../../../../../scss/media/close.ac2aaa1a.svg'
import styles from './BuyStatusModal.module.scss'

// eslint-disable-next-line react/prop-types
function BuyStatusModal({ status, onClose }) {
  return (
    // eslint-disable-next-line react/prop-types
    <div
      className={`${styles.BuyStatusModal} ${
        // eslint-disable-next-line react/prop-types
        status.type === 'error' && styles.isError
      }`}
    >
      <div className={styles.header}>
        <button type="button" onClick={onClose} className={styles.close}>
          <img src={closeIcon} alt="Close" />
        </button>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{status.message}</h3>
      </div>
    </div>
  )
}

export default BuyStatusModal
