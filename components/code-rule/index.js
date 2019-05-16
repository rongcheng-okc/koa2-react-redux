import React, { Component, Fragment, } from 'react';
import { Button } from 'react-weui';
import PropTypes from 'prop-types';
import Child from './Child';

const Rules = () => { // 无状态组件提到外面
  return (
    <Fragment>
      <h1>React 编码规范</h1>
      <ul>
        <li>1.方法是纯函数的，不要写在 class 内部，写在 class 外部，只被初始化一次，节省内寸</li>
        <li>2.公用的常量提取到公共的文件内，仅当前文件使用的，写在 class 外部；</li>
        <li>3.静态方法和静态变量的使用；</li>
        <li>4.私有变量的申明，可以放在 constructor 外；</li>
        <li>5.static defaultProps = {`{}`} 对象里定义默认的 props，如果父组件没传就用这里定义的；</li>
      </ul>
    </Fragment>
  );
}

function formatDate(timeStamp) {
  const date = new Date(timeStamp);
  const year = date.getFullYear();
  const month0 = date.getMonth();
  const month = month0 > 9 ? month0 : `0${month0}`;
  const day0 = date.getDay();
  const day = day0 > 9 ? day0 : `0${day0}`
  const hour0 = date.getHours();
  const hour = hour0 > 9 ? hour0 : `0${hour0}`;
  const minute0 = date.getMinutes();
  const minute = minute0 > 9 ? minute0 : `0${minute0}`;
  const second0 = date.getSeconds();
  const second = second0 > 9 ? second0 : `0${second0}`;
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

class CodeRule extends Component {

  state = {
    time: '0000-00-00 00:00:00'
  };

  handleChangeTime = () => {
    this.setState({
      time: formatDate(new Date().getTime()),
    });
  }

  render() {
    const { time, } = this.state;
    return (
      <div>
        <Rules />
        <p>{time}</p>
        <Button onClick={this.handleChangeTime}>改变时间</Button>
        <Child color={'blue'} showMessage={() => {console.log(`I am in father's props.`);}}/>
      </div>
    );
  }
}

CodeRule.propTypes = {

};

export default CodeRule;