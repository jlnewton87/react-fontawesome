import React from 'react'

const faul = (props) => {
  const { className } = props

  let classNames = ['fa-ul']

  className && classNames.push(className)

  return (
    <ul className={classNames.join(' ')}>
      { props.children }
    </ul>
  )
}

export default faul