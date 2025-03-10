import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, setFilter, toggleComplete } from "../Store";

const TodoList = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filter);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo({ id: Date.now(), text, completed: false }));
      setText("");
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true; // "all"
  });

  return (
    <div className="container text-white">
      <h2>To-Do List</h2>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Add Task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="form-control mb-2 bg-dark text-white"
      />
      <button className="btn btn-success mb-3" onClick={handleAdd}>
        Add Task
      </button>

      {/* Filter Buttons */}
      <div className="mb-3">
        <button
          className={`btn ${filter === "all" ? "btn-primary" : "btn-outline-light"} mx-1`}
          onClick={() => dispatch(setFilter("all"))}
        >
          All
        </button>
        <button
          className={`btn ${filter === "completed" ? "btn-primary" : "btn-outline-light"} mx-1`}
          onClick={() => dispatch(setFilter("completed"))}
        >
          Completed
        </button>
        <button
          className={`btn ${filter === "pending" ? "btn-primary" : "btn-outline-light"} mx-1`}
          onClick={() => dispatch(setFilter("pending"))}
        >
          Pending
        </button>
      </div>

      {/* To-Do List */}
      <ul className="list-group">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className={`list-group-item ${todo.completed ? "bg-success" : "bg-dark"} text-white`}
          >
            <span
              onClick={() => dispatch(toggleComplete(todo.id))}
              style={{ cursor: "pointer", textDecoration: todo.completed ? "line-through" : "none" }}
            >
              {todo.text}
            </span>
            <button
              className="btn btn-danger btn-sm float-end"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
