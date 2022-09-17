import React, { Component } from 'react'
import WithCounter from './WithCounter';
 class ClickCounter extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         count:0
    //     }
    // }

    // incrementCount = () =>{
    //     this.setState(prevState =>{
    //         return { count: prevState.count + 1}
    //     })
    // }
  render() {

    const {count, incrementCount,userName} = this.props
    console.log(userName)
    return (
      <div className='m-4'>
        <h5>Higher-Order-Component</h5>
        <h4>Count: {count}</h4>
        <h5>Props From Click-Counter componet: {userName}</h5>
        <h5>Name (received from HOC ):{this.props.name}</h5>
        <button className='m-4' 
        onClick={incrementCount}>Clik {count} Time</button>
      </div>
    )
  }
}

export default WithCounter(ClickCounter,5)
