import React, {useState} from 'react';
import './App.css';
import Card from './Card'; // Make sure this path matches your Card component file path


export default function App() {

  

  

  return (
    <div className='container'>
      <div className='Title'>
        <h1>Our Tours</h1>
      </div>

      <div className="body">
        <Card 
          image="https://www.course-api.com/images/tours/tour-1.jpeg "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          button
          overlayText = "1,050"
        />

        <Card 
          image="https://www.course-api.com/images/tours/tour-2.jpeg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          button
          overlayText = "1,200"
        />

        <Card 
          image="https://www.course-api.com/images/tours/tour-3.jpeg "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          button
          overlayText = "2,695"
        />

        <Card 
          image="https://www.course-api.com/images/tours/tour-4.jpeg "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          button
          overlayText = "1,560"
        />


        <Card 
          image="https://www.course-api.com/images/tours/tour-5.jpeg "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          button
          overlayText = "3,050"
        />


      </div>
    </div>
  );
}
