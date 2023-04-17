import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from 'axios';
import { type } from '../../utils/types';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:3001'
}
const client = axios.create(axiosConfig);

export const useWeatherMockData = () => {
  const [weather, setweather] = useState<type.WeatherType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await client.get('/weather');
      setweather(response.data[0]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { weather, isLoading };
};