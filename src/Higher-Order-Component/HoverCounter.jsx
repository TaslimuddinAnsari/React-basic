import React, { Component } from 'react'
import WithCounter from './WithCounter';
class HoverCounter extends Component {

    // constructor() {
    //     super();
    //     this.state={
    //         counter:0
    //     }
    // }

    // incrementCount =() =>{
    //     this.setState(revState =>{
    //         return {counter: revState.counter + 1}
    //     })
    // }

  render() {
    const {count, incrementCount} = this.props
    return (
      <div className='m-4'>
        <h3 onMouseOver={incrementCount}>{this.props.name}Hover {count} Time</h3>
      </div>
    )
  }
}

export default WithCounter(HoverCounter,10)
