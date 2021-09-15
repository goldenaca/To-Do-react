import React, { useState } from "react";
import styles from "./form.module.css";
import uuid from "react-uuid";

function Form({ setTodos, todos }) {
  const [inputText, setInputText] = useState("");

  function inputTextHandler(e) {
    setInputText(e.target.value);
  }

  function submitButtonHandler(e) {
    e.preventDefault();
    // Updating States (si, lo voy a hacer con dispatch >.<)
    if (inputText.length >= 2) {
      setTodos([...todos, { completed: false, key: uuid(), text: inputText }]);
      setInputText("");
    } else alert("Task must have at least 2 characters");
  }

  return (
    <form className={styles.inputForm}>
      <input
        onChange={inputTextHandler}
        type="text"
        value={inputText}
        placeholder="Add task.."
      />
      <button type="submit" onClick={submitButtonHandler}>
        Add
      </button>
    </form>
  );
}

export default Form;
