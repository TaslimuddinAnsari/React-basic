import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {buyIceCream} from './AllState'
const HooksIceCream = () => {
    const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCream)
    const dispathch = useDispatch()
    return (
    <div className='text-center m-4'>
      <h4>Using Hooks</h4>
      <h2>Number of Ice-Cream - {numberOfIceCream}</h2>
      <button className='btn btn-primary'
      onClick={() => dispathch(buyIceCream())}>Buy Ice-cream</button>
    </div>
  )
}

export default HooksIceCream
