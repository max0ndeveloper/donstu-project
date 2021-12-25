import React from 'react'
import Logo from "../../Assets/images/logo.svg"
import {useHistory} from "react-router-dom";



const Login = () => {

  const history = useHistory();

  const onclickHandler = () => {
    history.push('/registration')
  }

  const goBack = () => {
    history.push('')
  }

  console.log(history)

  return (
      <div className="wrapper">
        <div className="login-container">
          <div className="login__background">
          </div>
          <div className="login">
            <div className="login__logo" onClick={goBack}>
              <img src={Logo} className="login__logo-img" alt=""/>
            </div>
            <div className="login-header">
              <p className="login-header__text">
                Вход в аккаунт
              </p>
            </div>
            <form action="" className="form-login">
              <input className="form-login__input" name="Login" type="text" placeholder="Логин"/>
              <hr/>
              <input className="form-login__input" name="Password" type="password" placeholder="Пароль"/>
              <hr/>
              <div className="control-group">

                <label className="control control-checkbox">
                  Запомнить пароль
                  <input type="checkbox"/>
                  <div className="control_indicator"></div>
                </label>
              </div>
            </form>
            <div className="login__button">
              <p className="login__button-text">
                Войти
              </p>
            </div>
            <div className="checkAccount">
              <p className="checkAccount-text">
                Ещё нет аккаунта?
              </p>
              <p className="checkAccount__Login" onClick={onclickHandler}>Создать</p>
            </div>
          </div>
        </div>
      </div>

  )
}
export default Login;
