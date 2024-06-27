import React ,{useState,useEffect,useRef} from 'react'
import './App.css'

export default function App() {
  let [div1Height,setDiv1HEight] = useState(0);
  let [div2Height,setDiv2HEight] = useState(0);
  let [div3Height,setDiv3HEight] = useState(0);

  let div1Ref = useRef(null)
  let div2Ref = useRef(null)
  let div3Ref = useRef(null)

  useEffect(()=>{
    if(div1Ref.current){
      setDiv1HEight(div1Ref.current.offsetHeight)
    }
    if(div2Ref.current){
      setDiv2HEight(div2Ref.current.offsetHeight)
    }
    if(div3Ref.current){
      setDiv3HEight(div3Ref.current.offsetHeight)
    }
  },[])

  return (
    
    <>
    <div className="lol1" ref={div1Ref}>Div1 Height : {div1Height}</div>
    <div className="lol2" ref={div2Ref}>Div2 Height : {div2Height}</div>
    <div className="lol3" ref={div3Ref}>Div3 Height : {div3Height}</div>
    
    </>
  )
}
