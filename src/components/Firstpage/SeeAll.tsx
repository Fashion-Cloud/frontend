import {
    Box,
    Link,
    Toolbar,
    Typography
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function SeeAll(){
    return(
        <Box 
            style={{display: 'flex', justifyContent: 'right'}}
            sx={{ml: 100, mr: 16}}
        >
            <Link href="/main" style={{color: '#FFFFFF'}}>
            <Toolbar>
                <Typography 
                    style={{fontWeight: 'bold'}} sx={{mr: 0.5}}>올거면 오든가</Typography>
                <ArrowForwardIcon/>
            </Toolbar>
        </Link>
        </Box>
    )
}