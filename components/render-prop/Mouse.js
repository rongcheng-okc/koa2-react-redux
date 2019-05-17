import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

let containerPosition = {
  x: 0,
  y: 0,
};

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.refDiv = React.createRef();
  }

  state = {
    x: 0,
    y: 0,
  };

  componentDidMount() {
    const info = this.refDiv.current.getBoundingClientRect();
    containerPosition.x = info.x;
    containerPosition.y = info.y;
  }

  handleMouseMove = e => {
    this.setState({
      x: e.clientX - containerPosition.x,
      y: e.clientY - containerPosition.y,
    });
  }

  render() {
    return (
      <div 
        ref={this.refDiv} 
        className={styles.container}
        onMouseMove={this.handleMouseMove}
      >
        {this.props.render(this.state)}
        {/* 精髓在这里 */}
      </div>
    );
  }
}

export default Mouse;

