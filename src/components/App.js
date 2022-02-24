import React from "react";
import MemoryControl from "./MemoryControl";
import Header from "./Header";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <div className="container shadow">
            <MemoryControl />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;