import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WindChillState {
  windChill: number;
  setWindChill: (windChill: number) => void;
}

const useWindChillStore = create<WindChillState>()(
  persist(
    (set) => ({
      windChill: 26,
      setWindChill: (windChill: number) =>
        set(() => ({ windChill: windChill })),
    }),
    { name: 'windChillStore' }
  )
);

export default useWindChillStore;
