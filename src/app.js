import React, { useState } from 'react'
import Parent from './Parent';
import ValueContext from './ValueContext';

const App = () => {
    let Value = useState(48)
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
