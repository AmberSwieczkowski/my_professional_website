import React from 'react'

const Button = ({onClick, className, onMouseEnter, children}) => {
  return (
    <button onClick={onClick} type='button' className={className} onMouseEnter={onMouseEnter}>
    {children}
  </button>
  )
}

export default Button
