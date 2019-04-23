import React, { Component } from 'react';
import PropTypes from 'prop-types';

class index extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: 'Okc_Rongcheng',
    age: 27
  };
 
  handleClick1 = (value, e) => { // 这里参数的位置和调用处的一致
    alert(e.target.tagName);
    this.setState({
      name: 'Thunder up !' + value
    });
  }

  handleClick2(value, e) {
    alert(e.target.tagName);
    this.setState({
      name: 'Thunder up !' + value
    });
  }

  render() {
    const { name, } = this.state;
    return (
      <div>
        <button onClick={e => this.handleClick1(123, e)}>雷霆你怎么了？</button>
        <button onClick={this.handleClick2.bind(this, 234)}>雷霆不在年轻了</button>
        <p>{name}</p>
      </div>
    );
  }
}

index.propTypes = {};

export default index;