import React from 'react'
import './App.css';
import {BrowserRouter, Route, Switch, Redirect, HashRouter} from 'react-router-dom';
import {Container} from '@material-ui/core';
import {Header} from "./Components/Header/Header";
import {PATH} from "./path";
import Main from "./Components/Main/Main";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import Article from "./Components/Article/Article"

function App() {
  return (
      <div className="app">
        {/*<Header/>*/}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/articles/:_id/:header" exact component={Article}/>
            <NotFoundPage/>
          </Switch>
        </BrowserRouter>
      </div>
  )
}

export default App;




