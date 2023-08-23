import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Toolbar, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from 'recoil';

import { lookbookNameState } from "../../..//Recoil";

export default function TopBox() {
    const lookbookName = useRecoilValue(lookbookNameState);

    useEffect(() => {
        console.log('lookbookName: ', lookbookName);
    },[])

    return(
        <Box>
            <Toolbar component={Link} to="/lookbook" sx={{color: '#868686', position: 'sticky', top: '0px', cursor: 'pointer', ml: '10px', textDecoration: 'none'}}>
                <ArrowBackIosNewIcon sx={{height: '20px', mr: '5px'}}/>
                <Typography>
                    모든 룩북
                </Typography>
            </Toolbar>
            <Typography fontSize='20pt' sx={{ml: '50px'}}>
                {lookbookName}
            </Typography>
        </Box>
    )
}