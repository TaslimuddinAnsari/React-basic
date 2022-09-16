import React, {useState}  from "react";


function FunctionComponent(){
const [Inc, setInc] = useState(0)
    
const hello = "This is functional component"
    return(
        <div  className="m-4">
            <h5>{hello}</h5>
            <h5>{Inc}</h5>
            <button className="btn btn-primary"
            onClick={() =>setInc(Inc+1)}
            >Increment</button>
        </div>
    )
}

export default FunctionComponent