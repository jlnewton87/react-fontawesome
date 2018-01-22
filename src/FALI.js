import React from 'react'

const fali = (props) => {
  let className = []
  return (
    <li className={className.join(' ')}>{ props.children }</li>
  )
}

export default fali