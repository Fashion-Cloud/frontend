import apiV1Instance from 'api/api-instance';

export class LocationService {
  public static getAllLocations = async (options: {
    latitude?: number;
    longitude?: number;
  }) => {
    return apiV1Instance.get(
      `/address?latitude=${options.latitude}&longitude=${options.longitude}`
    );
  };
}
