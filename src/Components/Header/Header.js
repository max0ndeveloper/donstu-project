import React from 'react'
import {Container} from "@material-ui/core";
import './Header.css'
import Logo from "../../Assets/images/logo.svg"

const ariaLabel = { 'aria-label': 'description' };

export const Header = () => {
  return (
      <div className="header">
        <Container>
          <div className="header-logo">
            <img className="header-logo__logo" src={Logo} alt="Logo"/>
          </div>
        </Container>
      </div>
  )
}



