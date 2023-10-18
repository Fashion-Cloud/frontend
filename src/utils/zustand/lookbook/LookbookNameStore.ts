import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LookbookNameState {
  lookbookName: string;
  setLookbookName: (lookbookName: string) => void;
}

const useLookbookNameStore = create<LookbookNameState>()(
  persist(
    (set) => ({
      lookbookName: '봄',
      setLookbookName: (lookbookName: string) =>
        set(() => ({ lookbookName: lookbookName })),
    }),
    {
      name: 'lookbookNameStore',
    }
  )
);

export default useLookbookNameStore;
