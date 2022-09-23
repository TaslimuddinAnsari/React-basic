import React  from 'react';


const Component2 = (props) => {

const {handleComponet2, number} = props;


  return (
    <div >
      <h2>Number: {number}</h2>
      <button onClick={() =>handleComponet2()}>
      button2
      </button>


    </div>
  )
}

export default Component2;
