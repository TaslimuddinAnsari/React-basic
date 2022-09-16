import React from 'react'
import {Link} from 'react-router-dom';

const PageLinks = () => {
  return (
    <div className='m-5'>
        <h5>Functional Component</h5>
        <h5><Link to='/parentComponent'>Props-Concept</Link></h5>
        <h5><Link to='/useState'>Use-State</Link></h5>
        <h5><Link to='/useEffect'>Use-Effect</Link></h5>
        <h5><Link to='/useContext'>Use-Context</Link></h5>
        <h5><Link to='/useReducer'>Use-Reducer</Link></h5>
        <h5><Link to='/useRef'>Use-Ref</Link></h5>
        <h5><Link to='/useCallBack'>Use-Call-Back</Link></h5>
        <h5><Link to='/useMemo'>Use-Memo</Link></h5>
    </div>
  )
}

export default PageLinks
