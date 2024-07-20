import React from 'react'
import Content from './content'
import slides from './assets/imagesData.json'

export default function App() {
  return (
    <div>
      <Content data={slides} />
    </div>
  )
}
