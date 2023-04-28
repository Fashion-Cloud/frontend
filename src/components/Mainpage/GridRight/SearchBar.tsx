import {
    Paper,
    InputBase,
    IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(){
    return (
        <Paper
            component="form"
            sx={{ mt: 2, ml: 2,p: '2px 4px', display: 'flex', alignItems: 'center', width: 745, borderRadius: '30px' }}
        >
            <InputBase
                sx={{ ml: 3, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}