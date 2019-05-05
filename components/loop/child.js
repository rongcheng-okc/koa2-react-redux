import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loop2 from './index';

class child extends Component {
  render() {
    return (
      <div>
        <h1>Loop1</h1>
        <Loop2></Loop2>
      </div>
    );
  }
}

child.propTypes = {

};

export default index;