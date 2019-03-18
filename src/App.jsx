import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch} from "react-router-dom";
import Loadable from 'react-loadable';

const ReduxRouter = Loadable({
  loader: () => import('../components/redux-router'),
  loading() {
    return <div>Loading...</div>
  }
});

const ReduxRouterChildren = Loadable({
  loader: () => import('../components/redux-router-children'),
  loading() {
    return <div>Loading...</div>
  }
});

const HOC = Loadable({
  loader: () => import('../components/hoc/Component'),
  loading() {
    return <div>Loading...</div>
  }
});

const PropsChildren = Loadable({
  loader: () => import('../components/props-children'),
  loading() {
    return <div>Loading...</div>
  }
});

const ReduxCon = Loadable({
  loader: () => import('../containers/redux'),
  loading() {
    return <div>Loading...</div>
  }
});

const ReduxThunkCon = Loadable({
  loader: () => import('../containers/redux-thunk'),
  loading() {
    return <div>Loading...</div>
  }
});

const HookCom = Loadable({
  loader: () => import('../components/hook'),
  loading() {
    return <div>Loading...</div>
  }
});

// import ReduxRouter from "../components/redux-router";
// import ReduxRouterChildren from "../components/redux-router-children";
// import HOC from "../components/hoc/Component"
// import PropsChildren from "../components/props-children"

// import ReduxCon from "../containers/redux"
// import ReduxThunkCon from "../containers/redux-thunk"

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
              <li>
                <Link to="/hookCom">HookCom</Link>
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
            <Route path="/hookCom" component={HookCom} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
