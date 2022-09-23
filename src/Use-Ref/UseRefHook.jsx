import React, {useRef,useState} from 'react'

const UseRefHook = () => {

  const refElem = useRef("");  // use for dom-manipulating
  console.log(refElem); // It return current object 
  const [names, setName] = useState("Taslim");

  const reSet = () =>{
    setName('');
    refElem.current.focus(); // it does not lose the focus of input field
  }
  const handleInput = () =>{
    refElem.current.style.color = "blue";
    // refElem.current.value='Anna';
  }
  return (
    <div className='m-4'>
      <h4>Use Ref Hook</h4>
      <input ref={refElem} type="text" value={names}
      onChange={ (e) =>
      setName(e.target.value)}
      />

        <button className='btn btn-primary m-4'
        onClick={reSet}>Reset</button>

        <button className='btn btn-primary'
        onClick={handleInput}>handle Input</button>
    </div>
  )
}

export default UseRefHook;
