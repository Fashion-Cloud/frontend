import {
    Grid,
    Card,
    CardMedia,
    Typography,
    Box,
    Toolbar,
} from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import FavoriteIcon from '@mui/icons-material/Favorite';

import fashionData1 from '../../assets/fashionData';

export default function AllFashion(){
    const FashioinList = () => {
        var array = [];
        
        for (let index = 0; index < Object.keys(fashionData1).length; index++) {
            array.push(
            <Grid item key={fashionData1[index].id} style={{ margin: "15px"}}>
                <Card 
                    sx={{ 
                        width: '270px', borderRadius: '10%',
                        ":hover": { boxShadow: "#807ce6 0px 5px 5px 3px", 
                        // cursor: 'pointer'
                        }
                    }}
                >
                    <Box sx={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            height="360px"
                            image={fashionData1[index].image}
                        />
                        <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            bgcolor: 'rgba(0, 0, 0, 0.54)',
                            color: 'white',
                            padding: '10px',
                        }}
                        >
                            <Typography variant="h5" sx={{ml: 1}}>{fashionData1[index].name}</Typography>
                            
                            <Toolbar  sx={{mb: -2.5}}>
                                <Toolbar sx={{ml: -5.2}}>
                                    <PlaceIcon sx={{mr: 0.5}}/>
                                    <Typography variant="body2">{fashionData1[index].location}</Typography>
                                </Toolbar>
                                <Toolbar sx={{mr: -5}}>
                                    <FavoriteIcon style={{}} sx={{mr: 0.5}}/>
                                    <Typography variant="body2">{fashionData1[index].count}</Typography>
                                </Toolbar>
                            </Toolbar>
                        </Box>
                    </Box>
                </Card>
            </Grid>
            )
        }
        return array;
    }
    return(
        <Box
            style={{
                float: 'right',
            }}
            sx={{mr: '20px', mt: '70px'}}
        >
            <Grid
                style={{
                    margin: "50px",
                    padding: "50px",
                    width: "1250px",
                    display: "grid",
                    gridTemplateRows: "1fr ",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    // backgroundColor: "gray",
                }}
                justifyContent="right"
            >
                {FashioinList()}
            </Grid>
        </Box>
    )
}

