import React, {useState, useCallback} from 'react'
import ComponentA from './ComponentA';

const UseCallBack = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0)
  // without useCallback
  // const learning = () =>{
  //   //some opration (re-Creating each time and child think that there is some change happend that's why child component call again. To prevent it, we will useCallback)
  // }

  // By using useCallback

  const learning = useCallback( () =>{
    // some code
    console.log("useCallback")
  },[count])  //for first time we can pass dependency

  return (

    <div className='m-4'>
      <h4>useCallBack Hook</h4>
      <ComponentA learning={learning} count= {count} />
      <h4 className='m-4'>{add}</h4>
      <button className='btn btn-primary' onClick={() =>setAdd(add + 1)}>Addition</button>
      <h4>Count: {count}</h4>
      <button className='btn btn-primary' 
      onClick={() => setCount(count+1)}
      >Increment</button>
    </div>

  )
}

export default UseCallBack;
