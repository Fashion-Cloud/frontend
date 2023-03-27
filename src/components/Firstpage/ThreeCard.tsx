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

export default function ThreeCard(){
    const threeCardList = () => {
        var array = [];
        
        for (let index = 0; index < Object.keys(cards).length; index++) {
            array.push(
            <Grid item key={cards[index].id} xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ height: '360px', borderRadius: '10%'}}>
                    <Box sx={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            height="360px"
                            image={cards[index].image}
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
                        <Typography variant="h5" sx={{ml: 1}}>{cards[index].name}</Typography>
                        
                        <Toolbar  sx={{mb: -2.5}}>
                            <Toolbar sx={{ml: -5.2}}>
                                <PlaceIcon sx={{mr: 0.5}}/>
                                <Typography variant="body2">{cards[index].location}</Typography>
                            </Toolbar>
                            <Toolbar sx={{mr: -5}}>
                                <FavoriteIcon sx={{mr: 0.5}}/>
                                <Typography variant="body2">{cards[index].count}</Typography>
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

    return (
        <Box
            style={{
                float: 'right',
            }}
            sx={{mt: '520px', mr: '150px'}}
        >
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="right"
            >
                {threeCardList()}
            </Grid>
        </Box>
    )
}

const cards = [
    {
        id: 1,
        image: "https://images.onthelook.co.kr/posts/20230317110373751537090.jpeg?w=1200&q=75&f=webp",
        name: "봄엔 가디거언~!",
        location: "Seoul, Korea",
        count: '5.5k',
    },
    {
        id: 2,
        image: "https://images.onthelook.co.kr/posts/2023031912037042632161.jpeg?w=420&q=60&f=webp",
        name: "모던함의 끝.",
        location: "GwangJu, Korea",
        count: '10',
    },
    {
        id: 3,
        image: "https://images.onthelook.co.kr/posts/202303200803738411612980.jpeg?w=420&q=60&f=webp",
        name: "나.. 좀 이쁠지도?",
        location: "HongDae, Korea",
        count: '500',
    },
];