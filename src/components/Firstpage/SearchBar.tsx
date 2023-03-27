import {
    Box,
    TextField
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(){
    return (
        <Box style={{
            justifyContent: 'right',
            position: 'absolute',
            width: '780px',
            height: '56px',
            top: '480px',
            right: '170px',
            borderRadius: '30px', 
            background: '#FFFBFE',
            color: '#49454F'
        }}>
            <SearchIcon sx={{ color: "action.active", mr: 1, ml: 2, mt: 2.5 }} />
            <TextField id="input-with-sx" label="Hinted search text" variant="standard" 
                style={{width: '700px'}}/>
    </Box> 
    )
}