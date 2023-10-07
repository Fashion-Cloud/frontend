import apiV1Instance from 'api/api-instance';

export class PostService {
  public static addPost = async (
    userId: string,
    name: string,
    image: string,
    skyStatus: string,
    temperature: number,
    rainfallType: string,
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
