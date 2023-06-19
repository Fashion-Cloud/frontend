import { Box, Divider } from "@mui/material";

import LookbookListBox from "./LookbookDetailLayout/LookbookListBox";
import TopBox from "./LookbookDetailLayout/TopBox";

export default function LookbookDetailLayout() {
    return(
        <Box sx={{ ml: 7, '&::-webkit-scrollbar': {display: 'none'}, overflow: 'auto'}}>
            <Box height='10px'/>
            <TopBox/>

            <Box display="flex" justifyContent="center">
                <Divider sx={{ width: '1300px' }}/>
            </Box>

            <Box height='10px'/>
            <LookbookListBox/>
        </Box>
    )
}