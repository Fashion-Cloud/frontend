import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useFindAllWeathers } from 'src/api/hook/WeatherHook';

import useWeatherDataStore from '../../utils/zustand/weather/WeatherDataStore';
import PlaceBox from './InfoBox/PlaceBox';
import WeatherBox from './InfoBox/WeatherBox';

export default function InfoBox() {
  const { setWeatherData } = useWeatherDataStore();

  const { data: windChillData } = useFindAllWeathers();

  useEffect(() => {
    if (windChillData?.data) {
      setWeatherData(windChillData?.data?.data);
    }
  }, [setWeatherData, windChillData]);

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#F5F8FC',
        top: 0,
        overflow: 'hidden',
      }}
    >
      <Box sx={{ marginRight: '40px', maxWeight: '360px' }}>
        <PlaceBox />
        <WeatherBox />
      </Box>
    </Box>
  );
}
