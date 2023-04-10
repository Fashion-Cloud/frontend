import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from 'axios';

type WeatherType = {
  sky: string;
  place: string;
  temperature: number;
  hourRainfall: number;
  humidity: number;
  rainfallType: number;
  windSpeed: number;
};

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:3001'
}
const client = axios.create(axiosConfig);

export const useWeatherMockData = () => {
  const [weather, setweather] = useState<WeatherType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await client.get('/posts');
      setweather(response.data[0]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { weather, isLoading };
};