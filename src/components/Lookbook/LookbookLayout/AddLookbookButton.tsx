import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Modal,
  Paper,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { token } from 'src/assets/data/token';

// import SearchIcon from '@mui/icons-material/Search';
import AddImage from '../../../components/AddFashion/AddFashion/AddImage';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};

export default function AddLookbookButton() {
  const [title, setTitle] = useState<string>('');
  const [postImage, setPostImage] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const lookbookTitleHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTitle(e.target.value);
  };

  function getImageData(data: string) {
    setPostImage(data);
    console.log('[AddFashion -> AddImage] postImage: ', data);
  }

  const postLookbookAPI = async () => {
    if (title === '' || postImage === '') {
      alert('제목과 이미지를 입력해주세요!');
      return;
    }

    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API}/lookbooks`, {
          title: title,
          image: postImage,
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        })
        .then((response) => {
          console.log(response);
          alert('post 완료');
          window.location.replace('/mypage');
        });
    } catch {
      console.log('api 불러오기 실패');
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button
        onClick={handleOpen}
        sx={{ position: 'sticky', top: '0px', right: '0px' }}
      >
        <AddIcon sx={{ mr: '5px' }} />
        <Typography>새 룩북</Typography>
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box textAlign="right" sx={{ mt: -1.7 }}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            <Typography
              textAlign="center"
              variant="h6"
              component="h2"
              sx={{ mt: -4.5 }}
            >
              새 룩북 만들기
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
              component="form"
              sx={{
                mt: 4,
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '350px',
                height: '45px',
                borderRadius: '5px',
              }}
            >
              {/* <SearchIcon sx={{color: '#949494', mr: '4px'}}/> */}
              <InputBase
                style={{ width: '350px', padding: '10px', marginTop: '3px' }}
                value={title}
                placeholder="룩북 이름을 입력해주세요"
                onChange={(e) => lookbookTitleHandler(e)}
              />
            </Paper>
          </Box>

          <Box
            style={{
              height: '500px',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '10px',
            }}
          >
            <AddImage getImageData={getImageData} />
          </Box>

          <Divider sx={{ mt: 3 }} />

          <Box sx={{ mb: '-25px' }}>
            <Button
              color="primary"
              fullWidth
              sx={{ textAlign: 'center' }}
              onClick={() => postLookbookAPI()}
            >
              만들기
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
