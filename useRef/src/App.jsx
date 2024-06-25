import React,{useRef} from 'react'

export default function App() {
  let ref = useRef(0)

  function clickHandler(){
    ref.current = ref.current + 1;
    alert('You click ' +ref.current + ' times')

  }

  return (
    <div>
      <button onClick={clickHandler}>click me</button>
    </div>
  )
}
