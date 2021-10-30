import React from 'react'
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Container} from '@material-ui/core';
import {Header} from "./Components/Header/Header";
import {PATH} from "./path";
import Main from "./Components/Main/Main";
import NotFound from "./Components/NotFound/NotFound";
import Article from "./Components/Article/Article"

function App() {
  return (
      <div className="app">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/articles/:_id/:header" exact component={Article}/>
           <Route path="*" exact component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
  )
}

export default App;




