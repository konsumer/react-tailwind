import React from 'react'
import classNames from 'classnames'
import PropTypes from 'proptypes'

const colors = ['primary', 'secondary', 'success', 'danger', 'disabled', 'base']
const sizes = ['xs', 'sm', 'lg', 'xl', 'xl2', 'xl3', 'xl4', 'xl5', 'base']

const Button = (origProps) => {
  const { color, size, primary, secondary, success, danger, fill, outline, disabled, component, className, xs, sm, lg, xl, xl2, xl3, xl4, xl5, ...props } = origProps
  const Component = component
  const c = colors.filter(c => origProps[c]).pop() || color
  const s = sizes.filter(s => origProps[s]).pop() || size

  const classes = {
    'text-white': fill,
    [`bg-${c}`]: fill,
    [`hover:bg-${c}-dark`]: fill && !disabled,
    [`text-${c}`]: !fill,
    'bg-transparent': !fill,
    [`hover:text-${c}-dark`]: !fill && !disabled,
    border: outline,
    [`border-${c}`]: outline
  }

  return (
    <Component
      className={classNames('py-2', 'px-4', 'rounded', `text-${s}`, classes, className)}
      disabled={disabled}
      {...props}
    />
  )
}

// below here is prop-documentation

Button.propTypes = {
  // any other classes you want to override with
  className: PropTypes.string,

  // fill the button (best to not use with outline)
  fill: PropTypes.bool,

  // outline the button (best to not use with fill)
  outline: PropTypes.bool,

  // Is the button disabled?
  disabled: PropTypes.bool,

  // alternate component to use
  component: PropTypes.node,

  // the color (if you like this better than a color-prop)
  color: PropTypes.oneOf(colors),

  // the size (if you like this better than a size-prop)
  size: PropTypes.oneOf(sizes),

  // Color: Primary
  primary: PropTypes.bool,

  // Color: Secondary
  secondary: PropTypes.bool,

  // Color: Success
  success: PropTypes.bool,

  // Color: Danger
  danger: PropTypes.bool,

  // Size: Extra-small
  xs: PropTypes.bool,

  // Size: Small
  sm: PropTypes.bool,

  // Size: Large
  lg: PropTypes.bool,

  // Size: Extra-large
  xl: PropTypes.bool,

  // Size: Extra-extra-large
  xl2: PropTypes.bool,

  // Size: Extra-extra-extra-large
  xl3: PropTypes.bool,

  // Size: Extra-extra-extra-extra-large
  xl4: PropTypes.bool,

  // Size: Extra-extra-extra-extra-extra-large
  xl5: PropTypes.bool
}

Button.defaultProps = {
  className: 'Button',
  fill: false,
  outline: false,
  disabled: false,
  component: 'button',
  size: 'base',
  color: 'base',
  primary: false,
  secondary: false,
  success: false,
  danger: false,
  xs: false,
  sm: false,
  lg: false,
  xl: false,
  xl2: false,
  xl3: false,
  xl4: false,
  xl5: false
}

export default Button
