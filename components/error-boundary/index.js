import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child from './child';
import ErrorBoundary from './boundary';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 1,
      obj1: { text: '戎城1' },
      obj2: { text: '戎城2' },
    };
  }
  handleClick1 = () => {
    this.setState({
      title: new Date().getTime(),
    });
    // let a;
    // console.log(a.name);  // 这种错不会导致应用奔溃
  }

  handleClick2 = () => {
    this.setState({
      obj1: null,
    });
  }

  handleClick3 = () => {
    this.setState({
      obj2: null,
    });
  }

  render() {
    const { title, obj1, obj2, } = this.state;
    return (
      <div>
        <ErrorBoundary>
          <button onClick={this.handleClick1}>Button</button>
          <button onClick={this.handleClick2}>Obj1 => null</button>
          <button onClick={this.handleClick3}>Obj2 => null</button>
          <Child title={title} />
          <p>此处 obj1.name，将会把 obj1 变为 null， {obj1.name}</p>
        </ErrorBoundary>
        <p>此处 obj2.name，将会把 obj2 变为 null， {obj2.name} 注意：这个不在错误边界的包裹内</p>
      </div>
    );
  }
}

index.propTypes = {

};

export default index;