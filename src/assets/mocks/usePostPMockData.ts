import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from 'axios';
import { type } from '../../utils/types';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:3001'
}
const client = axios.create(axiosConfig);

export const usePostPMockData = () => {
  const [post, setPost] = useState<type.PostType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await client.get('/posts');
      console.log("response.data: ", response.data)
      setPost(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { post, isLoading };
};