import { 
    Box, 
} from "@mui/material";

import LookbookDetailLayout from "../components/layout/LookbookDetailLayout";

export default function LookbookDetailpage() {
    return(
        <Box display="flex" justifyContent="center" sx={{width: '100%', height: '100vh', backgroundColor: '#F5F8FC'}}>
            <LookbookDetailLayout/>
        </Box>
    )
}