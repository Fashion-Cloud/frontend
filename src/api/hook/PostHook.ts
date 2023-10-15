import { useMutation } from 'react-query';

import { PostService } from '../service/PostService';

export const useAddPost = (
  title: string,
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
        title,
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
