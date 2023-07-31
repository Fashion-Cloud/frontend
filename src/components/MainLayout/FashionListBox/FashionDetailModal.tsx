/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { SinglePostType } from '../../../utils/types';
import axios from 'axios'
import '../../../fonts/font.css';
import weatherSky from '../../../assets/data/weatherSky';
import rainfallType from '../../../assets/data/rainfallType';

import {
    Card,
    CardMedia,
    Divider,
    Typography,
    Box,
    Button,
    IconButton,
    Popover,
  } from "@mui/material";

import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import LightModeIcon from '@mui/icons-material/LightMode';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'; // 채워지지 않음
import BookmarkIcon from '@mui/icons-material/Bookmark'; // 채워짐
import LookbookPopover from './LookbookPopover';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FashionDetailProps = {
    singleId: string;
};

export default function FashioinDetailModal({singleId}: FashionDetailProps) {
    const success = () => toast.success("이미지 업로드 성공!");


    const [singleData, setSingleData] = useState<SinglePostType>();
    const [bookState, setBookState] = useState<boolean>(false);
    const handleBookClick = () => {
        setBookState(!bookState)
    }
    const handeLookClick = (data: string) => {
        setBookState(true);
        lookbookPostAPI(data)
    }

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleMarkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        // setBookState(!bookState)
    };
    const handleMarkClose = () => {
        setAnchorEl(null);
    };
    

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
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

    const lookbookPostAPI = async (lookbookId: string) => {
        try {
            await axios.post(`/api/v1/books/posts`,
            {
                lookBookId: lookbookId,
                postId: singleId,
            }
        ).then((response) => {
            console.log(response)
            success()
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
                ?   <Box>
                        <Card sx={{width: '280px', borderRadius: '5%', ml: 5.5}}>
                            <CardMedia
                                component="img"
                                height="330px"
                                image={singleData.image}
                            />
                        </Card>
                        <Box sx={{display: 'flex', justifyContent: 'flex-end', mr: '45px', mt: '15px',
                                ":hover": {cursor: 'pointer'}
                        }}>
                            {
                                bookState === false
                                ? <IconButton onClick={handleMarkClick}>
                                    <BookmarkBorderIcon/>
                                  </IconButton>
                                
                                : <IconButton onClick={handleBookClick}>
                                    <BookmarkIcon/>
                                  </IconButton>
                            }
                            
                        </Box>

                        <Box sx={{mt: '-45px'}}>
                            <Typography fontFamily='CookieRun-Regular' fontSize='20pt' sx={{mt: 0.5, ml: 6}}>
                                {singleData.name}
                            </Typography>
                            <Typography fontFamily='CookieRun-Regular' fontSize='13pt' sx={{mt: 1, ml: 6.3, mb: 0.3}}>
                                Review: {singleData.review}
                            </Typography>

                            <Divider sx={{width: '310px', ml: 3.5}}/>
                            
                            <Box sx={{mt: 2, ml: 4}}>
                                <Button disabled size='small' style={{textTransform:"none", height: 28, backgroundColor: '#EEEEEE', borderRadius: '20px'}} sx={{mb: 0.5}}>
                                    <DeviceThermostatIcon style={{color: '#000', height: 20}} sx={{ml: 1}}/>
                                    <Typography fontFamily='BalooBhaijaan' fontWeight="700" fontSize='13pt' sx={{color: '#000', ml: 1, mr: 1, mt: 0.5}}>
                                        체감온도 - {singleData.windChill} °C
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
                        </Box>
                        
                    </Box>
                : null
            }
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleMarkClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}>
                <LookbookPopover handeLookClick={handeLookClick} handleMarkClose={handleMarkClose}/>
            </Popover>
        </div>
        
        
    )
}