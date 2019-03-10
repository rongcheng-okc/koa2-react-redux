import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch} from "react-router-dom";

import ReduxRouter from "../components/redux-router";
import ReduxRouterChildren from "../components/redux-router-children";
import HOC from "../components/hoc/Component"
import PropsChildren from "../components/props-children"

import ReduxCon from "../containers/redux"
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
                <Link to="/redux-router">ReduxRouter</Link>
              </li>
              <li>
                <Link to="/redux-router-children">ReduxRouterHasChildren</Link>
              </li>
              <li>
                <Link to="/hoc">HOC</Link>
              </li>
              <li>
                <Link to="/props-children">PropsChildren</Link>
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
            <Route path="/redux-router" component={ReduxRouter} />
            <Route path="/redux-router-children" component={ReduxRouterChildren} />
            <Route path="/hoc" component={HOC} />
            <Route path="/props-children" component={PropsChildren} />
            <Route path="/redux" component={ReduxCon} />
            <Route path="/redux-thunk" component={ReduxThunkCon} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
