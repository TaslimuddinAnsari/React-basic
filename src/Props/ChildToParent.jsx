import React from 'react'

const ChildToParent = (props) => {

    const onTrigger = (e) =>{
        props.parentCallback(e.target.myname.value);
        e.preventDefault()
    }
  return (
    <div>
        
        <form className='m-4' onSubmit={onTrigger} >
            <input  type="text" name='myname' placeholder='Enter Name'/>
            <br/> <br/>
            <input type = "submit" value = "submit" /> 
        </form>
    </div>
  )
}

export default ChildToParent;
