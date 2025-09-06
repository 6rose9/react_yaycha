import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/counterSlice";
import todosReducer from "../features/todos/todoSlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer,
         users: userReducer,
    }
});