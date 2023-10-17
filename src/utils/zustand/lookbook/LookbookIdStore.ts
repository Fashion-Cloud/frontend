import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LookbookIdState {
  id: string;
  setId: (id: string) => void;
}

const useLookbookIdStore = create<LookbookIdState>()(
  persist(
    (set) => ({
      id: '',
      setId: (id: string) => set(() => ({ id: id })),
    }),
    { name: 'lookbookIdStore' }
  )
);

export default useLookbookIdStore;
