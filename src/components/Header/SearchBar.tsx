import {
    Box,
    TextField
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(){
    return (
        <Box
            style={{
                position: 'absolute',
                width: 750,
                height: 47,
                top: 130,
                left: 600,
                // right: '170px',
                borderRadius: '30px', 
                background: '#FFFFFF',
                color: '#49454F'
        }}>
            <SearchIcon sx={{ color: "action.active", mr: 1, ml: 2, mt: 1.5 }} />
            <TextField 
                id="input-with-sx" label="Search" variant="standard" 
                style={{width: 650}} sx={{mt: -1}}/>
    </Box> 
    )
}