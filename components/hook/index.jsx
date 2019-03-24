import React, { useState, useEffect } from 'react';

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
        <button onClick={ () => setAge(27) }>SetAge(27)</button><br/>
        <button onClick={ () => setGirl('L') }>SetGirl('L')</button><br/>
        <button onClick={ () => setGirl('X') }>SetGirl('X')</button><br/>
    </div>
    )
}