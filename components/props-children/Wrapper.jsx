import React, { Component } from 'react';

class Wrapper extends Component {
    render() {
        let list = this.props.children.map((item, index) => {
            return <p key={index}>{JSON.stringify(item.props)}</p>
        });
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default Wrapper;