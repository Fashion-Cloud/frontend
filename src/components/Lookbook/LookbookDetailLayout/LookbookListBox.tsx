import axios from 'axios';
import { 
    Box,
    Grid,
    Card,
    CardMedia,
    Typography,
    Dialog,
    IconButton,
    Toolbar,
    Divider,
} from "@mui/material";
import { useEffect, useState } from 'react';
import { LookBookType, WeatherPostType } from '../../../utils/types';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useRecoilValue } from 'recoil';
import { lookbookIdState } from "../../..//Recoil";

export default function LookbookListBox() {
    const lookbookId = useRecoilValue(lookbookIdState);
    const [open, setOpen] = useState(false);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleOpen = (index: number) => {
        setCurrentImageIndex(index);
        setOpen(true);
    };
    const handleClose = () => {setOpen(false)};

    const [lookbook, setLookbook] = useState<LookBookType[]>([]);
    const fashionAPI = async () => {
        console.log("fashionAPI Start");
        
        try {
            await axios.get(`/api/v1/books/posts/${lookbookId}`,
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        ).then((response) => {
            const data = response.data;
            console.log("data: ", data)

            setLookbook(data);
        });
        } catch {
            console.log("api 불러오기 실패")
        };
    }

    useEffect(() => {
        fashionAPI()
    }, [])

    const handlePrev = () => {
        if (currentImageIndex>0) {
            setCurrentImageIndex(currentImageIndex -1);
        }
    }

    const handleNext = () => {
        if (currentImageIndex < lookbook.length -1 ){
            setCurrentImageIndex(currentImageIndex + 1);
        }
    }

    function lookbookList() {
        return(
            <Grid container spacing={3}>
                {lookbook && lookbook.map((lookbook, index) => (

                    <Grid item key={index} xs={4} >
                        <Card sx={{ borderRadius: '10px', cursor: 'pointer'}} onClick={() => {
                            handleOpen(index);
                        }}>
                            <Box sx={{ position: 'relative' }}>
                                {lookbook.imageUrl &&
                                    <CardMedia
                                        component="img"
                                        image={lookbook.imageUrl}
                                        sx={{
                                            height: '350px',
                                            width: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                }
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100px',
                                        bgcolor: 'transparent',
                                        backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0))', // Apply gradient
                                        color: 'white',
                                        padding: '10px',
                                        transition: 'background-image 0.3s', // Change transition property to background-image
                                        '&:hover': { // Change gradient on hover
                                            backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
                                        },
                                    }}
                                >
                                    <Typography variant="h6" sx={{mt: 5,ml: 1}}>{lookbook.name}</Typography>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        )
    }


    return(
        <Box display='flex'>
            <Box width="50px"/>

            {lookbookList()}

            <Box width="50px"/>
            <Dialog open={open} onClose={handleClose} >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', margin: 1, ml: 3 }}>
                    <WbSunnyIcon />
                    {lookbook.length > 0 &&
                        <Typography variant="h6" sx={{ marginLeft: 2 }}>{lookbook[currentImageIndex].temp} °C</Typography>
                    }
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {lookbook.length > 0 &&
                        <img src={lookbook[currentImageIndex].imageUrl} alt={lookbook[currentImageIndex].name} style={{ width: "auto", height: "600px" }} />
                    }
                </Box>
                <Divider/>
                <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                    <IconButton onClick={handlePrev} disabled={currentImageIndex === 0}><ArrowBackIosNewIcon /></IconButton>
                    <Divider orientation="vertical" flexItem sx={{ height: 63, mx: 10 }}/>
                    <IconButton onClick={handleNext} disabled = {currentImageIndex === lookbook.length -1}><ArrowForwardIosIcon /></IconButton>
                </Toolbar>
            </Dialog>
        </Box>
    )
}