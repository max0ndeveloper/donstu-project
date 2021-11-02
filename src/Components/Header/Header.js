import React from 'react'
import {Container} from "@material-ui/core";
import '../../Assets/fonts/fonts.css'
import Logo from "../../Assets/images/logo.svg"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {NavLink, useHistory, useParams} from "react-router-dom";




export const Header = () => {
  const history = useHistory();
  console.log(history)

  const goBack = () => {
    history.push(`/`)
  }

  return (
      <div className="header">
          <div className="header-logo" onClick={goBack}>
            <img className="header-logo__logo" src={Logo} alt="Logo"/>

          </div>
          <div className="header-input">
            <input type="text" id="header-input__text" placeholder="Поиск по статьям"/>
          </div>
        <div className="header-button">
          <div className="header-button_reg">
            <p className="header-button_reg-text">Регистрация</p>
          </div>
          <div className="header-button_log">
            <p className="header-button_log-text">
              Вход
            </p>
          </div>
        </div>

      </div>
  )
}



