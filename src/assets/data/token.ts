import useUserTokenStore from 'src/utils/zustand/user/UserTokenStore';

export const token = useUserTokenStore.getState().userToken;
