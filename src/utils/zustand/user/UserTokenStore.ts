import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserTokenState {
  userToken: string;
  setUserToken: (token: string) => void;
}

const useUserTokenStore = create<UserTokenState>()(
  persist(
    (set) => ({
      userToken: '',
      setUserToken: (token: string) => set(() => ({ userToken: token })),
    }),
    {
      name: 'userTokenStore',
    }
  )
);

export default useUserTokenStore;
