import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { WeatherType } from '../../types';

interface WeatherDataState {
  weatherData: WeatherType;
  setWeatherData: (weatherData: WeatherType) => void;
}

const useWeatherDataStore = create<WeatherDataState>()(
  persist(
    (set) => ({
      weatherData: {
        sky: 'SUNNY',
        temperature: 0,
        hourRainfall: 0,
        humidity: 0,
        rainfallType: 'NONE',
        windSpeed: 0,
        windChill: 0,
      },
      setWeatherData: (weatherData: WeatherType) =>
        set(() => ({ weatherData: weatherData })),
    }),
    { name: 'weatherDataStore' }
  )
);

export default useWeatherDataStore;
