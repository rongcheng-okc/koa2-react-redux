import React, { useState, useEffect } from 'react';
import { Button } from 'react-weui';

export default function HooksCom() {
    let [age, setAge] = useState(26);
    let [girl, setGirl] = useState('W');

    useEffect(() => {
        console.log('componentDidMount, componentDidUpdate, componentWillUnmount age');

        return () => {
            console.log('componentWillUnmount age');
        }
    });

    useEffect(() => {
        console.log('componentDidMount, componentDidUpdate, componentWillUnmount girl');

        return () => {
            console.log('componentWillUnmount girl');
        }
    }, [girl]);

    return (
    <div>
        <h1>Try hooks in v16.8.0+</h1>
        <h2>Age => {age}</h2>
        <h2>Girl => {girl}</h2>
        <h2></h2>
        <Button onClick={ () => setAge(27) }>SetAge(27)</Button><br/>
        <Button onClick={ () => setGirl('L') }>SetGirl('L')</Button><br/>
        <Button onClick={ () => setGirl('X') }>SetGirl('X')</Button><br/>
    </div>
    )
}