import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';

import { userIdState } from '@/utils/Recoil';

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
