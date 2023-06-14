import MainDrawer from "../components/Mainpage/MainDrawer";
import { Box } from "@mui/material";
import MainLayout from "../components/Mainpage/MainLayout";

export default function DemoMain() {
    return(
        <Box>
            <MainDrawer/>
            <MainLayout/>
        </Box>
    )
}