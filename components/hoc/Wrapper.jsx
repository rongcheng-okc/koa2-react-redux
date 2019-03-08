import React, { Component } from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

const HOC1 = () => {
  return <h1>Route => HOC1</h1>;
};

const HOC2 = () => {
  return <h1>Route => HOC2</h1>;
};

const B = WrappedComponent => {
  return class extends Component {
    componentWillMount() {
      if (!sessionStorage.getItem("age")) {
        sessionStorage.setItem("age", 27);
      }
      this.setState({ age: sessionStorage.getItem("age") });
    }

    render() {
      return (
        <div>
          <p>This is a HOC Component; </p>
          <br/>
          <p>Props has :</p>
          <textarea name="" id="" cols="30" rows="10" style={ { width: "100%" } } defaultValue={ JSON.stringify(this.props) }></textarea>
          <br/>
          <Link to="/hoc/1">HOC1</Link>
          <br/>
          <Link to="/hoc/2">HOC2</Link>
          <br/>
          <button onClick={() => {this.props.history.push({ pathname: "/hoc/1", search: "?name=yahoo", state: 23, param: { city: "HZ"} })}}>To HOC1</button>
          <Router basename="/hoc">
            <div>
                <Route path="/1" component={HOC1} />
                <Route path="/2" component={HOC2} />
            </div>
          </Router>
          <WrappedComponent age={this.state.age} />
        </div>
      );
    }
  };
};

export default B;
