import { Box } from "@mui/material"

import MyLayout from "../components/layout/MyLayout"

export default function MyPage() {
  return (
    <Box display="flex" justifyContent="center" sx={{width: '100%', height: '100vh', backgroundColor: '#F5F8FC'}}>
        <MyLayout/>
    </Box>
  )
}