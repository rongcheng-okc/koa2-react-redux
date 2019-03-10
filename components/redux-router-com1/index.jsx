import React, { Component } from 'react';

class E extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.match.params.topicId}</h1>
            </div>
        );
    }
}

export default E;