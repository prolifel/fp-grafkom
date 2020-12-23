import React from 'react'
import Game from './Game';
import Menu from './Menu';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={()=><Menu title="ngewe"/>} />
        <Route exact path={"/game"} component={Game} />
      </Switch>
    </Router>
  )
}
