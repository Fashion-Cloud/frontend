import {
    Grid,
    Card,
    CardMedia,
    Typography,
    Box,
} from '@mui/material';
// import PlaceIcon from '@mui/icons-material/Place';
// import FavoriteIcon from '@mui/icons-material/Favorite';

import { usePostGMockData } from '../../assets/mocks/usePostGMockData';
import { type } from '../../utils/types';

export default function AllFashion() {
    const post: Array<type.PostType> | undefined = usePostGMockData();

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
        </Box>
    )
}

