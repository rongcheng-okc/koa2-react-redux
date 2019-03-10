import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch} from "react-router-dom";

import ComponentA from "../components/a";
import ComponentD from "../components/d";
import ReduxCon from "../containers/redux"
import HOC from "../components/hoc/Component"
import Children from "../components/children"
import ReduxThunkCon from "../containers/redux-thunk"

class App extends Component {
  render() {
    return (
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/a">A</Link>
              </li>
              <li>
                <Link to="/d">D</Link>
              </li>
              <li>
                <Link to="/hoc">HOC</Link>
              </li>
              <li>
                <Link to="/children">Children</Link>
              </li>
              <li>
                <Link to="/redux">Redux</Link>
              </li>
              <li>
                <Link to="/redux-thunk">Redux-thunk</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact render={ () => { return <h1>I am Home</h1> } }/>
            <Route path="/a" component={ComponentA} />
            <Route path="/d" component={ComponentD} />
            <Route path="/hoc" component={HOC} />
            <Route path="/children" component={Children} />
            <Route path="/redux" component={ReduxCon} />
            <Route path="/redux-thunk" component={ReduxThunkCon} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
