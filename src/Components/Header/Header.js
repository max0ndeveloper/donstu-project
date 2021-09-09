import React from 'react'
import {NavLink} from 'react-router-dom'
import {AppBar, Toolbar} from "@material-ui/core";
import {PATH} from "../../path";
import {makeStyles} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";
import './Header.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,

  },

}));
export const Header = () => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <>
              <Container>
                <nav className="header-nav">
                  <ul className="header-nav__menu">
                    <li className="header-nav__menu-items">
                      <NavLink
                          className="header-nav__menu-link"
                          activeClassName="header-nav__menu-link--active"
                          to={PATH.security}
                      >
                        Web Security
                      </NavLink>

                    </li>
                    <li className="header-nav__menu-items">
                      <NavLink
                          className="header-nav__menu-link"
                          activeClassName="header-nav__menu-link--active"
                          to={PATH.information}
                      >
                        Information Security
                      </NavLink>
                    </li>
                    <li className="header-nav__menu-items">
                      Security Lessons
                    </li>
                  </ul>
                </nav>
              </Container>
            </>
          </Toolbar>
        </AppBar>
      </div>
  );
}



