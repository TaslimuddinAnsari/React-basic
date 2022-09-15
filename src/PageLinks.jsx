import React from 'react'
import {Link} from 'react-router-dom';

const PageLinks = () => {
  return (
    <div className='m-5'>
        <h5><Link to='/parentComponent'>Props-Concept</Link></h5>
        <h5><Link to='/useState'>Use-State</Link></h5>
    </div>
  )
}

export default PageLinks
