import { Box, Divider } from "@mui/material";
import TabBox from "../MyLayout/TabBox";
import UserInfoBox from "../MyLayout/UserInfoBox";

export default function MyLayout() {
    return(
        <Box sx={{ ml: 7, '&::-webkit-scrollbar': {display: 'none'}, overflow: 'auto'}}>
            <Box height='70px'/>
            <UserInfoBox/>

            <Box display="flex" justifyContent="center" sx={{mt: '0px'}}>
                <Divider sx={{ width: '1300px' }}/>
            </Box>

            <TabBox/>
        </Box>
    )
}