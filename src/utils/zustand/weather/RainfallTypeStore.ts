import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RainfallTypeState {
  rainfallType: string;
  setRainfallType: (rainfallType: string) => void;
}

const useRainfallTypeStore = create<RainfallTypeState>()(
  persist(
    (set) => ({
      rainfallType: 'NONE',
      setRainfallType: (rainfallType: string) =>
        set(() => ({ rainfallType: rainfallType })),
    }),
    { name: 'rainfallTypeStore' }
  )
);

export default useRainfallTypeStore;
