import React from "react";
import styles from "./form.module.css";

function TodoList({ todos, setTodos }) {
  function doneButtonHandler(e) {
    const taskKey = e.target.parentElement.id;

    const newTasks = todos.map((task) => {
      if (task.key !== taskKey) return task;
      return { ...task, completed: !task.completed };
    });
    setTodos(newTasks);
  }

  function closeButtonHandler(e) {
    const taskKey = e.target.parentElement.id;
    setTodos(todos.filter((task) => task.key !== taskKey));
  }

  return (
    <ul className={styles.taskContainer}>
      {todos.map((task) => (
        <li className={styles.task} key={task.key} id={task.key}>
          <p className={task.completed ? styles.taskCompleted : ""}>
            {task.text}
          </p>
          <button onClick={doneButtonHandler}>Done</button>
          <button onClick={closeButtonHandler}>Close</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
