import React, { Component } from 'react';
import Wrapper from './Wrapper'
import Child from './Child'
import ImgSafari from '../../image/safari.png'
import ImgGirl from '../../image/girl.jpg'

class index extends Component {
    render() {
        return (
            <div>
            <Wrapper>
                <Child content="11"></Child>
                <Child content="22"></Child>
                <Child content="33"></Child>
            </Wrapper>
            <img src={ImgSafari} alt=""/>
            <img src={ImgGirl} alt=""/>
            </div>
        );
    }
}

export default index;