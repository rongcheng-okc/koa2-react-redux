import React, { Component } from 'react';
import Wrapper from './Wrapper'
import Child from './Child'

class index extends Component {
    render() {
        return (
            <div>
            <Wrapper>
                <Child content="11"></Child>
                <Child content="22"></Child>
                <Child content="33"></Child>
            </Wrapper>
            </div>
        );
    }
}

export default index;