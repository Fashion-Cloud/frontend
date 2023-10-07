import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { token } from 'src/assets/data/token';

import { userIdState } from '../../utils/Recoil';
import { UserPostListType } from '../../utils/types';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   height: 600,
//   width: 400,
//   bgcolor: '#FFF',
//   borderRadius: '25px',
//   boxShadow: 24,
//   p: 2,
// };

export default function MyPostBox() {
  const userId = useRecoilValue(userIdState);
  const [postList, setPostList] = useState<UserPostListType[]>([]);
  // const [singleId, setSingleId] = useState<string>('');
  // const [openDetail, setOpenDetail] = useState<boolean>(false);

  // const handleOpenDetail = () => setOpenDetail(true);
  // const handleCloseDetail = () => setOpenDetail(false);

  const userPostListAPI = async () => {
    try {
      await axios
        .get(`/api/v1/posts/users/${userId}`, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          },
        })
        .then((response) => {
          const data = response.data.data;
          console.log('data: ', data);

          setPostList(data);
        });
    } catch {
      console.log('api 불러오기 실패');
    }
  };

  useEffect(() => {
    userPostListAPI();
  }, []);
  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Box width="50px" />
      <Grid container spacing={3}>
        {Array.isArray(postList) &&
          postList.map((postList, index) => (
            <Grid item key={index} xs={4}>
              <Card
                sx={{ cursor: 'pointer' }}
                // onClick={() => {
                //     navigate(`/lookbookdetail/${lookbook.id}`)
                // }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={postList.image}
                    sx={{
                      height: '350px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '100px',
                      bgcolor: 'transparent',
                      backgroundImage:
                        'linear-gradient(to top, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0))', // Apply gradient
                      color: 'white',
                      padding: '10px',
                      transition: 'background-image 0.3s', // Change transition property to background-image
                      '&:hover': {
                        // Change gradient on hover
                        backgroundImage:
                          'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ mt: 5, ml: 1 }}>
                      {postList.title}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Box width="50px" />
    </Box>
  );
}
