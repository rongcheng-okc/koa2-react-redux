import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <button onClick={this.handleChangeTitle}>change title</button>
        <button onClick={this.handleClickB}>change keyB</button>
        <ComponentB key={keyB} title={title}></ComponentB>
      </div>
    );
  }
}

index.propTypes = {

};

export default index;