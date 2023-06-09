import React, { useState } from 'react';
import axios from 'axios';

import { useRecoilValue } from "recoil";
import { weatherDataState } from "../../Recoil";
import { LocationType, WeatherType } from '@/utils/types';
import {
    Box,
    Button,
    Divider,
    Grid,
    Typography,
} from '@mui/material';

// import AddLocation from './AddFashion/AddLocation';
import AddReview from './AddFashion/AddReview';
import AddTitle from './AddFashion/AddTitle';
import AddWeatherInfo from './AddFashion/AddWeatherInfo';
import AddImage from './AddFashion/AddImage';

export default function AddFashion() {
    const [postTitle, setPostTitle] = useState('');
    const [postImage, setPostImage] = React.useState("");
    const [postReview, setPostReview] = React.useState(2);
    const [postLocation, setPostLocation] = useState<LocationType>();
    const [postWeather, setPostWeather] = useState<WeatherType>();

    const weatherData = useRecoilValue(weatherDataState);

    function getImageData(data: string) {
        setPostImage(data)
        console.log("[AddFashion -> AddImage] postImage: ", data)
    }
    function getReviewData(data: number) {
        setPostReview(data)
        console.log("[AddFashion -> AddReview] postReview: ", data)
    }
    function getTitleData(data: string) {
        setPostTitle(data)
        console.log("[AddFashion -> AddTitle] postTitle: ", data)
    }
    // function getLocationData(data: LocationType) {
    //     setPostLocation(data)
    //     console.log("[AddFashion -> AddLocation] postLocation: ", data)
    // }
    function getWeatherData(data: WeatherType) {
        setPostWeather(data)
        console.log("[AddFashion -> AddWeatherInfo] postWeather: ", data)
    }

    const postAPI = async () => {
        try {
            await axios.post('/api/v1/posts',
            {
                userId: "550e8400-e29b-41d4-a716-446655440000",
                name: postTitle,
                image: postImage,
                review: postReview,
                temperature: weatherData.temperature,
                skyStatus: weatherData.sky,
                rainfallType: weatherData.rainfallType,
                windSpeed: weatherData.windSpeed,
            }
        ).then((response) => {
            console.log(response)
            alert("post 완료")
            window.location.replace("/");
        });
        } catch {
            console.log("api 불러오기 실패")
        };
    }

    return(
        <div>
            <Box sx={{ flexGrow: 1, mt: 2,  mx: 1}}>
                <Grid  container spacing={2}>
                    <Grid item xs={6} md={6}>
                        <AddImage getImageData={getImageData}/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <AddTitle getTitleData={getTitleData}/>
                        <AddReview getReviewData={getReviewData}/>

                        <Divider sx={{mt: 2, mb: 2}}/>

                        {/* <AddLocation getLocationData={getLocationData}/> */}
                        <AddWeatherInfo getWeatherData={getWeatherData}/>
                    </Grid>
                </Grid>
            </Box>
            <Button 
                variant="contained" 
                style={{position: 'absolute', textTransform:"none", borderRadius: '20px'}} 
                sx={{ml: 80, mt: 13, backgroundColor: "#87A9D7","&:hover": {backgroundColor: "#1f5091"}}} 
                onClick={()=>{
                    postAPI()
                }}
            >
                <Typography sx={{ml: 7, mr: 7}}>
                    Post
                </Typography>
            </Button>
        </div>
    )
}