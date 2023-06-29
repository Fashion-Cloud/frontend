import { Box, Divider } from "@mui/material";

import AddLookbookButton from "./LookbookLayout/AddLookbookButton";
import LookbookBox from "./LookbookLayout/LookbookBox";

export default function LookbookLayout() {
    return(
        <Box sx={{ ml: 7, '&::-webkit-scrollbar': {display: 'none'}, overflow: 'auto'}}>
            <Box height='70px'/>
            <AddLookbookButton/>

            <Box display="flex" justifyContent="center" sx={{mt: '0px'}}>
                <Divider sx={{ width: '1300px' }}/>
            </Box>

            <Box height='10px'/>
            <LookbookBox/>
        </Box>
    )
}