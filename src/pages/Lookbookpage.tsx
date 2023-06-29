import { 
    Box, 
} from "@mui/material";

import LookbookLayout from "../components/Lookbook/LookbookLayout";

export default function Lookbookpage() {
    return(
        <Box display="flex" justifyContent="center" sx={{width: '100%', height: '100vh', backgroundColor: '#F5F8FC'}}>
            <LookbookLayout/>
        </Box>
    )
}