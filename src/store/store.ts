import { create } from "zustand";

// declare type for storing
type CounterStore = {
  decrementAsync: () => Promise<void>; // callback function that return Promise is returned void
  decrement: () => void; // value is callback function that return void
  increment: () => void;
  incrementAsync: () => Promise<void>;
  count: number;
  number: number;
};

// create the store with initail value and function by set function
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  number: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },
  decrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count - 1 }));
  },
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

/* 
// created by create function that import from Zustand
useCounterStore<countStore type> = {
state: {
  number: 0,
  count: 0,

  // with medthods
  decrementAsync: () => Promise<void>; // callback function that return Promise is returned void
  decrement: () => void; // value is callback function that return void
  increment: () => void;
  incrementAsync: () => Promise<void>;
}

}
*/
