import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Grid,
    Card,
    CardMedia,
    Typography,
    Box,
    Modal,
    IconButton
} from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
// import PlaceIcon from '@mui/icons-material/Place';
// import FavoriteIcon from '@mui/icons-material/Favorite';

import { type } from '../../utils/types';
import FashioinDetailModal from './FashionDetail/FashionDetailModal';

import SearchBar from '../Mainpage/GridRight/SearchBar';
import WeatherSelect from '../Mainpage/GridRight/WeatherSelect';
import WeatherSlider from '../Mainpage/GridRight/WeatherSlider';
import PaginationCom from '../../components/Mainpage/PaginationCom';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: 600,
    width: 400,
    bgcolor: "#FFF",
    borderRadius: "25px",
    boxShadow: 24,
    p: 2,
};

export default function AllFashion() {
    const [post, setPost] = useState<type.WeatherPostType[]>([]);
    const [singleId, setSingleId] = useState("");

    const [openDetail, setOpenDetail] = React.useState(false);
    const handleOpenDetail = () => setOpenDetail(true);
    const handleCloseDetail =  () => setOpenDetail(false);

    const [searchTemp, setSearchTemp] = useState<number>(26);
    const [weatherData, setWeatherData] = useState<type.WeatherPostType[]>();

    const [pageCom, setPageCom] = useState<number>(1);

    
    function getSingleId(data: string){
        setSingleId(data)
    }
    function getTempData(data: number) {
        setSearchTemp(data)
        console.log("[WeatherSlider -> AllFashion] searchTemp: ", data)
    }
    function getWeatherData(data: Array<type.WeatherPostType>) {
        setWeatherData(data)
        console.log("[WeatherSelect -> AllFashion] weatherData: ", data)
    }
    async function getPageData(data: number) {
        setPageCom(data)
        console.log("[PaginatoinCom -> AllFashion] pageCom: ", data)

        try {
            await axios.get<type.PostType[]>(`http://localhost:8080/api/v1/posts/${data}`,
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

    const fashionAPI = async () => {
        try {
            await axios.get<type.PostType[]>(`/api/v1/posts/weather`,
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

    useEffect(() => {
        fashionAPI()
    }, [])

    const FashionList = () => {
        let fashion: type.WeatherPostType[] = [];
        var array = [];

        if (weatherData === undefined){
            fashion = post;
        } else {
            fashion = weatherData
        }
        if (fashion !== undefined) {
            for (let index: number = 0; index < Object.keys(fashion).length; index++) {
                // eslint-disable-next-line no-lone-blocks
                {
                    array.push(
                        <Grid item key={fashion[index].id} style={{ margin: "15px"}}>
                            <Card 
                                sx={{    
                                    width: '230px', borderRadius: '10%', cursor: 'pointer',
                                    ":hover": { boxShadow: "#807ce6 0px 5px 5px 3px",
                                    }
                                }}
                                onClick={() => {
                                    handleOpenDetail()
                                    setSingleId(fashion[index].id)
                                }}
                            >
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        height="280px"
                                        image={fashion[index].image}
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
                                        <Typography variant="h6" sx={{ml: 1}}>{fashion[index].name}</Typography>
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

    return(
        <Box
            position='absolute'
            sx={{ml: '610px', mt: '180px'}}
        >
            <Box position='absolute'>
                <WeatherSelect searchTemp = {searchTemp} getWeatherData={getWeatherData}/>
                <WeatherSlider getTempData = {getTempData}/>
                <SearchBar/>
            </Box>
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

            {/* <PaginationCom getPageData={getPageData}/> */}
            <Modal
                open={openDetail}
                onClose={handleCloseDetail}
                closeAfterTransition
                >
                <Box sx={style}>
                    <div style={{ textAlign: "right" }}>
                        <IconButton onClick={() => {setOpenDetail(false);}}>
                            <CloseIcon style={{color: '#000'}} fontWeight="300" />
                        </IconButton>
                    </div>
                    <FashioinDetailModal singleId={singleId}/>
                </Box>
            </Modal>
        </Box>
    )
}

