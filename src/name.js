import React from 'react';
import {useState} from 'react';
import App from './App';

function name(props){
    return(
        <div>
        <h1>Hello</h1>
        <h1>My name is {props.name}</h1>
        <h1>I am {props.age} years old</h1>
        <hr/>
      </div>
    );
}

export default name;