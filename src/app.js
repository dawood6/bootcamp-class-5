import React from 'react'
import Parent from './Parent';
import ValueContext from './ValueConttext';

const App = () => {
    let Value = 81;
    return (
        <ValueContext.Provider value={Value}>
            <div>
                hello From Dawood
            <Parent></Parent>
            </div>
        </ValueContext.Provider>
    )
}

export default App
