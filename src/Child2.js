import React, { useReducer } from 'react'
import numberReducer from './numberReducer'

function Child2() {
    let [state, dispatch] = useReducer(numberReducer, 52)
    return (
        <div>
            Child 2 { state}
            <button onClick={() => { dispatch({ type: "INCREAMENT", val: 67 }) }}>increamnet</button>
            <button onClick={() => { dispatch({ type: "DECREAMENT", val: 37 }) }}>decreamnet</button>

        </div>
    )
}

export default Child2
