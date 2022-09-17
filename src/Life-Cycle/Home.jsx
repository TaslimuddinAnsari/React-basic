import React, { Component } from 'react'

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            currentValue : 0
        }
        
    }

    componentDidUpdate(props, state, snapshort){
        // console.log('componentDidUpdate - child:',props,state ,snapshort);
        console.log('componentDidUpdate - child:',snapshort);

    }
    getSnapshotBeforeUpdate(preProps, preState) {
        console.log("getSnapshotBeforeUpdate - from parent",preProps.data, this.props.data)
        // console.log('From child: ',preState.currentValue)
        // return null;
        return preState.currentValue * 10;
    }
  render() {
    return (
      <div className='m-4'>
        <h4>Home</h4>
        <h5> From Parent: {this.props.data}</h5>

       <h5>Child : {this.state.currentValue}</h5>
        <button onClick={() =>{this.setState({currentValue: this.state.currentValue+1})}}>Update state</button>
      </div>
    )
  }
}
