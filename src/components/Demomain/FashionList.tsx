import React, { useEffect, useState }  from "react";
import axios from "axios";
import { type } from '../../utils/types';
import { 
    Box, 
    Card, 
    CardMedia, 
    Grid, 
    Modal, 
    Toolbar, 
    Typography ,
    IconButton
} from "@mui/material";

import SearchBox from "./SearchBox";
import PaginationBox from "./PaginationBox";
import AddFashionButton from "./AddFashionButton";

import CloseIcon from "@mui/icons-material/Close";
import FashioinDetailModal from "../Mainpage/FashionDetail/FashionDetailModal";

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

export default function FashionList() {
    let pageIndex: number = 0;
    let pageLastIndex: number = 0;

    const [post, setPost] = useState<type.WeatherPostType[]>([]);
    const [singleId, setSingleId] = useState("");

    const [openDetail, setOpenDetail] = React.useState(false);
    const handleOpenDetail = () => setOpenDetail(true);
    const handleCloseDetail =  () => setOpenDetail(false);

    const [skyCode, setSkyCode] = useState<number>(4);
    const [rainfallCode, setRainfallCode] = useState<number>(0);
    const [windChill, setWindChill] = useState<number>(19);

    const [pageCount, setPageCount] = useState<number>(1); // 전체 페이지
    const [page, setPage] = useState<number>(1); // 현재 페이지

    function getWeatherData(sky: number, rain: number) {
        setSkyCode(sky)
        setRainfallCode(rain)
        // console.log("[SearchBox -> FashionList] skyCode: ", sky)
        // console.log("[SearchBox -> FashionList] rainfallCode: ", rain)
    }
    function getTempData(temp: number) {
        setWindChill(temp)
        // console.log("[SearchBox -> FashionList] windChill: ", temp)
    }

    function getPageNum(page: number) {
        setPage(page)
        console.log("[SearchBox -> FashionList] page: ", page)
    }
    
    const Logo = () => {
        return(
            <Typography fontSize='23pt' sx={{ml: '60px'}}>
                Fashion <span style={{fontWeight: 'bold', color: '#7DAADB'}}>Cloud</span>
            </Typography>
        )
    }

    const fashionAPI = async () => {
        console.log("skyCode: ", skyCode)
        console.log("rainfallCode: ", rainfallCode)
        console.log("windChill: ", windChill)
        try {
            // await axios.get(`/api/v1/posts/weather?skyStatus=${skyCode}&rainfallType=${rainfallCode}&windChill=${windChill}`,
            await axios.get(`/api/v1/posts/weather?skyCode=${skyCode}&rainfallCode=${rainfallCode}&windChill=${windChill}`,
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        ).then((response) => {
            setPage(1)

            const data = response.data;
            console.log("data.data: ", data.data)

            const pageLen = (data.data).length/8;
            console.log("pageLen: ", pageLen);

            if(pageLen >= 1) {
                if(Number.isInteger(pageLen)) {
                    setPageCount(pageLen)
                    console.log("It's an integer!");
                } else {
                    setPageCount(Math.ceil(pageLen))
                    console.log("It's a floating-point number!");
                }
            }
            setPost(data.data)
        });
        } catch {
            console.log("api 불러오기 실패")
        };
    }

    const FashionList = () => {
        let fashion: type.WeatherPostType[] = [];
        var array = [];

        fashion = post
        if (fashion !== undefined && fashion.length !== 0) {
            if (page === 1) {
                pageIndex = 0

            } else {
                pageIndex = 8*(page-1)
            }

            if (page === pageCount) {
                pageLastIndex = pageIndex + fashion.length%8
            } else {
                pageLastIndex = 8 + pageIndex
            }
            for (let index: number = pageIndex; index < pageLastIndex; index++) {
                // eslint-disable-next-line no-lone-blocks
                {
                    array.push(
                        <Grid item key={fashion[index].id} style={{ margin: "15px"}} xs={12} sm={4} md={3} lg={2.1}>
                            <Card 
                                sx={{    
                                    width: '220px', borderRadius: '10%', cursor: 'pointer',
                                    ":hover": { boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
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
                                        height="260px"
                                        image={fashion[index].imageUrl}
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

    useEffect(() => {
        fashionAPI()
    }, [skyCode, rainfallCode, windChill])

    return(
        <Box sx={{height: '100vh',backgroundColor: '#F5F8FC'}}>
            <Box height='75px'/>
            <Logo/>
    
            <Toolbar>
                <SearchBox getWeatherData={getWeatherData} getTempData={getTempData} getPageNum={getPageNum}/>
                
                <AddFashionButton/>
            </Toolbar>

            <Grid
                container
                spacing={-3}
                direction="row"
                justifyContent="space-evenly"
                style={{
                    marginLeft: "5px",
                }}
            >
                {FashionList()}
            </Grid>

            <PaginationBox pageCount={pageCount} getPageNum={getPageNum}/>

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