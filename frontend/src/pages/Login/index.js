import React from 'react'

// Components
import Container from '../../components/Container'
import Row from '../../components/Row'
import Button from '../../components/Button'
import Input from '../../components/Input'

import style from './login.scss'


const LoginPage = () => {
    return (
        <Container>
            <div className={style.login}>
                <div className={style.login_form}>

                    <h1>로그인</h1>
                    <p>Good evening! Webcome back.</p>

                    <p>

                        <Input type="text" placeholder="이메일 주소를 입력하세요" />
                    </p>

                    <p>
                        <Input type="password" placeholder="비밀번호를 입력하세요" />

                    </p>
                    <div className={style.form_btn}>
                        <Button disabled color="gray">로그인</Button>

                    </div>
                    <div className={style.form_btn}>
                        <Button color="green">회원가입</Button>
                    </div>
                </div>
                <div className={style.login_photo}>
                    <img class="david" src={require('../../assets/images/bg_account_david.png')} alt="Work smarter, Not harder. 최선을 다하는 강의보다 최고의 강의를 합니다."></img>
                </div>
            </div>

        </Container>
    )

}

export default LoginPage