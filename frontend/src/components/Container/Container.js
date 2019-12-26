import React from 'react'
import style from './container.scss'

const Container = ({ children }) => <div className={style.container}>
    {children}
</div>

export default Container