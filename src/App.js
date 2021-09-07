import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import {Navigation} from "./Components/Navigation/Navigation";
import './Components/Navigation/Navigation.css'

function App() {
  return (
      <div className="container">
        <Navigation/>
      </div>
  )
}

export default App;
