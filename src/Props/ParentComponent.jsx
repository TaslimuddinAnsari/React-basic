import React, {useState} from 'react'
import ChildComponent from './ChildComponent'
import ChildToParent from './ChildToParent';
const ParentComponent = () => {
  const users = ['Anna','Roy','Smith'];

  const [state, setstate] = useState({
    names:"",
  });

  const handleCallBack = (childData) =>{
    setstate(
      {names: childData}
    )
  }
   return (
    <div>
      <h4 className='m-4'>Data is passing from parent to child</h4>
      {users.map((ele)=>
      <ChildComponent userName={ele} />
      )}

      
      <h5 className='m-4'>From Child to Parent</h5>
      <ChildToParent parentCallback= {handleCallBack}/>
      <h5 className='m-4'>Parent will get child responce after submit<br/>{state.names}</h5>
    </div>
  )
}

export default ParentComponent
