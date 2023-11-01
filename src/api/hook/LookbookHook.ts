import {useRouter} from "next/router";
import { useQuery } from 'react-query';

import useUserIdStore from '../../utils/zustand/user/UserIdStore';
import { BookService } from '../service/LookbookService';


export const useFindAllBooks = () => {
  const { userId } = useUserIdStore();

  return useQuery({
    queryFn: () => BookService.getAllBooks({ userId }),
    queryKey: ['books'],
    enabled: !!userId,
    onError: () => alert('룩북 정보를 불러오는데 실패했습니다.'),
  });
};

export const useFindSomeBooks = () => {
  const router = useRouter();
  const { id } = router.query;

  return useQuery({
    queryFn: () => BookService.getSomeBooks({ id: Number(id) }),
    queryKey: ['books'],
    enabled: !!id,
    onError: () => alert('상세 룩북 정보를 불러오는데 실패했습니다.'),
  });
};
