import React from 'react'
import Game from './Game';
// import Menu2 from './Menu2'
import Menu from './Menu';
// import index2 from './index2'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={()=><Menu title="Start Game"/>} />
        {/* <Route exact path={"/"} component={()=><index2 title="Start Game"/>} /> */}
        {/* <Route exact path={"/"} component={()=><Menu2 />} /> */}
        <Route exact path={"/game"} component={Game} />
      </Switch>
    </Router>
  )
}
