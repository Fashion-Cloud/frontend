import { Box } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useFindAllWeathers } from 'src/api/hook/WeatherHook';
import { locationDataState, weatherDataState } from 'src/Recoil';

import useGeoLocation from '../../assets/hooks/useGeoLocation';
import PlaceBox from './InfoBox/PlaceBox';
import WeatherBox from './InfoBox/WeatherBox';

export default function InfoBox() {
  const setWeatherData = useSetRecoilState(weatherDataState);
  const setLocationData = useSetRecoilState(locationDataState);

  const location = useGeoLocation();

  let latitude: number | undefined;
  let longitude: number | undefined;

  const { data: windChillData } = useFindAllWeathers();

  const locationAPI = async () => {
    if (location !== undefined) {
      try {
        await axios
          .get(`/api/v1/address?latitude=${latitude}&longitude=${longitude}`, {
            headers: {
              Accept: 'application/json',
            },
          })
          .then((response) => {
            console.log('response: ', response);
            const data = response.data.data;
            console.log('[WeatherTemp] locationAPI: ', data);
            setLocationData(data);
          });
      } catch {
        console.log('[WeatherTemp] locationAPI: api 불러오기 실패');
      }
    }
  };

  useEffect(() => {
    if (location?.coordinates) {
      latitude = location.coordinates?.lat;
      longitude = location.coordinates?.lng;
      console.log('[GeoLocation] latitude: ', latitude);
      console.log('[GeoLocation] longitude: ', longitude);

      locationAPI();
    }

    if (windChillData?.data) {
      setWeatherData(windChillData?.data);
    }
  }, [location, windChillData]);

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#FBFEFF',
        position: 'sticky',
        top: 0,
        overflow: 'hidden',
      }}
    >
      <PlaceBox />
      <WeatherBox />
    </Box>
  );
}
