import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { buyCake } from './AllState';
const HooksCakeContainer = () => {
    const numberOfCakes= useSelector(state =>state.numberOfCakes);
    const dispatch = useDispatch()
  return (
    <div className='text-center m-4'>
      <h2>Number of Cake - {numberOfCakes}</h2>
      <button className='btn btn-primary' onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}
export default HooksCakeContainer
