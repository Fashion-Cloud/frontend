import PlaceIcon from '@mui/icons-material/Place';
import { Box, Toolbar, Tooltip, Typography } from '@mui/material';
import lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
import { useFindAllLocations } from 'src/api/hook/LocationHook';
import { LocationType, WeatherType } from 'src/utils/types';

import useWeatherDataStore from '../../../utils/zustand/weather/WeatherDataStore';

export default function PlaceBox() {
  type WeatherProps = {
    weatherData: WeatherType | undefined;
  };

  const WeatherSkyLottie = ({ weatherData }: WeatherProps) => {
    // weatherData에 따라 다른 애니메이션 데이터를 선택
    const getAnimationData = () => {
      if (weatherData?.sky === 'SUNNY') {
        return require('../../../assets/lotties/weather/sunny.json');
      } else if (weatherData?.sky === 'CLOUDY') {
        return require('../../../assets/lotties/weather/cloudy.json');
      } else if (weatherData?.sky === 'OVERCAST') {
        return require('../../../assets/lotties/weather/rainy.json');
      } else if (weatherData?.sky === 'SNOWY') {
        return require('../../../assets/lotties/weather/snow.json');
      }
      // 기본값으로 사용할 애니메이션 데이터
      return require('../../../assets/lotties/weather/sunny.json');
    };

    const animationData = getAnimationData();
    // const animationData = require('../../assets/lotties/allRain.json');

    //lottie
    const element = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const animation = lottie.loadAnimation({
        container: element.current as HTMLDivElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => {
        animation.destroy(); // lottie-web 인스턴스 제거
      };
    }, [weatherData]);
    return (
      <Tooltip title={weatherData?.sky} arrow>
        <Box ref={element} style={{ marginTop: 30, height: 220 }}></Box>
      </Tooltip>
    );
  };
  const { weatherData } = useWeatherDataStore();

  const [location, setLocation] = useState<LocationType>();
  const [windChill, setWindChill] = useState<number>(0);

  const { data: locationData } = useFindAllLocations();

  useEffect(() => {
    if (locationData?.data) {
      setLocation(locationData?.data?.data);
    }
  }, [locationData]);

  useEffect(() => {
    setWindChill(weatherData?.windChill || 0);
  }, [weatherData]);

  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: '30px',
        height: '470px',
        maxWeight: '360px',
        marginTop: '250px',
        padding: '30px',
        boxShadow: 3,
      }}
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <PlaceIcon sx={{ mr: 0.7, color: '#7D7D7D' }} />
        <Typography sx={{ fontSize: '15pt', color: '#7D7D7D' }}>
          {location?.fullAddress}
        </Typography>
      </Toolbar>

      <WeatherSkyLottie weatherData={weatherData} />

      <Typography
        display="flex"
        justifyContent="center"
        fontSize="45pt"
        fontFamily="Stardos-Stencil"
        sx={{ marginLeft: '15px' }}
      >
        {windChill}°
      </Typography>
    </Box>
  );
}
