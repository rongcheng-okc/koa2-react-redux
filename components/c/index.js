import React from 'react'

export default function C(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}