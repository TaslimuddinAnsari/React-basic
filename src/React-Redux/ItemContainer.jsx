import React from 'react';
import {connect} from 'react-redux';
import { buyCake, buyIceCream } from './AllState';

const ItemContainer = (props) => {
  return (
    <div className='text-center m-2'>
      <h2>Item - {props.item}</h2>
      <button className='btn btn-primary' 
      onClick={props.buyItem}>Buy Item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) =>{
    const itemState = ownProps.cake ? 
    state.cake.numberOfCakes 
    : 
    state.iceCream.numberOfIceCream

    return {
        item: itemState
    }
}

const mapDispatchToprops = (dispatch, ownProps ) =>{
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    :
    () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(ItemContainer)
