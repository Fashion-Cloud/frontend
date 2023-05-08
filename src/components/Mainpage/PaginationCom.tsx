import {
    Pagination
} from '@mui/material';
import { useEffect, useState } from "react";

type PageType = {
    getPageData: Function;
}

export default function PaginationCom({getPageData}: PageType){
    const [count, setCount] = useState(2);
    const [page, setPage] = useState(1);

    // pagination
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        console.log("page: ", value)
        getPageData(value)
    };

    useEffect(() => {
        setPage(1)
        console.log("page: ", page)
    }, [])

    return(
        <Pagination
            style={{ position: 'absolute', margin: "auto", marginLeft: '315px'}}
            count={count}
            page={page}
            onChange={handleChange}
        />
    )
}