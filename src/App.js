import React, { useState, useRef, useEffect } from "react";

import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
const local_storage_items = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const todoDateRef = useRef();
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(local_storage_items));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(local_storage_items, JSON.stringify(todos));
  }, [todos]);

  // add the todo function
  function addTodo(e) {
    const name = todoNameRef.current.value;
    const date = todoDateRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: uuidv4(), name: name, date: date, complete: false },
      ];
    });
    // console.log(todos);
    todoNameRef.current.value = null;
    todoDateRef.current.value = null;
  }
  // check if todo done fun
  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }
  function handleClearTodos() {
    const newTodo = todos.filter((todo) => !todo.complete);
    setTodos(newTodo);
  }
  function del(id) {
    const newTodo = todos.filter((todo) => todo.id != id);
    setTodos(newTodo);
  }

  return (
    <>
      <TodoList del={del} todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <input ref={todoDateRef} type="date" />
      <button onClick={addTodo}>Add</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter((todo) => !todo.complete).length} Left to do</div>
    </>
  );
}
// props
// state:
//1 context api
//2 redux
// life cycle methods in react
//
export default App;
