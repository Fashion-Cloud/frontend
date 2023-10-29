import apiV1Instance from '../api-instance';
import baseInstance from '../baseInstance';
import apiV1Instance from "../api-instance";

export class UserService {
  public static login = async (
    email: string,
    password: string
  ): Promise<void> => {
    const response = await baseInstance.post('/auth/login', {
      email,
      password,
    });
    return response.data;
  };

  public static signup = async (
    email: string,
    password: string,
    username: string
  ): Promise<void> => {
    await baseInstance.post('/auth/signup', { email, password, username });
  };

  public static logout = async (): Promise<void> => {
    await apiV1Instance.post('/auth/logout');
  };

  //토큰으로 자신의 프로필 정보 조회
  public static getUserInfo = async (userId: number) => {
    const response = await apiV1Instance.get('/users/info/me');
    return response.data;
  }
}
