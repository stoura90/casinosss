import React from 'react'
import closeIcon from '../../../../../scss/media/close.ac2aaa1a.svg'
import styles from './BuyMatrix.module.scss'
import Button from '../../../../../components/OldButton'

// eslint-disable-next-line react/prop-types
function BuyMatrixModal({ status, onSubmit, matrixLevel, onClose }) {
  return (
    <div className={styles.BuyMatrixModal}>
      <div className={styles.header}>
        <button type="button" onClick={onClose} className={styles.close}>
          <img src={closeIcon} alt="Close" />
        </button>
        <h3>Подтверждение покупки матрицы</h3>
      </div>
      <div className={styles.content}>
        {matrixLevel > 1 ? (
          <p>
            Перед покупкой LVL{matrixLevel} убедитесь, что у вас не идёт накопление в LVL
            {matrixLevel - 1}. Если накопление уже началось вы не получите бонусы за прохождение
            второго круга.
          </p>
        ) : (
          <p>Вы действительно хотите купить матрицу?</p>
        )}
      </div>
      <div className={styles.footer}>
        <Button
          onClick={onSubmit}
          /* eslint-disable-next-line react/prop-types */
          disabled={status.type === 'pending'}
          color="perrywinkle"
          className="w-100"
          size="medium"
        >
          Подтвердить
        </Button>
      </div>
    </div>
  )
}

export default BuyMatrixModal
