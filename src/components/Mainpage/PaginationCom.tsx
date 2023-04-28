import {
    Pagination
} from '@mui/material';
import { useEffect, useState } from "react";
import fashionData from '../../assets/fashionData';

export default function PaginationCom(){
    const [count, setCount] = useState(1);
    const [page, setPage] = useState(1);

    function getFashionData(value : number){
        if (fashionData.length % 8 === 0){
            setCount(Math.floor(fashionData.length/8));
        } else {
            setCount(Math.floor(fashionData.length/8) + 1);
        }
    }

    // pagination
    const pageChange = (value : any) => {
        getFashionData(value);
        setPage(value);
    }

    useEffect(()=> {
        getFashionData(1);
    }, []);

    return(
        <Pagination
            style={{ position: 'absolute', margin: "auto", marginTop: '800px', marginLeft: '940px'}}
            count={count}
            page={page}
            onChange={pageChange}
        />
    )
}