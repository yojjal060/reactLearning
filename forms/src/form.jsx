import React, { useState } from 'react'
import './form.css'

export default function Form() {

    const[isSubmitted,setIsSubmitted] = useState(false)

    const[inputValue,setInputValue] = useState({
      userName: '',
      email:'',
      date:''
    })

    const handleSubmit = (e)=>{
      setIsSubmitted(true)
      e.preventDefault();
    }
      
    

    

    const handleChange = (e)=>{
      setInputValue({
        ...inputValue,
        [e.target.name] : e.target.value,
      })
      console.log(inputValue)
    }

  return (
    <div className='parent-container'>
        <div className='form-div'>
            <h1 className='Heading'>Register</h1>
                <form>
                    <label htmlFor="username">Username</label><br />
                    <input type="text" name='userName' placeholder='Username' id='username' value={inputValue.userName} onChange={handleChange}/>
                    <br />
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name='email' placeholder='Email' id='email' value={inputValue.email} onChange={handleChange} />
                    <br />
                    <label htmlFor="Birthdate">Birthday</label><br />
                    <input type="date" name='date' id='birthdate' value={inputValue.date} onChange={handleChange}/>
                    <br />
                    {/* <label htmlFor="password">Password</label><br />
                    <input type="password" placeholder='Password' /><br />
                    <label htmlFor="Confirm-Password">Confirm Password</label><br />
                    <input type="password" name="" id="" placeholder='Confirm Password'/><br /> */}
                    <input type="submit" value='Submit' onClick={handleSubmit}/>
                </form>
        </div>
        <div>
          {isSubmitted ? <p>Hello My name is {inputValue.userName} </p> : false}
        </div>
    </div>
  )
}
