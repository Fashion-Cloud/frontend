import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from 'axios';
import { type } from '../../utils/types';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:3001'
}
const client = axios.create(axiosConfig);

export const usePostGMockData = () => {
  const [post, setPost] = useState<type.PostType[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.get('/posts');
      console.log("response.data: ", response.data)
      setPost(response.data);
    };
    fetchData();
  }, []);

  return post;
};