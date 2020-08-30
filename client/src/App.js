import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./pages/Game";
import Landing from "./pages/Landing";
import Login from "./pages/Login-SignUp";
import Pokedex from "./pages/Pokedex";

function App() {

  return (
    <Router>
      <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/play" component={Game} />
            <Route path="/pokedex" component={Pokedex} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;