import apiV1Instance from 'src/api/api-instance';

export class WeatherService {
  public static getAllWeathers = async (options: {
    latitude?: number;
    longitude?: number;
  }) => {
    return apiV1Instance.get(
      `/weather?latitude=${options.latitude}&longitude=${options.longitude}`
    );
  };
}
