import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child from './child';
import ErrorBoundary from './boundary';

class index extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Child></Child>
        </ErrorBoundary>
      </div>
    );
  }
}

index.propTypes = {

};

export default index;