import React, {useContext} from 'react'
import Component4 from './Component4';
import {UserContext} from'./UseContext'

const Component3 = () => {
 const data = useContext(UserContext)
  return (
    <div>
        <h5>Component-3</h5>
        <h5>Data From UseContext-Component {data}</h5>
      <Component4/>
    </div>
  )
}

export default Component3;
