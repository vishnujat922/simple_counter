import {useReducer} from 'react';


let oldValue ={
  value:100
}

let reducerFunction = (oldState,action)=>{
    console.log('oldState ----->',oldState);
    console.log('action ----->',action);
    console.log('action.type ----->',action.type);
        switch(action.type){
            case 'ADDITION':
            return {...oldState, value:oldState.value+action.payload};
            case 'SUBSTRACTION':
            return {...oldState, value:oldState.value-action.payload};
            case 'DIVISION' :
            return {...oldState,value:oldState.value/action.payload}
            case 'MULTIPLICATION' :
                return {...oldState,value:oldState.value*action.payload}
            case 'RESET':
            return {
                ...oldState,
                value:100
            }
            default:
            return oldState;  
        }
}
function SwitchCase() {
    const [newState,dispatch] = useReducer(reducerFunction,oldValue)
  return (
    <div className="App">
      <h1 style={{color:"blue"}}>Simple Calculator</h1>
      <h2>using useReducer with SWITCH CASE</h2>
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
  );
}
export default SwitchCase