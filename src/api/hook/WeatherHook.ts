import { useQuery } from 'react-query';
import useGeoLocation from 'src/assets/hooks/useGeoLocation';

import { WeatherService } from '../service/WeatherService';

export const useFindAllWeathers = () => {
  const location = useGeoLocation();

  const longitude = location?.coordinates?.lng;
  const latitude = location?.coordinates?.lat;

  return useQuery({
    queryFn: () => WeatherService.getAllWeathers({ latitude, longitude }),
    queryKey: ['weathers'],
    enabled: !!longitude && !!latitude,
    onError: () => alert('날씨 정보를 불러오는데 실패했습니다.'),
  });
};
