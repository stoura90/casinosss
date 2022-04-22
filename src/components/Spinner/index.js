import React from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import classNames from 'classnames'

const settings = {
  type: 'BallTriangle',
  color: '#fff',
  height: 80,
  width: 80,
}

function Spinner({ children, size, isLoading }) {
  const spinnerClass = classNames('spinner-inner', size ? `spinner-${size}` : false)
  return (
    <>
      {!isLoading ? (
        children
      ) : (
        <div className={spinnerClass}>
          <Loader {...settings} />
        </div>
      )}
    </>
  )
}

Spinner.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  isLoading: PropTypes.bool,
  size: PropTypes.string,
}

Spinner.defaultProps = {
  isLoading: false,
  children: null,
  size: '',
}

export default Spinner
