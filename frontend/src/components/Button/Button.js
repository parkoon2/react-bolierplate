import React from 'react'
import style from './button.scss'
import classNames from 'classnames/bind'

const cn = classNames.bind(style)

const Button = ({ children, disabled, ...rest }) => <button {...rest} disabled={disabled} className={cn('button', { disabled })}>
    {children}
</button>

export default Button