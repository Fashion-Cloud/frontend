import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useFindAllWeathers } from 'src/api/hook/WeatherHook';
import {token} from 'src/assets/data/token';

import { weatherDataState } from '../../utils/Recoil';
import PlaceBox from './InfoBox/PlaceBox';
import WeatherBox from './InfoBox/WeatherBox';

export default function InfoBox() {
  const setWeatherData = useSetRecoilState(weatherDataState);

  const { data: windChillData } = useFindAllWeathers();

  useEffect(() => {
    if (windChillData?.data) {
      setWeatherData(windChillData?.data?.data);
    }
  }, [windChillData]);

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
