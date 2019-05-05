import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loop1 from './child';

class index extends Component {
  render() {
    return (
      <div>
        <h1>Loop2</h1>
        <Loop1></Loop1>
      </div>
    );
  }
}

index.propTypes = {

};

export default index;