/* eslint-disable jsx-a11y/alt-text */
import { useRef, useState, useEffect } from 'react'
import {
  Typography,
  Button,
  Box,
} from '@mui/material'
import axios from 'axios';
import { type } from '../../../utils/types';
import Resizer from "react-image-file-resizer";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

type ImageProps = {
  getImageData: Function;
}

export default function AddImage({getImageData}: ImageProps) {
  const [imgState, setImgState] = useState(null);
  const [imgURL, setImgURL] = useState("");
  const [respondImg, setRespondImg] = useState(null);

  const resizeFile = (file: Blob) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        350, // max width
        400, // max height
        "JPEG",
        350, // min width
        0, // min height
        (uri) => {
          resolve(uri);
        },
        "file" // 저장 형식
      );
  });

  const onChangeImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file: any =
        event.target.files instanceof FileList ? event.target.files[0] : null;

      setRespondImg(file);
      console.log("respondImg: ", respondImg)

      const img: any = await resizeFile(file);
      setImgState(img);
      setImgURL(URL.createObjectURL(img));
    } catch (err) {}
  };

  const sendImage: () => Promise<any> = async () => {
    getImageData(imgURL.substring(5))
    console.log("[AddImage] imgURL: ", imgURL)
    try {
      await axios.post<type.ImageUploadType>('/api/v1/images',
      {
        imageS3URL: imgURL.substring(5)
      }
    ).then((response) => {
        console.log("sendImage URL response: ", response)
    });
    } catch {
        console.log("api 불러오기 실패")
        alert("이미지 업로드 실패, 다시 시도해주세요")
    };
  };

  const onClickImgUpload = () => {
    if (imgState === null) return alert("이미지가 업로드되지 않았습니다.");
    else {
      sendImage();
    }
  };

  return (
    <Box>
      <form>
        <Button
          variant="outlined"
          sx={{
            borderColor: "white",
            borderRadius: 3,
            boxShadow: "1px 3px 3px #B0B09A",
            backgroundColor: "white",
            width: 350,
            height: 400,
            mt: 0,
            ml: 3,
            "&:hover": {
              backgroundColor: "#f8f5ff",
              borderColor: "#FFF",
            },
            "& .MuiTouchRipple-root span": {
              backgroundColor: "#ebe3fe",
            },
          }}
          component="label"
        >
          <img src={imgURL}/>
          <input
            type="file"
            hidden
            required
            onChange={(e) => onChangeImage(e)}
          />
          {imgState ? null : (
            <Box>
              <CloudUploadIcon sx={{ color: "#B8B8B8" }} fontSize="large" />
            </Box>
          )}
        </Button>
        <Box>
        <Button 
            onClick={onClickImgUpload}
            variant="contained" 
            style={{position: 'absolute', textTransform:"none", borderRadius: '20px'}} 
            sx={{ml: 13, mt: 5, backgroundColor: "#8c79ba", "&:hover": {backgroundColor: "#6e4dbf"}}}
        >
            <Typography sx={{ml: 3, mr: 3}}>
                Image Upload
            </Typography>
        </Button>
        </Box>
      </form>
    </Box>
  );
}