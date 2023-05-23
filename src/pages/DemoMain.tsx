import MainDrawer from "../components/Demomain/MainDrawer";
import { Box } from "@mui/material";
import MainLayout from "../components/Demomain/MainLayout";

export default function DemoMain() {
    return(
        <Box>
            <MainDrawer/>
            <MainLayout/>
        </Box>
    )
}