import { Box} from "@mui/material";
import MyPostBox from "../MyLayout/MyPostBox";

export default function MyPostLayout() {
  return (
    <Box sx={{ '&::-webkit-scrollbar': {display: 'none'}, overflow: 'auto'}}>
            <Box height='10px'/>
            <MyPostBox/>

            <Box height='10px'/>
            
        </Box>
  )
}
