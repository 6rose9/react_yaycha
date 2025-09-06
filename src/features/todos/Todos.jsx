import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodos, clearTodos } from "./todoSlice";

export default function Todos() {

    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos.items);
    const status = useSelector((state) => state.todos.status);
    const error = useSelector((state) => state.todos.error);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchTodos());
        }
    }, [status, dispatch]);

    return (
        <section>
            <h2>Todos</h2>
            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p style={{ color: "red" }}>Error: {error}</p>}
            <ul>
                {todos.map((t) => (
                    <li key={t.id}>{t.title}</li>
                ))}
            </ul>
            <div style={{ marginTop: 8 }}>
                <button onClick={() => dispatch(fetchTodos())}>Reload</button>{" "}
                <button onClick={() => dispatch(clearTodos())}>Clear</button>
            </div>
        </section>
    );
}