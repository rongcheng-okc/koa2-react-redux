import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class componentB extends PureComponent {
  constructor(props) {
    super(props);
  }
  
  componentWillReceiveProps() {
    console.log('componentB componentWillReceiveProps');
    console.log(arguments);
  }

  componentWillUpdate(a, b) {
    console.log('componentB componentWillUpdate');
    console.log(arguments);
  }

  componentDidMount() {
    console.log('componentB componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentB componentWillUnmount');
  }

  render() {
    return (
      <div>
        <h1>componentB</h1>
      </div>
    );
  }
}

componentB.propTypes = {

};

export default componentB;