import React from 'react'
import PropTypes from 'proptypes'
import classNames from 'classnames'

export const colors = ['primary', 'secondary', 'success', 'danger', 'disabled', 'base']
export const sizes = ['xs', 'sm', 'lg', 'xl', 'xl2', 'xl3', 'xl4', 'xl5', 'base']

// HOC that adds a bunch of props and maps them to classes
const withColorSizeStyle = Component => origProps => {
  const { color, size, primary, secondary, success, danger, fill, outline, component, className, xs, sm, lg, xl, xl2, xl3, xl4, xl5, ...props } = origProps
  const c = colors.filter(c => origProps[c]).pop() || color
  const s = sizes.filter(s => origProps[s]).pop() || size

  const classes = {
    'text-white': fill,
    [`bg-${c}`]: fill,
    [`hover:bg-${c}-dark`]: fill && !origProps.disabled,
    [`text-${c}`]: !fill,
    'bg-transparent': !fill,
    [`hover:text-${c}-dark`]: !fill && !origProps.disabled,
    border: outline,
    [`border-${c}`]: outline
  }

  return <Component {...props} className={classNames(`text-${s}`, classes, className)} />
}

withColorSizeStyle.propTypes = {
  // any other classes you want to override with
  className: PropTypes.string,

  // fill the button (best to not use with outline)
  fill: PropTypes.bool,

  // outline the button (best to not use with fill)
  outline: PropTypes.bool,

  // Is the button disabled?
  disabled: PropTypes.bool,

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

withColorSizeStyle.defaultProps = {
  size: 'base',
  color: 'base'
}

export default withColorSizeStyle
