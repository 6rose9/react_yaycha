import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, incrementByAmount } from "./counterSlice";

export default function Counter() {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <section style={{ marginBottom: 30, padding: 20, border: "1px solid grey", }}>
            <h2>Counter: {count}</h2>
            <button onClick={() => dispatch(increment())}>+1</button>{" "}
            <button onClick={() => dispatch(decrement())}>-1</button>{" "}
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </section>
    );
}