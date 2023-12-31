import { useCounterStore } from "../store/store";

const InstantRespondComp = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  //
  return (
    <div>
      <h2>Instant Move</h2>
      <div className="center">
        <button onClick={count < 10 ? increment : undefined}>Increment</button>
        <span className="countDisplay">{count}</span>
        <button onClick={count > 0 ? decrement : undefined}>Decrement</button>
      </div>
    </div>
  );
};

export default InstantRespondComp;
