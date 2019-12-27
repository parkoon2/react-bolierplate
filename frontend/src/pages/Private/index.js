import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

// Style
import style from './private.scss'

// Components
import Button from "../../components/Button"
import { fetchLogout } from '../../actions/user'
import fakeAuth from '../../helper/auth'

const Private = () => {

    const history = useHistory()
    const user = useSelector(state => state.user, [])
    useEffect(() => {
        if (!user.logged) {
            fakeAuth.signout()
            history.push('/login')
        }

    }, [user.logged])

    return <div className={style.banner}>
    </div>
}

export default Private