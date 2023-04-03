import {
    Box,
    TextField
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(){
    return (
        <Box style={{
            position: 'absolute',
            width: 1170,
            height: '54px',
            top: '170px',
            left: 587,
            // right: '170px',
            borderRadius: '30px', 
            background: '#FFFFFF',
            color: '#49454F'
        }}>
            <SearchIcon sx={{ color: "action.active", mr: 1, ml: 2, mt: 2 }} />
            <TextField 
                id="input-with-sx" label="Hinted search text" variant="standard" 
                style={{width: '1100px'}} sx={{mt: -0.3}}/>
    </Box> 
    )
}