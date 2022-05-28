import React, { useState } from 'react'


function Todo({addItem}) {

    const [item,setItem]=useState("");
  

  
  return (
    <div>
        <h1>Todo APP</h1>
        <label htmlFor="">Enter Task</label>
        <input placeholder='write something' type="text" onChange={(e)=>{
            setItem(e.target.value)
        }} />

       
        <button onClick={()=>{
          // addItem(item);
          addItem(item)
            
        }} >Add</button>
        <div>
       
        </div>
    </div>
  )
}

export default Todo