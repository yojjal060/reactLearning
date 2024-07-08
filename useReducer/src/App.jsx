import React,{useReducer} from 'react'

function reducer(state,action){
  switch(action.type){
    case "increment":
    return{...state,count:state.count+1};

    case "decrement":
      if(state.count>0){
        return{...state,count:state.count-1};
      }
      return state
    default:
      return"unrecognized"
  }
}

const initialState = {count:0}

export default function App() {
  
  const [state,dispatch] = useReducer(reducer,initialState)

  function handleIncrement(){
    dispatch({type:"increment"})
  }

  function handleDecrement(){
    dispatch({type:"decrement"})
  }

  return (
    <>
      <h1>count:{state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}
