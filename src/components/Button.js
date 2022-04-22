import React from 'react'
import { Button as ButtonComponent, Spinner } from 'reactstrap'
import classnames from 'classnames'

// eslint-disable-next-line react/prop-types
const Button = ({ children, loading, block, ...rest }) => (
  <ButtonComponent {...rest} block={block}>
    {!(block && !loading) && (
      <Spinner
        className={classnames({
          'position-relative': true,
          'button-style': !block,
          visible: loading,
          invisible: !loading,
        })}
        size="sm"
      />
    )}
    {!(block && loading) && (
      <span
        className={classnames({
          invisible: loading,
          visible: !loading,
          'span-style': !block,
        })}
      >
        {children}
      </span>
    )}
  </ButtonComponent>
)

export default Button
