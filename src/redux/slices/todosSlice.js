import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTodos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.allTodos = [...state.allTodos, action.payload];
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
