import React from 'react';
import {buyIceCream} from './AllState'
import {connect}  from 'react-redux';

const IceCreamCntainer = (props) => {
  return (
    <div className='text-center m-4'>
      <h3>Number of Ice-Cream - {props.numberOfIceCream}</h3>
       <button className='btn btn-primary'
       onClick={props.buyIceCream}>Buy Ice-Cream</button> 
    </div>
  )
}

// step-1
const mapStateToProps = state =>{
    return{
      numberOfIceCream: state.iceCream.numberOfIceCream
    }
  }
  
  // step-2
  const mapDispatchToProps = dispatch =>{
    return{
      buyIceCream: () =>dispatch(buyIceCream())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamCntainer)
