import 'react-toastify/dist/ReactToastify.css';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Resizer from 'react-image-file-resizer';
import { toast, ToastContainer } from 'react-toastify';

type ImageProps = {
  getImageData: (data: string) => void;
};

export default function AddImage({ getImageData }: ImageProps) {
  const [imgState, setImgState] = useState(null);
  const [imgURL, setImgURL] = useState('');
  const [previewImg, setPreviewImg] = useState('');

  const [uploadState, setUploadState] = useState(false);

  // toastify 알람 실행 함수 만들기
  const success = () => toast.success('이미지 업로드 성공!');
  const error = () => toast.error('이미지 업로드 실패!');

  const resizeFile = (file: Blob) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        350, // max width
        400, // max height
        'JPEG',
        350, // min width
        0, // min height
        (uri) => {
          resolve(uri);
        },
        'file' // 저장 형식
      );
    });

  const onChangeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event: ', event);
    try {
      if (event.target.files && event.target.files[0]) {
        const file: any =
          event.target.files instanceof FileList ? event.target.files[0] : null;

        setUploadState(false);
        setImgURL(file);
        console.log('new file image: ', file);

        const img: any = await resizeFile(file);
        setImgState(img);

        setPreviewImg(URL.createObjectURL(img));
      }
    } catch (err) {}
  };

  const sendImage = async () => {
    console.log('[AddImage] imgURL: ', imgURL);

    if (imgURL) {
      const formData = new FormData();
      formData.append('image', imgURL);

      try {
        await axios
          .post('/api/v1/images', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            success();
            console.log('sendImage URL response: ', response.data);
            getImageData(response.data.data.url);
            setUploadState(true);
          });
      } catch {
        error();
        console.log('[AddImage] sendImage: api 불러오기 실패');
      }
    }
  };

  const onClickImgUpload = () => {
    if (imgState === null) return alert('이미지가 업로드되지 않았습니다.');
    else {
      sendImage();
    }
  };

  return (
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
      <form>
        <Button
          variant="outlined"
          sx={{
            borderColor: 'white',
            borderRadius: 3,
            boxShadow: '1px 3px 3px #B0B09A',
            backgroundColor: 'white',
            width: 350,
            height: 400,
            mt: 0,
            // ml: 3,
            '&:hover': {
              backgroundColor: '#f8f5ff',
              borderColor: '#FFF',
            },
            '& .MuiTouchRipple-root span': {
              backgroundColor: '#ebe3fe',
            },
          }}
          component="label"
        >
          <img src={previewImg} />
          <input
            type="file"
            accept="image/*"
            hidden
            required
            onChange={(event) => onChangeImage(event)}
          />
          {imgState ? null : (
            <Box>
              <CloudUploadIcon sx={{ color: '#B8B8B8' }} fontSize="large" />
            </Box>
          )}
        </Button>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            disabled={uploadState}
            onClick={() => {
              onClickImgUpload();
            }}
            variant="contained"
            style={{
              position: 'absolute',
              textTransform: 'none',
              borderRadius: '20px',
            }}
            sx={{
              mt: 5,
              backgroundColor: '#87A9D7',
              '&:hover': { backgroundColor: '#1f5091' },
            }}
          >
            <Typography sx={{ mx: 3 }}>Image Upload</Typography>
          </Button>
        </Box>
      </form>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Box>
  );
}
