import apiV1Instance from '../api-instance';

export class BookService {
  //전체 룩북
  public static getAllBooks = async (options: { userId?: number }) => {
    return apiV1Instance.get(`/lookbooks/me`);
  };

  // 선택 룩북
  public static getSomeBooks = async (options: { id?: number }) => {
    return apiV1Instance.get(`/lookbooks/${options.id}`);
  };
}
