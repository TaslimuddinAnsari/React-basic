import React,{useState} from 'react'
import Component1 from './Component1'
import Component2 from './Component2'

const Demo = () => {
    const [num, setNum] = useState(0); //for component one
    const [count, setCount] = useState(0); // for component two

    const handleComponet1 = () =>{
        console.log('Component1')
        setNum(num+1);
    }

    const handleComponet2 = () =>{
        console.log("Component2")
        setCount (count+1)
    }

  return (
    <div style={{"text-align": "center"}}>
      <Component1 count= {count} 
      handleComponet1={handleComponet1}/>
      <Component2 number = {num} 
      handleComponet2 = {handleComponet2}/>
    </div>
  )
}

export default Demo
