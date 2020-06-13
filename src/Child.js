import React, { useContext } from 'react'
import ValueContext from './ValueConttext'

const Child = () => {
    let Value = useContext(ValueContext)
    return (
        <div>
            Child Number {Value}
        </div>
    )
}

export default Child
