import React, { Component } from 'react';
import PropTypes from 'prop-types';

class child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj3: {
        name: 'RC_Okc'
      }
    };
  }
  componentWillReceiveProps() {
    try {
      throw(33); 
    } catch (e) {
      console.warn('组件内函数运行出错', e);
    }
    setTimeout(() => {
      try {
        throw(22);
      } catch (e) {
        console.warn('组件内函数 setTimeout 内运行出错', e);
      }
    }, 2000);
    throw(11); // 这个异常将被错误边界捕获
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        obj3: null
      });
    }, 3000);
  }
  render() {
    const { obj3, } = this.state;
    return (
      <div>
        <h1>will happen wrong in this component</h1>
        <p>此处 obj3.name，将会把 obj3 变为 null， {obj3.name}</p>
      </div>
    );
  }
}

child.propTypes = {};

export default child;