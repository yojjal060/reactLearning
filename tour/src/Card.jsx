import React from 'react'
import './Card.css'

export default function Card({image,description}) {
  return (
    <div className='card'>
      <img className='images' src={image} alt="image"/>
      <p>{description}</p>
      <button>Not Interested</button>
    </div>
  )
}
