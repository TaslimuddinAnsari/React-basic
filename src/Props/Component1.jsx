import React from 'react'
const Component1 = (props) => {
    const {handleComponet1, count} = props

 
  return (
    <div >

      <h2>Count: {count}</h2>
      <button onClick={() => handleComponet1()}>
        button1
      </button>


    </div>
  )
}

export default Component1;