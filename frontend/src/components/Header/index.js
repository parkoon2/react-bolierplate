import React from 'react'

import style from './header.scss'

// Components
import LinkButton from '../LinkButton'

const Header = () => <header className={style.header}>
    <div className="logo">
        <h1>REAL CLASS</h1>
    </div>
    <div className={style.auth}>
        <ul>
            <li>
                <LinkButton to="register" title="회원가입" />
            </li>
            <li>
                <LinkButton to='/login' title="로그인" color="green" />
            </li>
        </ul>
    </div>
</header>

export default Header