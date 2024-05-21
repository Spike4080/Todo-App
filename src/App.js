import "./reset.css";
import "./App.css";
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";
import CheckAllAndRemaining from "./components/CheckAllAndRemaining.js";
import TodoFilters from "./components/TodoFilters.js";
import ClearCompleteBtn from "./components/ClearCompleteBtn.js";
import { useEffect, useState } from "react";

function App() {
  let [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((todos) => {
        setTodos(todos);
      });
  }, []);

  let addTodo = (todo) => {
    //update data at server side
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    //update data at client side
    setTodos((prevState) => [...prevState, todo]);
  };
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
        <CheckAllAndRemaining />

        <div className="other-buttons-container">
          <TodoFilters />
          <ClearCompleteBtn />
        </div>
      </div>
    </div>
  );
}

export default App;
