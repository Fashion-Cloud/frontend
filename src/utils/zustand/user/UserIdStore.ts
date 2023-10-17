import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserIdState {
  userId: number;
  setUserId: (id: number) => void;
}

const useUserIdStore = create<UserIdState>()(
  persist(
    (set) => ({
      userId: 1,
      setUserId: (id: number) => set(() => ({ userId: id })),
    }),
    {
      name: 'userIdStore',
    }
  )
);

export default useUserIdStore;
