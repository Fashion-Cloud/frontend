import { useQuery } from 'react-query';
import useGeoLocation from 'src/assets/hooks/useGeoLocation';

import { LocationService } from '../service/LocationService';

export const useFindAllLocations = () => {
  const location = useGeoLocation();

  const longitude = location?.coordinates?.lng;
  const latitude = location?.coordinates?.lat;

  return useQuery({
    queryFn: () => LocationService.getAllLocations({ latitude, longitude }),
    queryKey: ['locations'],
    enabled: !!longitude && !!latitude,
    onError: () => alert('위치 정보를 불러오는데 실패했습니다.'),
  });
};
