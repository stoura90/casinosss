import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// eslint-disable-next-line react/prop-types
const Star = ({ status, size, onClick }) => {
  return (
    <li onClick={onClick} className={classnames({ interactive: onClick })}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M10.2384 0.67506C10.331 0.436131 10.669 0.436131 10.7616 0.67506L13.3412 7.3307C13.381 7.43342 13.4773 7.50334 13.5873 7.50946L20.7143 7.90608C20.9701 7.92032 21.0746 8.24184 20.876 8.40374L15.3432 12.9138C15.2578 12.9834 15.2211 13.0965 15.2492 13.203L17.0744 20.1038C17.1399 20.3515 16.8664 20.5502 16.6511 20.4113L10.6521 16.5431C10.5595 16.4834 10.4405 16.4834 10.3479 16.5431L4.34893 20.4113C4.13357 20.5502 3.86007 20.3515 3.92559 20.1038L5.75076 13.203C5.77893 13.0965 5.74217 12.9834 5.65678 12.9138L0.12402 8.40374C-0.074599 8.24184 0.0298699 7.92032 0.285721 7.90608L7.41274 7.50946C7.52274 7.50334 7.61898 7.43342 7.65879 7.3307L10.2384 0.67506Z"
          fill={status ? '#00c3e1' : '#8083e6'}
        />
      </svg>
    </li>
  )
}

Star.propTypes = {
  size: PropTypes.number,
  onClick: PropTypes.func,
}

Star.defaultProps = {
  size: 21,
}

// eslint-disable-next-line react/prop-types
function StarRating({ max, rating, matrix, size, rtl, onClick, className }) {
  const array =
    matrix ||
    Array(max)
      .fill()
      .map((_, i) => i + 1 <= rating)

  const render = (value, index) => (
    <Star
      key={index.toString()}
      onClick={value && onClick ? () => onClick(value, index) : undefined}
      status={value}
      size={size}
    />
  )

  return (
    <ul
      className={classnames('star-rating', className, {
        'star-rating--rtl': rtl,
      })}
    >
      {array.map(render)}
    </ul>
  )
}

StarRating.propTypes = {
  max: PropTypes.number,
  size: PropTypes.number,
  matrix: PropTypes.array,
  rating: PropTypes.number,
  className: PropTypes.string,
  rtl: PropTypes.bool,
}

StarRating.defaultProps = {
  max: 5,
  size: 21,
  rtl: false,
  matrix: null,
  className: '',
  rating: 0,
}

export default StarRating
