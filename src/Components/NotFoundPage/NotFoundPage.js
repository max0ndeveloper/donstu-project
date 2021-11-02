import React from "react";
import {BrowserRouter, Route, Switch, Redirect, HashRouter} from 'react-router-dom';
import NotFound from "../NotFound/NotFound";


const NotFoundPage = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="*" exact component={NotFound}/>
        </Switch>
      </BrowserRouter>
  )
}

export default NotFoundPage;
