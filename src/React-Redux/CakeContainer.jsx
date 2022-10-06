import React from 'react'
import {connect}  from 'react-redux'
import {buyCake} from './AllState';


const CakeContainer = (props) => {
  console.log(props)
  return (
    <div className='text-center m-4'>
      <h5>Number of cake - {props.numberOfCakes}</h5>
      <button className='btn btn-primary' onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

// step-1
const mapStateToProps = state =>{
  return{
    numberOfCakes: state.numberOfCakes
  }
}

// step-2
const mapDispatchToProps = dispatch =>{
  return{
    buyCake: () =>dispatch(buyCake())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)

// connect connect(mapStateToProps,mapDispatchToProps) with (CakeContainer)
