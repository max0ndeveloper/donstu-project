import React from 'react'
import './App.css';
import {BrowserRouter, Route, Switch, Redirect, HashRouter} from 'react-router-dom';
import {Container} from '@material-ui/core';
import {Header} from "./Components/Header/Header";
import {PATH} from "./path";
import Main from "./Components/Main/Main";
import Article from "./Components/Article/Article"
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login"
import NotFound from "./Components/NotFound/NotFound";


function App() {
  return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/articles/:_id" component={Article}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/login" component={Login}/>
            {/*<Route path="/articles/" component={ArticlePage}/>*/}
            {/*<Route path="/articles/:_id" exact component={Article}/>*/}
            <Route path="*" exact component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
  )
}

export default App;




