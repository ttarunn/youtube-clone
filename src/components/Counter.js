import React, { useState } from 'react'

const Counter = () => {
    let [value, setValue] = useState(0)
    const handleInc = ()=> {
        if(value >= 0){
            setValue(value+1)
        }
    }
    const handleDec = ()=> {
        if(value > 0) setValue(value-1)
        
    }
  return (
    <>
        <div style={{margin:'8px', padding:'2px'}}>Counter: {value}</div>
        <button style={{border:'1px solid black', margin:'8px', padding:'2px'}} onClick={handleInc}>Increase</button>
        <button style={{border:'1px solid black', margin:'8px', padding:'2px'}} onClick={()=> handleDec()}>Decrease</button>
    </>
  )
}

export default Counter