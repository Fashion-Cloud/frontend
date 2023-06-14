import { 
    Box, 
    Pagination 
} from "@mui/material";
import React from "react";

type PageProps = {
    pageCount: number;
    getPageNum: Function;
}

export default function PaginationBox({pageCount, getPageNum}: PageProps) {
    const [page, setPage] = React.useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        getPageNum(value);
      };
      
    return (
        <Box display="flex" justifyContent='center' sx={{mt: '300px'}}>
            <Box sx={{position: "fixed", top: '770px'}}>
                <Pagination count={pageCount} page={page} onChange={handleChange} shape="rounded"/>
            </Box>
        </Box>
    )
}