import React from 'react';
import {useDispatch} from 'react-redux';
import { deccrementAction, incrementAction } from './Action';

export default function CounterInput() {
    const dispatch = useDispatch()

    return (
        <>
        <button onClick={()=>dispatch(incrementAction()
        )}>+</button>
        <button onClick={()=>dispatch(deccrementAction())}>-</button>
        </>
    )    
}