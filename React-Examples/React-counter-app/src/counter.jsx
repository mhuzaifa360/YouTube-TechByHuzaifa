
import React, { useState } from 'react'

function Counter() {

    const [count,useCount]=useState(0);
  return (
    <div>
      <h1>React Counter Application</h1>
      <h2>Number : {count}</h2>

        <button onClick={()=>useCount(count + 1)}>Increase</button>
        <button onClick={()=> useCount(count - 1)}>Decrease</button>
        <button onClick={()=> useCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
