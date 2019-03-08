import React, { Component } from 'react';

class Wrapper extends Component {
    render() {
        console.log(this.props.children);
        return (
            <div></div>
        );
    }
}

export default Wrapper;