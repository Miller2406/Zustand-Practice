import { useCounterStore } from "../store/store";

const AsyncRepondComp = () => {
  const count = useCounterStore((state) => state.count);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrementAsync = useCounterStore((state) => state.decrementAsync);
  //
  return (
    <div>
      <h2>Async Move</h2>
      <div className="center">
        <button onClick={incrementAsync}>Increment After 1 secound</button>
        <span className="countDisplay">{count}</span>
        <button onClick={decrementAsync}>Decrement After 1 secound</button>
      </div>
    </div>
  );
};

export default AsyncRepondComp;
