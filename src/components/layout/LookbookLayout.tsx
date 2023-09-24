import { Box} from "@mui/material";

import AddLookbookButton from "../Lookbook/LookbookLayout/AddLookbookButton";
import LookbookBox from "../Lookbook/LookbookLayout/LookbookBox";

export default function LookbookLayout() {
    return(
        <Box sx={{ '&::-webkit-scrollbar': {display: 'none'}, overflow: 'auto'}}>
            <Box height='10px'/>
            <AddLookbookButton/>


            <Box height='10px'/>
            
            <LookbookBox/>
        </Box>
    )
}