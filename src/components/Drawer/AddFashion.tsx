import React, { useState } from 'react';
import axios from 'axios'
import { type } from '../../utils/types';
import {
    Box,
    Button,
    Divider,
    Grid,
    Typography,
} from '@mui/material';

import AddLocation from './AddFashion/AddLocation';
import AddReview from './AddFashion/AddReview';
import AddTitle from './AddFashion/AddTitle';
import AddWeatherInfo from './AddFashion/AddWeatherInfo';
import AddImage from './AddFashion/AddImage';

export default function AddFashion() {
    const [postTitle, setPostTitle] = useState('');
    const postTitleHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPostTitle(e.target.value);
    };
    const [postImage, setPostImage] = React.useState("");
    const [postReview, setPostReview] = React.useState("");
    const [postLocation, setPostLocation] = useState<type.LocationType>();
    const [postWeather, setPostWeather] = useState<type.WeatherType>();

    function getImageData(data: string) {
        setPostImage(data)
        console.log("[AddFashioin -> AddImage] postImage: ", data)
    }
    function getReviewData(data: string) {
        setPostReview(data)
        console.log("[AddFashioin -> AddReview] postReview: ", data)
    }
    function getTitleData(data: string) {
        setPostTitle(data)
        console.log("[AddFashioin -> AddTitle] postTitle: ", data)
    }
    function getLocationData(data: type.LocationType) {
        setPostLocation(data)
        console.log("[AddFashioin -> AddLocation] postLocation: ", data)
    }
    function getWeatherData(data: type.WeatherType) {
        setPostWeather(data)
        console.log("[AddFashioin -> AddWeatherInfo] postWeather: ", data)
    }

    const postAPI = async () => {
        try {
            await axios.post<type.CreatePostType>('/api/v1/posts',
            {
                userId: '1',
                name: postTitle,
                image: postImage,
                review: postReview,
                temperature: postWeather?.temperature,
                skyStatus: postWeather?.sky,
                humidity: postWeather?.humidity,
                rainfallType: postWeather?.rainfallType,
                windSpeed: postWeather?.windSpeed,
            }
        ).then((response) => {
            console.log(response)
            alert("post 완료")
            window.location.replace("/main");
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

                        <AddLocation getLocationData={getLocationData}/>
                        <AddWeatherInfo getWeatherData={getWeatherData}/>
                    </Grid>
                </Grid>
            </Box>
            <Button 
                variant="contained" 
                style={{position: 'absolute', textTransform:"none", borderRadius: '20px'}} 
                sx={{ml: 80, mt: 13, backgroundColor: "#8c79ba","&:hover": {backgroundColor: "#6e4dbf"}}} 
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