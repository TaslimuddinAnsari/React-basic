import React, {useState} from 'react'
import {connect}  from 'react-redux'
import {buyCake} from './AllState';


const NewCakeContainer = (props) => {
  console.log(props)
  const [number, setNumber] = useState(1)
  return (
    <div className='text-center m-4'>
      <h5>Number of cake - {props.numberOfCakes}</h5>
      <input className='m-4' type={'text'} value={number} onChange={e =>setNumber(e.target.value)} />
      <button className='btn btn-primary' 
      onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  )
}

// step-1
const mapStateToProps = state =>{
  return{
    numberOfCakes: state.cake.numberOfCakes
  }
}

// step-2
const mapDispatchToProps = dispatch =>{
  return{
    buyCake: number =>dispatch(buyCake(number))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)

// connect connect(mapStateToProps,mapDispatchToProps) with (CakeContainer)








