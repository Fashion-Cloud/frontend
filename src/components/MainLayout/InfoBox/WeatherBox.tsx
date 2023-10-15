import AirIcon from '@mui/icons-material/Air'; // 풍속 아이콘
import WaterIcon from '@mui/icons-material/Water'; // 습도 아이콘
import WaterDropIcon from '@mui/icons-material/WaterDrop'; // 강수량 아이콘
import { Box, Toolbar, Tooltip, Typography } from '@mui/material';
import lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import weatherSky from '../../../assets/data/weatherSky';
import { weatherDataState } from '../../../utils/Recoil';
import { WeatherType } from '../../../utils/types';

type WeatherProps = {
  weatherData: WeatherType | undefined;
};

type WeatherInfoProps = {
  humidity: number;
  windSpeed: number;
  hourRainfall: number;
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
      <Box ref={element} style={{ marginTop: 30, height: 180 }}></Box>
    </Tooltip>
  );
};

const WeatherInfoBox = ({
  humidity,
  windSpeed,
  hourRainfall,
}: WeatherInfoProps) => {
  return (
    <Box justifyContent="center" display="grid" sx={{ mt: 5 }}>
      <Toolbar>
        <WaterIcon sx={{ color: '#D5D5D5', mr: 3, fontSize: '23pt' }} />
        <Tooltip title="Humidity" arrow>
          <Typography sx={{ fontSize: '17pt' }}>{humidity} %</Typography>
        </Tooltip>
      </Toolbar>
      <Toolbar sx={{ my: -1 }}>
        <AirIcon sx={{ color: '#D5D5D5', mr: 3, fontSize: '23pt' }} />
        <Tooltip title="Wind Speed" arrow>
          <Typography sx={{ fontSize: '17pt' }}>{windSpeed} m/s</Typography>
        </Tooltip>
      </Toolbar>
      <Toolbar>
        <WaterDropIcon sx={{ color: '#B4C4FA', mr: 3, fontSize: '23pt' }} />
        <Tooltip title="Rainfall" arrow>
          <Typography sx={{ fontSize: '17pt' }}>{hourRainfall} mm</Typography>
        </Tooltip>
      </Toolbar>
    </Box>
  );
};

export default function WeatherBox() {
  const weatherData = useRecoilValue(weatherDataState);

  const [windChill, setWindChill] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);
  const [windSpeed, setWindSpeed] = useState<number>(0);
  const [hourRainfall, setHourRainfall] = useState<number>(0);

  useEffect(() => {
    setWindChill(weatherData?.windChill || 0);
    setHumidity(weatherData?.humidity || 0);
    setWindSpeed(weatherData?.windSpeed || 0);
    setHourRainfall(weatherData?.hourRainfall || 0);
  }, [weatherData]);

  return (
    <Box>
      <WeatherSkyLottie weatherData={weatherData} />
      <Typography
        display="flex"
        justifyContent="center"
        fontSize="25pt"
        sx={{ mt: 5 }}
      >
        {windChill} °C
      </Typography>

      <WeatherInfoBox
        humidity={humidity}
        windSpeed={windSpeed}
        hourRainfall={hourRainfall}
      />
    </Box>
  );
}
