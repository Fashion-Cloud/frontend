import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useAddPost } from 'src/api/hook/PostHook';
import { WeatherType } from 'src/utils/types';

import { weatherDataState } from '../../utils/Recoil';
import AddImage from './AddFashion/AddImage';
import AddReview from './AddFashion/AddReview';
import AddTitle from './AddFashion/AddTitle';
import AddWeatherInfo from './AddFashion/AddWeatherInfo';

export default function AddFashion() {
  const [postTitle, setPostTitle] = useState('');
  const [postImage, setPostImage] = React.useState('');
  const [postReview, setPostReview] = React.useState(2);
  // const [postWeather, setPostWeather] = useState<WeatherType>();

  const weatherData = useRecoilValue(weatherDataState);

  function getImageData(data: string) {
    setPostImage(data);
    console.log('[AddFashion -> AddImage] postImage: ', data);
  }
  function getReviewData(data: number) {
    setPostReview(data);
    console.log('[AddFashion -> AddReview] postReview: ', data);
  }
  function getTitleData(data: string) {
    setPostTitle(data);
    console.log('[AddFashion -> AddTitle] postTitle: ', data);
  }
  // function getLocationData(data: LocationType) {
  //     setPostLocation(data)
  //     console.log("[AddFashion -> AddLocation] postLocation: ", data)
  // }
  function getWeatherData(data: WeatherType) {
    // setPostWeather(data)
    console.log('[AddFashion -> AddWeatherInfo] postWeather: ', data);
  }

  const { mutate: addPost } = useAddPost(
    '550e8400-e29b-41d4-a716-446655440000',
    postTitle,
    postImage,
    weatherData.sky,
    weatherData.temperature,
    weatherData.rainfallType,
    weatherData.windSpeed,
    postReview,
    () => {
      alert('새 포스트 등록을 성공하였습니다.');
      window.location.replace('/');
    }
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1, mt: 2, mx: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <AddImage getImageData={getImageData} />
          </Grid>
          <Grid item xs={6} md={6}>
            <AddTitle getTitleData={getTitleData} />
            <AddReview getReviewData={getReviewData} />

            <Divider sx={{ mt: 2, mb: 2 }} />

            {/* <AddLocation getLocationData={getLocationData}/> */}
            <AddWeatherInfo getWeatherData={getWeatherData} />
          </Grid>
        </Grid>
      </Box>
      <Button
        variant="contained"
        style={{
          position: 'absolute',
          textTransform: 'none',
          borderRadius: '20px',
        }}
        sx={{
          ml: 80,
          mt: 13,
          backgroundColor: '#87A9D7',
          '&:hover': { backgroundColor: '#1f5091' },
        }}
        onClick={() => {
          addPost();
        }}
      >
        <Typography sx={{ ml: 7, mr: 7 }}>Post</Typography>
      </Button>
    </div>
  );
}
