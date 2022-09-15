import React from 'react'

const ChildComponent = (props) => {
  const {userName} = props;
  return (
    <ul className='m-4'>
      <li>{userName}</li>
    </ul>
  )
}

export default ChildComponent
