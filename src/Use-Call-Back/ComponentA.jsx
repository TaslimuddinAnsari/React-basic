import React, {memo} from 'react'

const ComponentA = ({learning,count}) => {

    console.log("Component-A");
  return (
    <div className='m-4'>
      <h5>Component-A</h5>
    </div>
  )
}

export default memo(ComponentA)
