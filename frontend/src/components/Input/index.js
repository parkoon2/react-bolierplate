import React from 'react'
import style from './input.scss'

const Input = ({ ...rest }) => {

    return (
        <input className={style.input} {...rest} />
    )
}

export default Input