import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        description: action.payload,
        isComplete: false,
      };
      return [...state, newTodo]; // 
    },
    removeTodo: (state, action) => {
      const todoId = action.payload;
      return state.filter((todo) => todo.id !== todoId);
    },
    toggleTodo: (state, action) => {
      const todoId = action.payload;
      return state.map((todo) =>
        todo.id === todoId ? { ...todo, isComplete: !todo.isComplete } : todo
      );
    },
  },
});

export const selectAllTodos = (state) => state.todos;

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
