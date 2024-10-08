'use client';
import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);

    const puls = () =>{
        setCount(count + 1);
        
    };

    const minus = () =>{
        setCount(count - 1);
    };

  return (
    <div>
      <h1>カウント{count}</h1>
      <button onClick={minus}>-</button>
      <button onClick={puls}>+</button>
    </div>
  )
}

export default Count
