import React,{useState} from "react";
import styles from "./addTask.module.css";

const AddTask = ({addItem}) => {
  // NOTE: do not delete `data-cy` key value pair
  const[item,setItem]= useState("");
  return (
    <div className={styles.todoForm}>
      <h1>TodoApp</h1>
      <input data-cy="add-task-input" type="text" placeholder="add task here" onChange={(e)=>{
        setItem(e.target.value)
      }} />
      <button data-cy="add-task-button" onClick ={()=>{
        addItem(item)
      }}>Add</button>
      <div className="todoForm">

      </div>
    </div>
  );
};

export default AddTask;