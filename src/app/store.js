import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/counterSlice";
import todosReducer from "../features/todos/todoSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer,
    }
});