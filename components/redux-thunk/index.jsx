import React, { Component } from "react";
import { Button } from 'react-weui';

class ReduxThunkCom extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
        <Button onClick={() => { this.props.changeValue('change by async.') } }>acync Change value</Button>
      </div>
    );
  }
}

export default ReduxThunkCom;
