import React, { useState } from 'react'

export default function Form() {
  const [name,setName] = useState("");

  function submitHandler(event){
    event.preventDefault();
    console.log(`You entered name : ${name}`)
  }

  return (
    <form onSubmit={submitHandler}>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />

      
    </form>
    
  )
}
