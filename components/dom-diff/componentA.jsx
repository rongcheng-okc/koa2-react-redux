import React, { Component } from 'react';
import PropTypes from 'prop-types';

class componentA extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('componentA componentWillMount');
  }

  componentWillUnmount() {
    console.log('componentA componentWillUnmount');
  }

  render() {
    return (
      <div>
        <h1>componentA</h1>
      </div>
    );
  }
}

componentA.propTypes = {

};

export default componentA;