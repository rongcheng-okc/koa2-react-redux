import React, { Component } from "react";
import {
    Route,
    Link
} from "react-router-dom";

import Child from "./Child"

class ReactRouterCom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/child-1`}>child-1</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/child-2`}>child-2</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/child-3`}>child-3</Link>
          </li>
        </ul>

        <Route path={`${this.props.match.url}/:topicId`} component={Child} />
        <Route
          exact
          path={this.props.match.url}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
}

export default ReactRouterCom;
