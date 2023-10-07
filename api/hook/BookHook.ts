import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { userIdState } from '../../src/utils/Recoil';
import { BookService } from '../service/BookService';

export const useFindAllBooks = () => {
  const userId = useRecoilValue(userIdState);

  return useQuery({
    queryFn: () => BookService.getAllBooks({ userId }),
    queryKey: ['books'],
    enabled: !!userId,
    onError: () => alert('룩북 정보를 불러오는데 실패했습니다.'),
  });
};

export const useFindSomeBooks = () => {
  const { id } = useParams();

  return useQuery({
    queryFn: () => BookService.getSomeBooks({ id }),
    queryKey: ['books'],
    enabled: !!id,
    onError: () => alert('상세 룩북 정보를 불러오는데 실패했습니다.'),
  });
};