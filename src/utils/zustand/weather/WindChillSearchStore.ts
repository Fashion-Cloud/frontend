import { create } from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

interface WindChillSearchState {
  windChillSearch: number[];
  setWindChillSearch: (windChillSearch: number[]) => void;
}

const useWindChillSearchStore = create<WindChillSearchState>()(
  persist(
    (set) => ({
      windChillSearch: [20, 37],
      setWindChillSearch: (windChillSearch: number[]) =>
        set(() => ({ windChillSearch: windChillSearch })),
    }),
    { name: 'windChillSearchStore', storage: createJSONStorage(() => sessionStorage) }
  )
);

export default useWindChillSearchStore;
