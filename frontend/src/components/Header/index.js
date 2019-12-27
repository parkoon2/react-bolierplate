import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Style
import style from './header.scss'

// Components
import LinkButton from '../LinkButton'

// Actions
import { fetchLogout } from '../../actions/user'

const Header = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    function logout() {
        if (confirm('로그아웃 하시겠습니까?')) {
            dispatch(fetchLogout())
        }
    }

    return (
        <header className={style.header}>
            <div className="logo">
                <h1>REAL CLASS</h1>
            </div>
            <div className={style.auth}>
                <ul>
                    {user.logged && <li>{user.name}님 환영합니다.</li>}
                    <li>
                        {user.logged ? <LinkButton onClick={logout} title="로그아웃" color="green" /> : <LinkButton to='/login' title="로그인" color="green" />}
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header