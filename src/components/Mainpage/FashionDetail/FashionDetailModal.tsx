import { useEffect, useState } from 'react';
import axios from 'axios'
import { type } from '../../../utils/types';
import '../../../fonts/font.css';
import weatherSky from '../../../assets/data/weatherSky';
import rainfallType from '../../../assets/data/rainfallType';

import {
    Card,
    CardMedia,
    Divider,
    Typography,
    Box,
    Button
  } from "@mui/material";

import AirIcon from '@mui/icons-material/Air';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import LightModeIcon from '@mui/icons-material/LightMode';

type FashionDetailProps = {
    singleId: string;
};

export default function FashioinDetailModal({singleId}: FashionDetailProps) {
    const [singleData, setSingleData] = useState<type.SinglePostType>();
    
    const singlePostAPI = async () => {
        console.log("singleId: ", singleId)
        try {
            await axios.get(`/api/v1/posts/${singleId}`,
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        ).then((response) => {
            const data = response.data;
            console.log(data.data)
            setSingleData(data.data)
        });
        } catch {
            console.log("api 불러오기 실패")
        };
    }

    useEffect(() => {
        singlePostAPI()
    }, [])

    return (
        <div>
            {
                singleData !== undefined
                ?   <div>
                        <Card sx={{width: '280px', borderRadius: '5%', ml: 5.5}}>
                            <CardMedia
                                component="img"
                                height="330px"
                                image={singleData.image}
                            />
                        </Card>
                        <Typography fontFamily='CookieRun-Regular' fontSize='20pt' sx={{mt: 0.5, ml: 6}}>
                            {singleData.name}
                        </Typography>
                        <Typography fontFamily='CookieRun-Regular' fontSize='13pt' sx={{mt: 1, ml: 6.3, mb: 0.3}}>
                            Review: {singleData.review}
                        </Typography>

                        <Divider sx={{width: '310px', ml: 3.5}}/>
                        
                        <Box sx={{mt: 1, ml: 4}}>
                            <Button disabled size='small' style={{textTransform:"none", height: 28, backgroundColor: '#EEEEEE', borderRadius: '20px'}} sx={{mb: 0.5}}>
                                <AirIcon style={{color: '#000', height: 20}} sx={{ml: 1}}/>
                                <Typography fontFamily='BalooBhaijaan' fontWeight="700" fontSize='13pt' sx={{color: '#000', ml: 1, mr: 1, mt: 0.5}}>
                                    풍속 - {singleData.windChill} m/s
                                </Typography>
                            </Button>
                            <br/>
                            <Button disabled size='small' style={{textTransform:"none", height: 28, backgroundColor: '#EEEEEE', borderRadius: '20px'}} sx={{mb: 0.5}}>
                                <LightModeIcon style={{color: '#000', height: 20}} sx={{ml: 1}}/>
                                <Typography fontFamily='BalooBhaijaan' fontWeight="700" fontSize='13pt' sx={{color: '#000', ml: 1, mr: 1, mt: 0.5}}>
                                    하늘상태 - {weatherSky(singleData.skyStatus)}
                                </Typography>
                            </Button>
                            <br/>
                            <Button disabled size='small' style={{textTransform:"none", height: 28, backgroundColor: '#EEEEEE', borderRadius: '20px'}}>
                                <WbCloudyIcon style={{color: '#000', height: 20}} sx={{ml: 1}}/>
                                <Typography fontFamily='BalooBhaijaan' fontWeight="700" fontSize='13pt' sx={{color: '#000', ml: 1, mr: 1, mt: 0.5}}>
                                    강우유형 - {rainfallType(singleData.rainfallType)}
                                </Typography>
                            </Button>
                        </Box>
                        
                    </div>
                : null
            }
        </div>
        
        
    )
}