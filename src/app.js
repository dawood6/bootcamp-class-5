import React, { useState } from 'react'
import Parent from './Parent';


const App = () => {
    let [number, setNumber] = useState(6);
    return (
        <div>
            hello From Dawood
            <Parent num={number}></Parent>
            <button onClick={() => { setNumber(++number) }} >Update Number</button>
        </div>
    )
}

export default App
