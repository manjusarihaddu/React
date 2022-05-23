import React from "react";
import styles from "./tasks.module.css";
import TaskApp from "../TaskApp";

const Tasks = ({item}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        <li><h4>{item}</h4></li>
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        
      </div>
    </>
  );
};

export default Tasks;