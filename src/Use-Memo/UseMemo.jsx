import React, {useState, useMemo} from 'react'

const UseMemo = () => {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);

    // without useMemo
    // function multiplay() {
    //     console.log("Multiplication")
    //     return add*5
    // }

    const multiplication = useMemo(function multiplay(){
        console.log("use-Memo");
        return add * 5;
    }, [add])

  return (
    <div className='m-4'>

      <h5>useMemo</h5>
      <h5>Multiplication {multiplication}</h5>

      <span>{add}</span>

      <button className='btn btn-primary m-4'
      onClick={()=>setAdd(add+1)}
      >Addition</button>

      <br/><span>{minus}</span>

      <button className='btn btn-primary m-4'
      onClick={() => setMinus(minus-1)}
      >Subtract</button>
      
    </div>
  )
}

export default UseMemo
