import React from 'react'
import { Link } from 'react-router-dom';

const PageLinks = () => {
  return (
    <div className='m-5' style={{ 'display': 'flex', "flexDirection": 'row' }}>
      <div className='m-4'>
        <h5>Functional Component</h5>
        <h5><Link to="/functionComponent">Funcational-Component</Link></h5>
        <h5><Link to='/parentComponent'>Props-Concept</Link></h5>
        <h5><Link to='/useState'>Use-State</Link></h5>
        <h5><Link to='/useEffect'>Use-Effect</Link></h5>
        <h5><Link to='/useContext'>Use-Context</Link></h5>
        <h5><Link to='/useReducer'>Use-Reducer</Link></h5>
        <h5><Link to='/useRef'>Use-Ref</Link></h5>
        <h5><Link to='/useCallBack'>Use-Call-Back</Link></h5>
        <h5><Link to='/useMemo'>Use-Memo</Link></h5>
        <h5><Link to='/useForm'>Use-Form</Link></h5>
      </div>

      <div className='m-4'>
        <h5>Class-Component</h5>
        <h5><Link to='/classComponent'>Class-Component</Link></h5>
        <h5><Link to="/componentLife">Life-cycle-proces</Link></h5>
        <h5><Link to="/lifeCycleMathod">Life-cycle-Demo</Link></h5>
        <h5><Link to="/shouldComponentUpdate">ShouldComponentUpdate</Link></h5>
        <h5><Link to='/getSnapshotBeforeUpdate'>getSnapshotBeforeUpdate</Link></h5>
        <h5>Higher-order-Component</h5>
        
        <h5><Link to='/higherOrderComponent'>Higher-order-Component</Link></h5>
        {/* <h5><Link to="/demo">Demo</Link></h5> */}
        <h5><Link to='/incrementValue'>Button-Demo</Link></h5>
        <h5><Link to='/traingleShape'>Taingle-Shape</Link></h5>
        <h5><Link to='/reduxApp'>React-Redux</Link></h5>
      </div>
    </div>
  )
}

export default PageLinks
