import "./App.css";
import AsyncRepondComp from "./pages/AsyncRespond";
import InstantRespondComp from "./pages/InstantRespond";
import { useCounterStore } from "./store/store";

function App() {
  const count = useCounterStore((state) => state.count);
  const number = useCounterStore((state) => state.number + count);
  console.log(useCounterStore((state) => state.count));
  return (
    <div className="center">
      <div>
        {/* <OtherComponent count={number} /> */}
        <InstantRespondComp />
        <hr />
        <AsyncRepondComp />
      </div>
    </div>
  );
}

// declare the function before use
const OtherComponent = ({ count }: { count: number }) => {
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const decrementAsync = useCounterStore((state) => state.decrementAsync);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={incrementAsync}>Increment After 1 Secound</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={decrementAsync}>Decrement After 1 secound</button>
    </>
  );
};

export default App;
