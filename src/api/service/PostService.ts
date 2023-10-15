import apiV1Instance from 'src/api/api-instance';

export class PostService {
  public static addPost = async (
    title: string,
    image: string,
    skyStatus: string,
    temperature: number,
    rainfallType: string,
    windSpeed: number,
    review: number
  ): Promise<void> => {
    await apiV1Instance.post('/posts', {
      title,
      image,
      skyStatus,
      temperature,
      rainfallType,
      windSpeed,
      review,
    });
  };
}
