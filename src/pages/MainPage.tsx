import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { menuState } from "../utils/Recoil";

import MainLayout from "../components/layout/MainLayout";

export default function MainPage() {
    const setSelect = useSetRecoilState(menuState);

    useEffect(() => {
        setSelect('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <Box>
            <MainLayout/>
        </Box>
    )
}