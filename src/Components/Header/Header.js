import React from 'react'
import {Container} from "@material-ui/core";
import '../../Assets/fonts/fonts.css'
import Logo from "../../Assets/images/logo.svg"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const ariaLabel = { 'aria-label': 'description' };

export const Header = () => {
  return (
      <div className="header">

          <div className="header-logo">
            <img className="header-logo__logo" src={Logo} alt="Logo"/>

          </div>
          <div className="header-input">
            <input type="text" id="header-input__text" defaultValue="Поиск по статьям"/>
          </div>

      </div>
  )
}



