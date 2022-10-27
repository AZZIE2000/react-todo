import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toggleTodo, del }) {
  return todos.map((todo) => {
    return <Todo del={del} key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
  });
}
