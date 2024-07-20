import React from 'react'


export default function content({data}) {
  return (
    <div>
      {data.slides.map((item,idx)=>{
        return <img src={item.src} alt={item.alt} key={idx} />
      })}
    </div>
  )//yay
}
