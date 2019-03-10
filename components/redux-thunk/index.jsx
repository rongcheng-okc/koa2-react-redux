import React, { Component } from "react";

class ReduxThunkCom extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <button onClick={() => { this.props.changeValue('change by async.') } }>acync Change value</button>
      </div>
    );
  }
}

export default ReduxThunkCom;
