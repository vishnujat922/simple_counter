import React from 'react'
import { useReducer } from 'react'

let oldValue ={
    value:100
  }

  const reducerFunction =(oldState,action)=>{
    if(action.type === 'ADDITION'){
        return {
            ...oldState,
            value: oldState.value + action.payload
        }
    }
    else if (action.type === 'SUBSTRACTION'){
        return{
            ...oldState,
            value:oldState.value - action.payload
        }
    }
    else if (action.type === 'DIVISION'){
        return{
            ...oldState,
            value:oldState.value / action.payload
        }
    }
    else if (action.type === 'MULTIPLICATION'){
        return{
            ...oldState,
            value:oldState.value * action.payload
        }
    }
    else if (action.type === 'RESET'){
        return{
            ...oldState,
            value:100
        }
    }
    else{
        return oldState
    }
  }

const ElseIf = () => {

    const [newState,dispatch] = useReducer(reducerFunction,oldValue)
  return (
    <div className="App">
    <h1 style={{color:"blue"}}>Simple Calculator</h1>
    <h2>using useReducer with ELSE IF</h2>
    <h1>{newState.value}</h1>
    <button className="btn-style" onClick={()=>{ dispatch({type:"ADDITION",payload:2})}}>+ 2</button>
    <button className="btn-style" onClick={()=>{ dispatch({type:"ADDITION",payload:4})}}>+ 4</button>
    <button className="btn-style" onClick={()=>{ dispatch({type:"ADDITION",payload:6})}}>+ 6</button>
    <button className="btn-style" onClick={()=>{ dispatch({type:"ADDITION",payload:8})}}>+ 8</button>

    <button className="btn-style" onClick={()=>{ dispatch({type:"SUBSTRACTION",payload:2})}}>- 2</button>
    <button className="btn-style" onClick={()=>{ dispatch({type:"SUBSTRACTION",payload:4})}}>- 4</button>
    <button className="btn-style" onClick={()=>{ dispatch({type:"SUBSTRACTION",payload:6})}}>- 6</button>
    <button className="btn-style" onClick={()=>{ dispatch({type:"SUBSTRACTION",payload:8})}}>- 8</button>
    
    <button onClick={()=>{ dispatch({type:"RESET"})}} style={{marginLeft:"10px", marginRight:"10px", color:"white", backgroundColor:"red", padding:"5px", borderRadius:"5px", fontSize:"20px"}} >Reset</button>

    <button className="btn-style" onClick={()=>{ dispatch({type:"DIVISION",payload:2})}}>/ 2</button>
    <button className="btn-style" onClick={()=>{ dispatch({type:"DIVISION",payload:4})}}>/ 4</button>
    <button className="btn-style" onClick={()=>{ dispatch({type:"DIVISION",payload:6})}}>/ 6</button>
    <button className="btn-style" onClick={()=>{ dispatch({type:"DIVISION",payload:8})}}>/ 8</button>
  
    <button className="btn-style" onClick={()=>{ dispatch({type:"MULTIPLICATION",payload:2})}}>x 2</button>
    <button className="btn-style" onClick={()=>{ dispatch({type:"MULTIPLICATION",payload:4})}}>x 4</button>
    <button className="btn-style" onClick={()=>{ dispatch({type:"MULTIPLICATION",payload:6})}}>x 6</button>
    <button className="btn-style" onClick={()=>{ dispatch({type:"MULTIPLICATION",payload:8})}}>x 8</button>
  
  </div>
  )
}

export default ElseIf