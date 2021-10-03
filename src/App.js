import React from 'react'
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Container} from '@material-ui/core';
import WebSecurityContent from "./Components/WebSecurityContent/WebSecurityContent";
import {Header} from "./Components/Header/Header";
import {PATH} from "./path";
import {InformationSecurityContent} from "./Components/InformationSecurityContent/InformationSecurityContent";
import {Main} from "./Components/Main/Main";
///
function App() {
  return (
      <div className="app">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path={PATH.main}>
              {Main}
            </Route>
            <Route exact path={PATH.security}>
              <WebSecurityContent/>
            </Route>
            <Route exact path={PATH.information}>
              {InformationSecurityContent}
            </Route>
            <Route exact path={PATH.information}>
              {InformationSecurityContent}
            </Route>
            <Redirect to={PATH.main}/>
          </Switch>
          <Container>
          </Container>
        </BrowserRouter>
      </div>
  )
}

export default App;




