import React from "react";

export default function Todo({ todo, toggleTodo, del }) {
  function handeTodoClick() {
    toggleTodo(todo.id);
  }
  function handleDel() {
    del(todo.id);
  }
  //   function styling() {
  //     if (todo.complete) {
  //       return "color:red";
  //     } else {
  //       return "color:black";
  //     }
  //   }
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handeTodoClick}
        />
        <span class="text-white">
          {todo.name} / {todo.date}{" "}
          <button
            onClick={() => {
              if (window.confirm("Are you sure")) {
                handleDel();
              }
            }}
          >
            Delete
          </button>
        </span>
      </label>
    </div>
  );
}
