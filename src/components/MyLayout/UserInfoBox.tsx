import { Avatar, Box, Button, Typography } from '@mui/material';
import { useState } from 'react';

export default function UserInfoBox() {
  const [follow, setFollow] = useState<boolean>(false);

  const handleFollowChange = () => {
    if (follow) {
      setFollow(false);
    } else {
      setFollow(true);
    }
  };

  return (
    <Box display="flex" alignItems="start" gap={2}>
      {/* 왼쪽 컬럼: Avatar와 아래의 텍스트 */}
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          src="https://avatars.githubusercontent.com/u/83361012?v=4"
          alt="User's avatar"
          sx={{ width: 100, height: 100, ml: -10 }}
        />
        <Typography sx={{ mt: 3, ml: 16, mb: 5 }}>
          나만의 패션을 찾고 있는 난 미래의 패셔니스타.
        </Typography>
      </Box>
      <Box ml={-23} mt={2}>
        <Box display="flex" gap={5}>
          <Typography variant="h6">g.3un</Typography>
          <Button
            variant="contained"
            sx={{
              px: 5,
              backgroundColor: follow ? '#9e9e9e' : '#7DAADB',
              '&:hover': { backgroundColor: follow ? 'grey' : '#1f5091' },
            }}
            onClick={handleFollowChange}
          >
            {follow ? 'Unfollow' : 'follow'}
          </Button>
        </Box>


        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <Typography variant="body1">게시글</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700, mr: 1 }}>
            2
          </Typography>

          <Typography variant="body1">팔로워</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700, mr: 1 }}>
            10
          </Typography>

          <Typography variant="body1">팔로잉</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700, mr: 1 }}>
            20
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
