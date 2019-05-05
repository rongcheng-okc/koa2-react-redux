import React, { Component } from 'react';
import PropTypes from 'prop-types';

class child extends Component {
  render() {
    return (
      <div>
        <h1>will happen wrong in this component</h1>
      </div>
    );
  }
}

child.propTypes = {

};

export default child;