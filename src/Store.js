import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    filter: "all", 
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setFilter: (state, action) => {
      state.filter = action.payload; 
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, setFilter } = todoSlice.actions;

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export default store;
