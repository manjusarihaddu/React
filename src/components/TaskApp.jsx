
import React,{useState} from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";
import Tasks from "./Task/Task";

export const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [list,setList]= useState([]);
  const addItem=(get)=>{
    setList(prev =>{
      if(get === "") return prev
      else{
        return [...prev,get]
      }
    })
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <AddTask addItem={addItem}/>
      {
        list.map((e,i) =>{
          return <div key={i}> <Tasks item={e}/></div>
        })
      }
 
    </div>
  );
};