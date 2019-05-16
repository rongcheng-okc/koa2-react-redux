import React from 'react'
import { Button } from 'react-weui';

export default function NoStateButton(props) {
    return (
      <Button className="square" onClick={props.onClick}>{props.value}</Button>
    );
}