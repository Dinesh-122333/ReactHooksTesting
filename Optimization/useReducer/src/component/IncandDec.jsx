import React from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react'

const initialState = {
    time: 10,
    isRunning: false,
};

function reducer(state, action){
    switch(action.type){
        case 'increase':
            return { ...state, time: state.time + 1 };
        case 'decrease':
            return { ...state, time: state.time - 1 };
        case 'tick':
            return { ...state, time: state.time - 1 };
        case 'start':
            return { ...state, isRunning: true };
        case 'pause':
            return { ...state, isRunning: false };
        case 'reset':
            return {time: 10, isRunning: false}
        default:
            throw new Error("Unknown action")

    }
}
export default function Timer() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        let interval;
        if (state.isRunning){
            interval = setInterval(() => {
                dispatch ({type: 'tick'})
            }, 1000);
        }
        if (state.time === 0 && state.isRunning){
            alert("Time up!!!")
            dispatch({type: 'pause'})
        }
        return () => clearInterval(interval)
    }, [state.isRunning, state.time])
  return (

    <>
    <div className="">
        <h1>This is timer which used by useReducer</h1>
        <h1>Timer: {state.time}</h1>
        <button onClick={() => dispatch({type: 'start'})} disabled={state.isRunning || state.time === 0}>Start</button>
        <button onClick={() => dispatch({type: 'pause'})} disabled={!state.isRunning}>Pause</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <button onClick={() => dispatch({type: 'increase'})}>+</button>
        <button onClick={() => dispatch({type: 'decrease'})} disabled={state.time === 0}>-</button>

    </div>
    
    </>
  )
}
