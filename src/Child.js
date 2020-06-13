import React, { useContext } from 'react'
import ValueContext from './ValueContext'

function Child() {
    let Value = useContext(ValueContext)
    let updateValue = Value[1]
    return (
        <div>
            Child Number {Value[0]}
            <br />
            <button onClick={() => { updateValue(++Value[0]) }}>update value</button>
        </div>
    )
}

export default Child
