import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Child from './Child';

const textAreaContent = '这个 textarea 的引用由 React.createRef() 创造';

/**
 * 最原始的多层级传递 ref ，在最后需要赋值的组件（或许是原生元素）上，用 ref 赋值
 */
function Level3(props) {
  return (
      <div>
          <input ref={props.inputRef} placeholder="input in Level3"/>
      </div>
  );
}

function Level2(props) {
  return (
      <div>
          <Level3 inputRef={props.inputRef} />
      </div>
  );
}

function Level1(props) {
  return (
    <div>
      My input: <Level2 inputRef={props.inputRef} />
    </div>
  );
}

/**
 * 一般的 ref 都是把组件的实例赋值给 ref，但是我们可能要操作的是组件内的某个原生元素，该方法可以实现这种需求
 */
const ForwardRefChild=React.forwardRef((props, ref) => (
  <input ref={ref} placeholder="forwardRefChild"/>
));

class RefCom extends Component {
  constructor(props) {
    super(props);
    this.myTextarea = React.createRef();
    this.forwardRef = React.createRef();
  }

  state = {
    childTitle: 'title from parent',
  };

  componentDidMount () {
    setTimeout(() => {
      this.refs.p.style.color = 'green';
      this.refs.p.style.fontSize = '20px';

      this.refs.childRef.state.name = 'rccccc'; // 拿到了实例，可是不知道这能干啥操作
    }, 2000);
  }

  toFocus = () => {
    this.textInput.focus();
  }

  toTextareaFocus = () => {
    console.log(this.myTextarea.current);
    this.myTextarea.current.focus();
  }

  toLevel3Focus = () => {
    this.manyLevelRef.focus();
  }

  toforwardRefChildFocus = () => {
    this.forwardRef.current.focus();
  }

  render() {
    return (
      <div>
        <h1>how to use ref ?</h1>
        <Child ref="childRef" title={this.state.childTitle}></Child>
        <p ref="p">something in p</p>

        <section>
          <button onClick={this.toFocus}>to Focus.</button>
          <input ref={(input) => {this.textInput = input;}} placeholder="这个输入框的 focus 状态可由按钮控制" type="text" />
        </section><br/>
        <section>
          <button onClick={this.toTextareaFocus}>to Textarea Focus.</button>
          <textarea ref={this.myTextarea} name="" id="" cols="30" rows="3" defaultValue={textAreaContent}></textarea>
        </section><br/>
        <section>
          <button onClick={this.toLevel3Focus}>to Level Focus.</button>
          <Level1 inputRef={el => {this.manyLevelRef = el}}></Level1>
        </section><br/>
        <section>
          <button onClick={this.toforwardRefChildFocus}>to forwardRefChild Focus.</button>
          <ForwardRefChild ref={this.forwardRef}/>
        </section>
      </div>
    );
  }
}

RefCom.propTypes = {

};

export default RefCom;