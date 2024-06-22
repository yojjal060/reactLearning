import React, {useState,useEffect} from 'react'

export default function App() {
  const[count,setCount] =  useState(0);

  useEffect(()=>{
    const color = count > 0 ? 'lightgreen' : count < 0 ? 'lightcoral' : 'white';
    document.body.style.backgroundColor = color;
  },[count])

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <button onClick={()=> setCount(count - 1)}>Decrement</button>
      <p>count is: {count}</p>
    </>
  );
}
