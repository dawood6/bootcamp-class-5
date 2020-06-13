import React, { useReducer } from 'react'
import numberReducer from './numberReducer'

const Child2 = () => {
    let [state, dispatch] = useReducer(numberReducer, 52)
    return (
        <div>
            Child 2 { number}
        </div>
    )
}

export default Child2
