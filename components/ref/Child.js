import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child extends Component {
  state = {
    name: 'refChild'
  };
  render() {
    return (
      <div>
        <h3>A Child.</h3>
        <p>{this.state.name}</p>        
      </div>
    );
  }
}

Child.propTypes = {

};

export default Child;