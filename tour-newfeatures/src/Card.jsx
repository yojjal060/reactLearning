import React, { useState, useEffect } from 'react';
import './Card.css';

export default function Card({ id, image, description, overlayText ,onRemove,title}) {
  const [color, setColor] = useState("green");
  const [isExpanded, setIsExpanded] = useState(false);
  

  useEffect(() => {
    const price = parseFloat(overlayText.replace(/,/g, '')); 
    if (price > 2000) {
      setColor('red');
    } else if (price > 1100) {
      setColor('aqua');
    } else if (price < 1100) {
      setColor('green');
    }
  }, [overlayText]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`}>
      <img className='images' src={image} alt="Tour" />
      <h3>{title}</h3>
      <p>
        {isExpanded ? description : `${description.substring(0, 89)}...`}
        <span className='see-more' style={{ color: "#34d399" }} onClick={toggleExpanded}>
          {isExpanded ? '    See Less' : '   See More'}
        </span>
      </p>
      <button onClick={() => onRemove(id)}>Not Interested</button>
      <div className="overlay-text" style={{ backgroundColor: color }}>${overlayText}</div>
    </div>
  );
}
