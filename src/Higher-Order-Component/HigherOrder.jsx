import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

 class HigherOrder extends Component {
  render() {
    return (
      <div className='m-4'>
        <ClickCounter userName="Smith And Roy" />
        <HoverCounter/>
      </div>
    )
  }
}

export default HigherOrder
