import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                {this.props.content}
            </div>
        );
    }
}

export default Child;