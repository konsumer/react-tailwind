import React from 'react'
import PropTypes from 'proptypes'
import classNames from 'classnames'

import withColorSizeStyle from './withColorSizeStyle'

const Button = ({ component, className, ...props }) => {
  const Component = component
  return (
    <Component
      className={classNames('py-2', 'px-4', 'rounded', className)}
      {...props}
    />
  )
}

Button.propTypes = {
  // alternate component to use
  component: PropTypes.node,
  ...withColorSizeStyle.propTypes
}

Button.defaultProps = {
  className: 'Button',
  component: 'button',
  ...withColorSizeStyle.defaultProps
}

export default withColorSizeStyle(Button)
