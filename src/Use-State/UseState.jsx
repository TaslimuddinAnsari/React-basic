import React, {useState} from 'react'

const UseState = () => {

  const [count, setCount] = useState(0)

  const handleIncrement = () =>{
    setCount(count+1);
  }

  const handleDecrement = () =>{
    if(count!==0){
      setCount(count-1);
    }
  
  }

  return (
    <div className='m-4'>

      <h5>useState hook concept</h5>

      <h3 className='m-4'>Count Value {count}</h3>
      <button className='btn btn-primary m-4'
      onClick={handleIncrement}
      >Increment</button>

      <br/>

      <button className='btn btn-primary m-4'
      onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default UseState
