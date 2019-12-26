import React from 'react'
import style from './row.scss'

const Row = ({ children }) => <div className={style.row}>
    {children}
</div>

export default Row