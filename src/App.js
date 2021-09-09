import React from 'react'
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Container} from '@material-ui/core';
import {WebSecurityContent} from "./Components/WebSecurityContent/WebSecurityContent";
import {HeaderItem} from "./Components/Header/HeaderItem";
import {PATH} from "./path";
import {InformationSecurityContent} from "./Components/InformationSecurityContent/InformationSecurityContent";

function App() {
  return (
      <>
        <BrowserRouter>
          <HeaderItem/>
          <Switch>
            <Route exact path={PATH.security}>
              {WebSecurityContent}
            </Route>
            <Route exact path={PATH.information}>
              {InformationSecurityContent}
            </Route>
            <Route exact path={PATH.information}>
              {InformationSecurityContent}
            </Route>
            <Redirect to={PATH.security}/>
          </Switch>
          <Container>
          </Container>
        </BrowserRouter>
      </>
  )
}

export default App;




