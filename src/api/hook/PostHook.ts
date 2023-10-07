import { useMutation } from 'react-query';

import { PostService } from '../service/PostService';

export const useAddPost = (
  userId: string,
  name: string,
  image: string,
  skyStatus: string,
  temperature: number,
  rainfallType: string,
  windSpeed: number,
  review: number,
  onSuccess: () => void
) => {
  return useMutation({
    mutationFn: () =>
      PostService.addPost(
        userId,
        name,
        image,
        skyStatus,
        temperature,
        rainfallType,
        windSpeed,
        review
      ),
    onSuccess: onSuccess,
    onError: () => alert('새 포스트 등록에 실패했습니다.'),
  });
};
