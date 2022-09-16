import React, {memo} from 'react'

const ComponentA = ({learning,count}) => {

    console.log("Component-A");
    console.log(count)
  return (
    <div className='m-4'>
      <h5>Child-Component</h5>
    </div>
  )
}

export default memo(ComponentA)
