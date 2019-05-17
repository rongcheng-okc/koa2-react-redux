import React, { Component } from 'react';
import imgBear from '../../image/Bear.png';

class Bear extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log(2, this.props);
  }
  render() {
    const { x, y, } = this.props.mouse;
    return (
      <img src={imgBear} alt="" style={{width: '45px', height: '45px', position: 'absolute', left: `${x}px`, top: `${y}px`}}/>
    );
  }
}

export default Bear;