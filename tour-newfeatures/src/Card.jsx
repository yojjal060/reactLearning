import React,{useState,useEffect} from 'react'
import './Card.css'

export default function Card({image,description,overlayText}) {
  const [color, setColor] = useState("green");

  useEffect(() => {
    const price = parseFloat(overlayText.replace(/,/g, '')); // Remove commas and convert to number
    if (price > 2000) {
      setColor('red');
    } else if(price > 1100) {
      setColor('aqua');
    }
    else if(price < 1100){
      setColor('green')
    }
  }, [overlayText]);
  

  return (
    <div className='card'>
      
      <img className='images' src={image} alt="image"/>
      <p>{description}</p>
      <button>Not Interested</button>
      <div className="overlay-text" style={{ backgroundColor: color }}>{overlayText}</div>
    </div>
  )
}
