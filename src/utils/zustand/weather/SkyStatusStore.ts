import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SkyStatusState {
  skyStatus: string;
  setSkyStatus: (skyStatus: string) => void;
}

const useSkyStatusStore = create<SkyStatusState>()(
  persist(
    (set) => ({
      skyStatus: 'NONE',
      setSkyStatus: (skyStatus: string) =>
        set(() => ({ skyStatus: skyStatus })),
    }),
    {
      name: 'skyStatusStore',
    }
  )
);

export default useSkyStatusStore;
