import "./App.css";
import React from "react";
import Form from "./components/form";
import TodoList from "./components/todolist";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    if (localStorage.getItem("tasks")) {
      setTodos(JSON.parse(localStorage.getItem("tasks")));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos}></Form>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
