import React from 'react'
import Logo from "../../Assets/images/logo.svg"
import {useHistory} from "react-router-dom";



const Registration = () => {

  const history = useHistory();

  const onclickHandler = () => {
    history.push('/login')
  }

  const goBack = () => {
    history.push('')
  }

  console.log(history)

  return (
      <div className="wrapper">
        <div className="registration-container">
          <div className="registration__background">
          </div>
            <div className="registration">
              <div className="registration__logo" onClick={goBack}>
                <img src={Logo} className="registration__logo-img" alt=""/>
              </div>
              <div className="registration-header">
                <p className="registration-header__text">
                  Создать аккаунт
                </p>
              </div>
              <form action="" className="form-registration">
                <input className="form-registration__input" name="Name" type="text" placeholder="Имя"/>
                <hr/>
                <input className="form-registration__input" name="Surname" type="text" placeholder="Фамилия"/>
                <hr/>
                <input className="form-registration__input" name="Email" type="text" placeholder="Почта"/>
                <hr/>
                <input className="form-registration__input" name="Login" type="text" placeholder="Логин"/>
                <hr/>
                <input className="form-registration__input" name="Password" type="password" placeholder="Пароль"/>
                <hr/>
              </form>
              <div className="registration__button">
                <p className="registration__button-text">
                  Создать
                </p>
              </div>
              <div className="checkAccount">
                <p className="checkAccount-text">
                  Уже есть аккаунт?
                </p>
                <p className="checkAccount__Login" onClick={onclickHandler}>Войти</p>
              </div>
            </div>
          </div>
        </div>

  )
}
export default Registration;
