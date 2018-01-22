import React from 'react'

const fali = (props) => {
  const {
    border,
    cssModule,
    className,
    fixedWidth,
    flip,
    inverse,
    name,
    pulse,
    rotate,
    size,
    spin,
    stack,
    tag = 'span',
    ariaLabel,
    ...props
  } = props

  const classNames = []

  if (cssModule) {
    classNames.push(cssModule['fa'])
    classNames.push(cssModule['fa-li'])
    classNames.push(cssModule['fa-' + name])
    size && classNames.push(cssModule['fa-' + size])
    spin && classNames.push(cssModule['fa-spin'])
    pulse && classNames.push(cssModule['fa-pulse'])
    border && classNames.push(cssModule['fa-border'])
    fixedWidth && classNames.push(cssModule['fa-fw'])
    inverse && classNames.push(cssModule['fa-inverse'])
    flip && classNames.push(cssModule['fa-flip-' + flip])
    rotate && classNames.push(cssModule['fa-rotate-' + rotate])
    stack && classNames.push(cssModule['fa-stack-' + stack])
  } else {
    classNames.push(cssModule['fa'])
    classNames.push(cssModule['fa-li'])
    classNames.push(cssModule['fa-' + name])
    size && classNames.push(cssModule['fa-' + size])
    spin && classNames.push(cssModule['fa-spin'])
    pulse && classNames.push(cssModule['fa-pulse'])
    border && classNames.push(cssModule['fa-border'])
    fixedWidth && classNames.push(cssModule['fa-fw'])
    inverse && classNames.push(cssModule['fa-inverse'])
    flip && classNames.push(cssModule['fa-flip-' + flip])
    rotate && classNames.push(cssModule['fa-rotate-' + rotate])
    stack && classNames.push(cssModule['fa-stack-' + stack])
  }

  className && classNames.push(className)

  return (
    <li className={classNames.join(' ')}>{ props.children }</li>
  )
}

export default fali