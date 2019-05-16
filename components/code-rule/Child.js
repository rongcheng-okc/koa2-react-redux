import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child extends Component {

  static defaultProps = {
    color: 'green',
    showMessage: () => {
      console.log('I am in defaultProps!');
    }
  };

  componentDidMount() {
    this.props.showMessage();
  }

  render() {
    const { color } = this.props;
    return (
      <div>
        <p>Color: {color}</p>
      </div>
    );
  }
}

Child.propTypes = {};

export default Child;