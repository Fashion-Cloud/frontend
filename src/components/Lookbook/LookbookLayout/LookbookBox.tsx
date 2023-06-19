import axios from 'axios';
import { 
    Box,
    Grid,
    Card,
    CardMedia,
    Typography,
} from "@mui/material";
import { useEffect, useState } from 'react';
import { WeatherPostType } from '../../../utils/types';
import LookbookDetailpage from '../../../pages/LookbookDetailpage';

export default function LookbookBox() {
    // const [lookSelected, setLookSelected] = useState<string>('');
    const handleLookClick = (id: string) => {
        <LookbookDetailpage/>
    }

    const [lookbook, setLookbook] = useState<WeatherPostType[]>([]);
    const fashionAPI = async () => {
        console.log("fashionAPI Start");
        
        try {
            await axios.get(`/api/v1/books`,
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

    return(
        <Box display='flex'>
            <Box width="50px"/>

            <Grid container spacing={3}>
                {lookbook.map((lookbook, index) => (
                    <Grid item key={index} xs={4} >
                        <Card sx={{ borderRadius: '10px', cursor: 'pointer'}} 
                            onClick={() => {
                                handleLookClick(lookbook.id)
                            }}
                        >
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    image={lookbook.imageUrl}
                                    sx={{
                                        height: '350px',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
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
            <Box width="50px"/>
        </Box>
    )
}