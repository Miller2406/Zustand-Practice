import { useCounterStore } from "../store/store";

const InstantRespondComp = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const isLoading = useCounterStore((state) => state.isLoading);
  //
  return (
    <div className=" w-[100%]">
      <h2 className="text-3xl text-center bg-slate-400 font-bold py-2">
        Instant Move
      </h2>
      <div className="bg-slate-300 flex justify-center py-6 text-xl">
        {isLoading || count == 9 ? (
          <button
            disabled
            onClick={count < 9 ? increment : undefined}
            className="bg-slate-400 py-1 px-3 rounded-xl text-xl mx-2 font-medium"
          >
            Increment
          </button>
        ) : (
          <button
            onClick={count < 9 ? increment : undefined}
            className="font-medium bg-green-700 rounded-2xl px-3 py-1 hover:bg-green-600 active:scale-105 mx-2"
          >
            Increment
          </button>
        )}
        <span className="bg-slate-400 py-1 px-3 rounded-xl text-xl mx-2">
          {count}
        </span>
        {isLoading || count == 0 ? (
          <button
            disabled
            onClick={count > 0 ? decrement : undefined}
            className="bg-slate-400 py-1 px-3 rounded-xl font-medium text-xl mx-2"
          >
            Decrement
          </button>
        ) : (
          <button
            onClick={count > 0 ? decrement : undefined}
            className="text-white font-medium bg-red-700 rounded-2xl px-3 py-1 hover:bg-red-600 active:scale-105 mx-2"
          >
            Decrement
          </button>
        )}
      </div>
    </div>
  );
};

export default InstantRespondComp;
