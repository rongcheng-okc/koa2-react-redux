import React, { Component } from 'react';
import { Button } from 'react-weui';
import style from './index.scss'
import '../../css/page.module'

class WeUI extends Component {
    render() {
        return (
            <div className={`${style.container} border-radius`}>
                <Button className={style['btn-rc']}>hello wechat</Button>
            </div>
        );
    }
}

export default WeUI;