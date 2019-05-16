import React, { Component } from 'react';
import { Button } from 'react-weui';
require('../../css/common.css');
import '../../css/page.module';

class A extends Component {
    constructor() {
        super();
        this.state = {
            hasRadius: true,
        }
        this.toggleRadius = this.toggleRadius.bind(this);
    }
    toggleRadius() {
        let v = !this.state.hasRadius;
        this.setState({
            hasRadius: v
        });
        console.log(this.state.hasRadius);
    }
    render() {
        return (
            <div>
                <h1>Component A</h1>
                <Button onClick={this.toggleRadius}>toggleRadius</Button>
                <div className={`aqua-bc ${this.state.hasRadius ? 'border-radius' : ''}`}  style={{height: '100px', with: '100px', border: '1px solid red'}}>
                    className style
                </div>
            </div>
        );
    }
}

export default A;