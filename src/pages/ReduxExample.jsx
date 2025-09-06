import Counter from "../features/counters/Counter";
import Todos from "../features/todos/Todos";

export default function ReduxExample() {

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>

      <h1>Redux Toolkit + Vite Example</h1>

      <Counter />
      <Todos />

    </div>
  );
}
