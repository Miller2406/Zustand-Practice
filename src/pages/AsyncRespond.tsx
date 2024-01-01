import { useCounterStore } from "../store/store";

const AsyncRepondComp = () => {
  const count = useCounterStore((state) => state.count);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrementAsync = useCounterStore((state) => state.decrementAsync);
  const isLoading = useCounterStore((state) => state.isLoading);
  //
  return (
    <div className=" w-[100%]">
      <h2 className="text-3xl text-center bg-slate-400 font-bold py-2">
        Instant Move
      </h2>
      <div className="bg-slate-300 flex justify-center py-6">
        {isLoading ? (
          <button
            disabled
            onClick={count < 9 ? incrementAsync : undefined}
            className="text-white font-medium bg-slate-400 rounded-2xl px-3 py-1 mx-2"
          >
            Increse After 1 secound
          </button>
        ) : (
          <button
            onClick={count < 9 ? incrementAsync : undefined}
            className="font-medium bg-green-700 rounded-2xl px-3 py-1 hover:bg-green-600 active:scale-105 mx-2"
          >
            Increse After 1 secound
          </button>
        )}
        <span className="bg-slate-400 py-1 px-3 rounded-xl text-xl mx-2">
          {count}
        </span>
        {isLoading ? (
          <button
            disabled
            onClick={count > 0 ? decrementAsync : undefined}
            className="text-white font-medium bg-slate-400 rounded-2xl px-3 py-1 mx-2"
          >
            Decrese After 1 secound
          </button>
        ) : (
          <button
            onClick={count > 0 ? decrementAsync : undefined}
            className="text-white font-medium bg-red-700 rounded-2xl px-3 py-1 hover:bg-red-600 active:scale-105 mx-2"
          >
            Decrese After 1 secound
          </button>
        )}
      </div>
    </div>
  );
};

export default AsyncRepondComp;
