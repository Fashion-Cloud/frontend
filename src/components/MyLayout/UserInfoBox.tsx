import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { Avatar, Box, Typography } from "@mui/material";

export default function UserInfoBox() {
    return (
        <Box display="flex" alignItems="start" gap={2}>
            {/* 왼쪽 컬럼: Avatar와 아래의 텍스트 */}
            <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar 
                    src="https://avatars.githubusercontent.com/u/83361012?v=4" 
                    alt="User's avatar" 
                    sx={{ width: 100, height: 100, ml: -10 }} 
                />
                <Typography sx={{mt: 3, ml: 16}}>
                    나만의 패션을 찾고 있는 난 미래의 패셔니스타.
                </Typography>
                <Typography sx={{mt: 1, mb: 3, ml: -10}}>
                    <AccessibilityIcon sx={{mb: -1, mr: 1}}/>
                    163 cm
                </Typography>
            </Box>

            <Box ml={-23} mt={2}>
                <Typography variant="h6">g.3un</Typography>

                <Box display="flex" alignItems="center" gap={2} mt={1}>
                    <Typography variant="body1">게시글</Typography>
                    <Typography variant="body1" sx={{fontWeight: 700}}>2</Typography>
                    <Typography variant="body1">게시글</Typography>
                    <Typography variant="body1" sx={{fontWeight: 700}}>20</Typography>
                </Box>
            </Box>
        </Box>
    );
}
