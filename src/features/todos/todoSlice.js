import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action to fetch todos
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    if (!res.ok) throw new Error("Failed to fetch todos");
    return res.json();
});

const todosSlice = createSlice({
    name: "todos",
    initialState: { items: [], status: "idle", error: null },
    reducers: {
        clearTodos: (state) => {
            state.items = [];
            state.status = "idle";
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { clearTodos } = todosSlice.actions;
export default todosSlice.reducer;
