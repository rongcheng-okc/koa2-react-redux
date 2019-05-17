import React, { Component, Fragment, } from 'react';
import PropTypes from 'prop-types';

//创建Context组件
const CustomerContext = React.createContext({
  theme: '',
  toggle: () => {}, //向上下文设定一个回调方法
});

class index extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    theme: 'green'
  };

  toggle = () => {
    const { theme } = this.state;
    this.setState({
      theme: theme === 'green' ? 'blue' : 'green'
    });
  }

  render() {
    const contextValue = {
      theme: this.state.theme,
      toggle: this.toggle
    };
    return (
      <CustomerContext.Provider value={contextValue}>
        <h1>Context</h1>
        <ContentCom />
      </CustomerContext.Provider>
    );
  }
}

export default index;

//中间组件,可以是一层或者多层
function ContentCom() {
  return (
    <div>
      <ConsumerCom />
    </div>
  );
}

//最终消费 context 的组件
function ConsumerCom() {
  return (
    <CustomerContext.Consumer>
      {({theme, toggle}) => (
        <Fragment>
          <button onClick={toggle} >Toggle Theme</button>
          <div style={{width: '100px', height: '50px', backgroundColor: theme}}>这里的背景色会变化</div>
        </Fragment>
      )}
    </CustomerContext.Consumer>
  );
}

// React context的局限性

// 1. 在组件树中，如果中间某一个组件 ShouldComponentUpdate returning false 了，会阻碍 context 的正常传值，导致子组件无法获取更新。
// 2. 组件本身 extends React.PureComponent 也会阻碍 context 的更新。