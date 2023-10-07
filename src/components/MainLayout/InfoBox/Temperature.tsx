import { Box, Tooltip, Typography } from '@mui/material';
import lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import weatherSky from '../../../assets/data/weatherSky';
import { weatherDataState } from '../../../utils/Recoil';
import { WeatherType } from '../../../utils/types';

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
    <Tooltip title={weatherSky(weatherData?.sky)} arrow>
      <Box ref={element} style={{ height: 350 }}></Box>
    </Tooltip>
  );
};

export default function TemperatureBox() {
  const weatherData = useRecoilValue(weatherDataState);

  const [windChill, setWindChill] = useState<number>(0);

  useEffect(() => {
    setWindChill(weatherData.windChill | 0);
  }, [weatherData]);

  return (
    <Box sx={{ marginLeft: 11, marginBottom: 10, marginRight: 16 }}>
      <WeatherSkyLottie weatherData={weatherData} />
      <Typography
        display="flex"
        justifyContent="center"
        fontSize="25pt"
        sx={{ mt: 1 }}
      >
        {windChill} °C
      </Typography>
    </Box>
  );
}
