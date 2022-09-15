import React, {useContext} from 'react'
import {UserContext,value} from './UseContext.jsx';

const Component4 = () => {
    const userData = useContext(UserContext);
    const DOB = useContext(value)
  return (
    <div>
      <h5>Component-4</h5>
      <h5>Data recieved from Parent-Component</h5>
      <h5>Hello! {userData} Your DOB is {DOB}</h5>
    </div>
  )
}

export default Component4
