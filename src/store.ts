import { create } from "zustand";

type CounterStore = {
  decrement: () => void;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  count: number;
};
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
