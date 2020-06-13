import React, { useContext } from 'react'
import ValueContext from './ValueContext'

const Child = () => {
    let Value = useContext(ValueContext)
    return (
        <div>
            Child Number {Value}
            <br />
            <button onClick={() => { Value[1](++Value[0]) }}>update value</button>
        </div>
    )
}

export default Child
