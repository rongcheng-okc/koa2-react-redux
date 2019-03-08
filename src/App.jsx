import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch} from "react-router-dom";

import ComponentA from "../components/a";
import ComponentB from "../components/b";
import ComponentD from "../components/d";

import ComponentF from "../containers/f"

import HOC from "../components/hoc/Component"

class App extends Component {
  render() {
    return (
        <Router>
        <div>
          <ComponentF />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/a">A</Link>
              </li>
              <li>
                <Link to="/b">B</Link>
              </li>
              <li>
                <Link to="/d">D</Link>
              </li>
              <li>
                <Link to="/hoc">HOC</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact render={ () => { return <h1>I am Home</h1> } }/>
            <Route path="/a" component={ComponentA} />
            <Route path="/b" component={ComponentB} />
            <Route path="/d" component={ComponentD} />
            <Route path="/hoc" component={HOC} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
