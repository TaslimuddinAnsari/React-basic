import React from 'react'

const Component1 = (props) => {
    const { handleComponet1, count } = props
    return (
        <div>
            <h2>Component1</h2>
            <h2>Count: { count}</h2>
            <button onClick={() => handleComponet1()}>
            Button1</button>
        </div>
    )
}
export default Component1;
