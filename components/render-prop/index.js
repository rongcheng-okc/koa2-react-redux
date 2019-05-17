import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';
import Mouse from "./Mouse";
import Bear from './Bear';

class index extends Component {
  render() {
    return (
      <div>
        <Mouse render={mouse => (
          <Bear mouse={mouse} />
        )} />
      </div>
    );
  }
}

export default index;

