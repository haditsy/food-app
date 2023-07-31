import React from 'react'

const Button = ({children, onClick, disabled, variant, size, ...restProps}) => {
  return (
    <button onClick={onClick} disabled={disabled} {...restProps}>{children}</button>
  )
}

export default Button