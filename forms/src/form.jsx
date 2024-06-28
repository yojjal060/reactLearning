import React from 'react'

export default function Form() {
  return (
    <div>
      <form>
            <input type="text" placeholder='First Name' />
            
            <input type="text" placeholder='Last Name'/>

            <input type="email" placeholder='Email' />
            <br />
            <input type="submit" value="register" />
        </form>
    </div>
  )
}
