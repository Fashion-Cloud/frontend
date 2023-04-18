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
    p: 4,
};

export default function AllFashion() {
    const [post, setPost] = useState<type.PostType[]>([]);
    const [openDetail, setOpenDetail] = React.useState(false);
    const handleOpenDetail = () => setOpenDetail(true);
    const handleCloseDetail =  () => setOpenDetail(false);

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

    useEffect(() => {
        fashionAPI()
    }, [])

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
                                    width: '230px', borderRadius: '10%',
                                    ":hover": { boxShadow: "#807ce6 0px 5px 5px 3px",
                                    }
                                }}
                                onClick={handleOpenDetail}
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

    return(
        <Box
            position='absolute'
            style={{
                // float: 'right',
            }}
            sx={{ml: '610px', mt: '180px'}}
        >
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
            <React.Fragment>
                <Modal
                    open={openDetail}
                    onClose={handleCloseDetail}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                    closeAfterTransition
                    >
                    <Box sx={style}>
                        <div style={{ textAlign: "right" }}>
                            <IconButton onClick={() => {setOpenDetail(false);}}>
                                <CloseIcon style={{color: '#000'}} fontWeight="300" />
                            </IconButton>
                        </div>
                        {/* <AddFashion/> */}
                    </Box>
                </Modal>
            </React.Fragment>
        </Box>
    )
}

