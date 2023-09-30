import apiV1Instance from '../api-instance';

export class BookService {
  public static getAllBooks = async (options: { userId?: string }) => {
    return apiV1Instance.get(`/books/${options.userId}`);
  };

  // 해당룩북 불러오기 추가?
}
