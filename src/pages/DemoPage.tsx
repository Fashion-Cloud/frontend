import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { type } from '../utils/types';
import {
    CssBaseline, 
    Container,
    Box,
    Typography,
    Divider,
    Grid,
    Card,
    CardMedia,

} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import '../fonts/font.css';
import MainDrawer from '../components/Drawer/MainDrawer';

const theme = createTheme({
    palette: {
      background: {
        default: "#EFF0F0",
      }
    },
});
const imgURL = 'https://i.ytimg.com/vi/siQAMeQS_NQ/maxresdefault.jpg';



export default function DemoPage() {
    const [post, setPost] = useState<type.PostType[]>([]);

    const fashionAPI = async () => {
        try {
            await axios.get<type.PostType[]>('/api/v1/posts',
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        ).then((response) => {
            const data = response.data;
            console.log(data)
            setPost(data)
        });
        } catch {
            console.log("api 불러오기 실패")
        };
    }
    const FashionList = () => {
        var array = [];
    
        if (post !== undefined) {
            for (let index: number = 0; index < Object.keys(post).length; index++) {
                // eslint-disable-next-line no-lone-blocks
                {
                    array.push(
                        <Grid item key={post[index].id} style={{ margin: "15px"}}>
                            <Card 
                                sx={{    
                                    width: '230px', borderRadius: '10%', cursor: 'pointer',
                                    ":hover": { boxShadow: "gray 0px 5px 0px 3px",
                                    }
                                }}
                            >
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        height="280px"
                                        image={post[index].image}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '80px',
                                            bgcolor: 'rgba(0, 0, 0, 0.54)',
                                            color: 'white',
                                            padding: '10px',
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ml: 1}}>{post[index].name}</Typography>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    )
                }
            }
        }
        
        return array;
    }

    useEffect(() => {
        fashionAPI()
    }, [])

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
                style={{
                    width: '100wh',
                    height: '100vh',
                }}
            >
            <Box height='15px' style={{color: '#fff', backgroundColor: '#000'}}/>
                <MainDrawer/>

                {/* Header */}
                <Box display='flex' justifyContent='center' alignItems='center' height="100px" style={{marginTop: 50}}>
                    <Typography fontSize='15    pt'>Weather</Typography>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ml: 10, mr: 10}}/>
                    <Typography fontFamily='Playfair' fontSize='30pt' fontWeight='bold'>Fashion Cloud</Typography>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ml: 10, mr: 10}}/>
                    <Typography fontSize='15pt'>2023. 04. 30</Typography>
                </Box>

                {/* Image */}
                <Box display='flex' justifyContent='center' style={{marginTop: 50}}>
                    <img width='770px' src={imgURL}/>
                </Box>

                {/* List */}
                <Box width="770px" display='flex' justifyContent='center' style={{marginTop: 50, marginLeft: 100}}>
                    <Grid
                        style={{
                            margin: "0px",
                            display: "grid",
                            gridTemplateRows: "1fr ",
                            gridTemplateColumns: "1fr 1fr 1fr",
                        }}
                    >
                        {FashionList()}
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    )
}