import apiV1Instance from 'src/api/api-instance';

export class PostService {
  public static addPost = async (
    userId: string,
    name: string,
    image: string,
    skyStatus: number,
    temperature: number,
    rainfallType: number,
    windSpeed: number,
    review: number
  ): Promise<void> => {
    await apiV1Instance.post('/posts', {
      userId,
      name,
      image,
      skyStatus,
      temperature,
      rainfallType,
      windSpeed,
      review,
    });
  };
}
