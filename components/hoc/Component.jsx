import React, { Component } from 'react';
import Wrapper from './Wrapper'

class A extends Component {
    render() {
        return (
            <div>
                {this.props.age}
            </div>
        );
    }
}

export default Wrapper(A);