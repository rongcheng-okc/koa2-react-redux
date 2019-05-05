import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch, } from "react-router-dom";
import Loadable from 'react-loadable';
import styles from '../css/page.module'

import routers from '../config/routers'

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

const WeUICom = Loadable({
  loader: () => import('../components/weui'),
  loading() {
    return <div>Loading...</div>
  }
});

const BindThisCom = Loadable({
  loader: () => import('../components/bind-this'),
  loading() {
    return <div>Loading...</div>
  }
});

// const LoopCom = Loadable({
//   loader: () => import('../components/loop1'),
//   loading() {
//     return <div>Loading...</div>
//   }
// });
// 经实验不能循环调用，浏览器报 out of memory

const ErrorBoundary = Loadable({
  loader: () => import('../components/error-boundary'),
  loading() {
    return <div>Loading...</div>
  }
});

class App extends Component {
  render() {
    let links = routers.map((item, index) => {
      return (
        <div className={styles.link} key={index}>
          <Link to={item[0]}>{item[1]}</Link>
        </div>
      )
    });

    return (
        <Router>
        <div>
          <nav className={styles['nav-container']}>{links}</nav>
          <Switch>
            <Route path="/" exact render={ () => { return <h1>I am Home</h1> } }/>
            <Route path="/redux-router" component={ReduxRouter} />
            <Route path="/redux-router-children" component={ReduxRouterChildren} />
            <Route path="/hoc" component={HOC} />
            <Route path="/props-children" component={PropsChildren} />
            <Route path="/redux" component={ReduxCon} />
            <Route path="/redux-thunk" component={ReduxThunkCon} />
            <Route path="/hookCom" component={HookCom} />
            <Route path="/weui" component={WeUICom} />
            <Route path="/bind" component={BindThisCom} />
            {/* <Route path="/loop" component={LoopCom} /> */}
            <Route path="/error" component={ErrorBoundary} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
