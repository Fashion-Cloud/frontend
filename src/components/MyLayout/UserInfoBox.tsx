import { Box, Avatar, Typography } from "@mui/material";
import AccessibilityIcon from '@mui/icons-material/Accessibility';

export default function UserInfoBox() {
    return (
        <Box display="flex" alignItems="start" gap={2}>
            {/* 왼쪽 컬럼: Avatar와 아래의 텍스트 */}
            <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar 
                    src="http://file3.instiz.net/data/cached_img/upload/2020/11/02/2/6a251d7ed4b5e27101c660aa238b575b.jpg" 
                    alt="User's avatar" 
                    sx={{ width: 100, height: 100 }} 
                />
                <Typography sx={{mt: 3, ml: 16}}>
                    나만의 패션을 찾고 있는 난 길동이.
                </Typography>
                <Typography sx={{mt: 1, mb: 3, ml: -2}}>
                    <AccessibilityIcon sx={{mb: -1, mr: 1}}/>
                    160 cm
                </Typography>
            </Box>

            <Box ml={-12} mt={2}>
                <Typography variant="h6">gildong2</Typography>

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
