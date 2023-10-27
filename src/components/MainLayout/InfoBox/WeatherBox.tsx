import AirIcon from '@mui/icons-material/Air'; // 풍속 아이콘
import WaterIcon from '@mui/icons-material/Water'; // 습도 아이콘
import WaterDropIcon from '@mui/icons-material/WaterDrop'; // 강수량 아이콘
import { Box, Toolbar, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import useWeatherDataStore from '../../../utils/zustand/weather/WeatherDataStore';

type WeatherInfoProps = {
  humidity: number;
  windSpeed: number;
  hourRainfall: number;
};

const WeatherInfoBox = ({
  humidity,
  windSpeed,
  hourRainfall,
}: WeatherInfoProps) => {
  return (
    <Box
      display="flex"
      sx={{
        backgroundColor: '#FFFFFF',
        marginTop: '30px',
        borderRadius: '30px',
        boxShadow: 3,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
        }}
      >
        <div style={{ display: 'flex' }}>
          <WaterIcon sx={{ color: '#D5D5D5', mr: 1, fontSize: '18pt' }} />
          <Tooltip title="Humidity" arrow>
            <Typography sx={{ fontSize: '14pt' }}>{humidity} %</Typography>
          </Tooltip>
        </div>
        <div style={{ display: 'flex' }}>
          <AirIcon sx={{ color: '#D5D5D5', mr: 1, fontSize: '18pt' }} />
          <Tooltip title="Wind Speed" arrow>
            <Typography sx={{ fontSize: '14pt' }}>{windSpeed} m/s</Typography>
          </Tooltip>
        </div>
        <div style={{ display: 'flex' }}>
          <WaterDropIcon sx={{ color: '#B4C4FA', mr: 1, fontSize: '18pt' }} />
          <Tooltip title="Rainfall" arrow>
            <Typography sx={{ fontSize: '14pt' }}>{hourRainfall} mm</Typography>
          </Tooltip>
        </div>
      </Toolbar>
    </Box>
  );
};

export default function WeatherBox() {
  const { weatherData } = useWeatherDataStore();

  const [humidity, setHumidity] = useState<number>(0);
  const [windSpeed, setWindSpeed] = useState<number>(0);
  const [hourRainfall, setHourRainfall] = useState<number>(0);

  useEffect(() => {
    setHumidity(weatherData?.humidity || 0);
    setWindSpeed(weatherData?.windSpeed || 0);
    setHourRainfall(weatherData?.hourRainfall || 0);
  }, [weatherData]);

  return (
    <WeatherInfoBox
      humidity={humidity}
      windSpeed={windSpeed}
      hourRainfall={hourRainfall}
    />
  );
}
