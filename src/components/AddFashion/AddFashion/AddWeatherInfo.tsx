import { Box, InputBase, Paper, Toolbar, Typography } from '@mui/material';
import { WeatherType } from 'src/utils/types';

import weatherSky from '../../../assets/data/weatherSky';
import useWeatherDataStore from '../../../utils/zustand/weather/WeatherDataStore';

type WeatherProps = {
  getWeatherData: (data: WeatherType) => void;
};

export default function AddWeatherInfo({ getWeatherData }: WeatherProps) {
  const { weatherData } = useWeatherDataStore();

  return (
    <Box>
      <Toolbar sx={{ mt: -1 }}>
        <Typography fontFamily="BalooBhaijaan" fontWeight="700" fontSize="16pt">
          Sky Status:
        </Typography>
        <Paper
          component="form"
          sx={{
            ml: 2,
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 120,
          }}
        >
          <InputBase
            disabled
            sx={{ mt: 0.3, ml: 1, flex: 1 }}
            value={weatherSky(weatherData.sky) || ''}
          />
        </Paper>
      </Toolbar>
      <Toolbar sx={{ mt: -1 }}>
        <Typography fontFamily="BalooBhaijaan" fontWeight="700" fontSize="16pt">
          Temperature:
        </Typography>
        <Paper
          component="form"
          sx={{
            ml: 2,
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 120,
          }}
        >
          <InputBase
            disabled
            sx={{ mt: 0.3, ml: 1, flex: 1 }}
            value={weatherData.temperature || ''}
          />
          <Typography color="#989898" sx={{ mr: 1, mt: 0.5 }}>
            °C
          </Typography>
        </Paper>
      </Toolbar>
      <Toolbar sx={{ mt: -1 }}>
        <Typography fontFamily="BalooBhaijaan" fontWeight="700" fontSize="16pt">
          Wind Speed:
        </Typography>
        <Paper
          component="form"
          sx={{
            ml: 2,
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 120,
          }}
        >
          <InputBase
            disabled
            sx={{ mt: 0.3, ml: 1, flex: 1 }}
            value={weatherData.windSpeed || 0}
          />
          <Typography color="#989898" sx={{ mr: 1 }}>
            m/s
          </Typography>
        </Paper>
      </Toolbar>
    </Box>
  );
}
