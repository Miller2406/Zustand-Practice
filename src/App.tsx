import "./App.css";
import { useCounterStore } from "./store";

function App() {
  const count = useCounterStore((state) => state.count);
  return (
    <>
      <OtherComponent count={count} />
    </>
  );
}

const OtherComponent = ({ count }: { count: number }) => {
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={incrementAsync}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default App;
