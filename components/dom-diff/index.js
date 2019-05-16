import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-weui';


import ComponentA from './componentA';
import ComponentB from './componentB';

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyB: 2,
      title: 1,
    };
  }

  handleChangeTitle = () => {
    this.setState({
      title: new Date().getTime(),
    });
  }

  handleClickB = () => {
    this.setState({
      keyB: new Date().getTime(),
    });
  }

  render() {
    const { title, keyB, } = this.state;
    return (
      <div>
        <Button onClick={this.handleChangeTitle}>change title</Button>
        <Button onClick={this.handleClickB}>change keyB</Button>
        <ComponentB key={keyB} title={title}></ComponentB>
      </div>
    );
  }
}

index.propTypes = {

};

export default index;