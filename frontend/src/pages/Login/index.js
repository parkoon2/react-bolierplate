import React, { useState } from 'react'

// Helper
import { loginValidator } from '../../helper/validator'

// Components
import Container from '../../components/Container'
import Row from '../../components/Row'
import Button from '../../components/Button'
import Input from '../../components/Input'

import style from './login.scss'
import useForm from '../../hook/useForm'


const LoginPage = () => {

    const login = () => {
        alert('login!')
    }

    const { values, errors, handleChange, handleSubmit } = useForm(login, loginValidator)

    return (
        <Container>
            <div className={style.login}>
                <div className={style.login_form}>

                    <h1>로그인</h1>
                    <p>Good evening! Webcome back.</p>

                    <div className={style.form_input}>
                        <Input name="email" onChange={handleChange} value={values.email || ''} type="text" placeholder="이메일 주소를 입력하세요" />
                        {errors.email && <span className={style.input_error}>{errors.email}</span>}
                    </div>

                    <div className={style.form_input}>
                        <Input name="password" onChange={handleChange} value={values.password || ''} type="text" placeholder="패스워드를 입력하세요" />
                        {errors.password && <span className={style.input_error}>{errors.password}</span>}
                    </div>



                    <div className={style.form_btn}>
                        <Button onClick={handleSubmit} /*disabled*/ color="gray">로그인</Button>
                    </div>
                    <div className={style.form_btn}>
                        <Button color="green">회원가입</Button>
                    </div>
                </div>
                <div className={style.login_photo}>
                    <img class="david" src={require('../../assets/images/bg_account_david.png')} alt="Work smarter, Not harder. 최선을 다하는 강의보다 최고의 강의를 합니다."></img>
                    <span className={style.photo_outline}></span>

                </div>
            </div>

        </Container>
    )

}

export default LoginPage