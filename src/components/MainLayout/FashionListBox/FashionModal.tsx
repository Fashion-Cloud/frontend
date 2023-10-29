import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CloseIcon from "@mui/icons-material/Close";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import LightModeIcon from "@mui/icons-material/LightMode";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";
import {Avatar, Box, Button, IconButton, Popover, Typography} from "@mui/material";
import axios, {AxiosError} from "axios";
import React, {useEffect, useState} from "react";

import rainfallType from "../../../assets/data/rainfallType";
import {token} from "../../../assets/data/token";
import weatherSky from "../../../assets/data/weatherSky";
import {SinglePostType} from "../../../utils/types";
import LookbookPopover from "./LookbookPopover";

type FashionModalProps = {
  singleId: string;
  setOpenDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function FashionModal({ singleId, setOpenDetail }: FashionModalProps) {
  const [singleData, setSingleData] = useState<SinglePostType>();
  const [bookState, setBookState] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleBookClick = () => {
    setBookState(!bookState);
  };
  const handeLookClick = (data: string) => {
    lookbookPostAPI(data);
  };

  const handleMarkClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMarkClose = () => {
    setAnchorEl(null);
  };

  const singlePostAPI = async () => {
    console.log('singleId: ', singleId);
    try {
      await axios
        .get(`${process.env.NEXT_PUBLIC_API}/posts/${singleId}`, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const data = response.data;
          console.log(data.data);
          setSingleData(data.data);
        });
    } catch {
      console.log('api 불러오기 실패');
    }
  };

  const lookbookPostAPI = async (lookbookId: string) => {
    try {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/lookbooks/${lookbookId}/posts?postId=${singleId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          setBookState(!bookState);
        });
    } catch(err: unknown) {
      if (axios.isAxiosError(err)) { // AxiosError 인지 확인
        const axiosError = err as AxiosError;
        console.log(axiosError.response?.data); // response 프로퍼티에 안전하게 접근
        // alert(axiosError.response?.data?.message);
      } else if (err instanceof Error) {
        alert(err.message);
      } else {
        alert('An unknown error occurred');
      }
    }
  };

  useEffect(() => {
    singlePostAPI();
  }, []);

  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${singleData?.image}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      {singleData ? (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            padding: "10px"
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 10%)",
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 10,
                left: 10,
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                borderRadius: '20px',
              }}
            >
              <Avatar src={singleData.image}/>
              <Typography sx={{ml: 1, color: '#fff'}}>{singleData.username}</Typography>
            </Box>
          </Box>


          <Box
            sx={{
              position: 'absolute',
              top: 20,
              right: 10,
            }}
          >
            {bookState === false ? (
              <IconButton onClick={handleMarkClick}>
                <BookmarkBorderIcon sx={{color: '#fff'}}/>
              </IconButton>
            ) : (
              <IconButton onClick={handleBookClick}>
                <BookmarkIcon sx={{color: '#fff'}}/>
              </IconButton>
            )}

            <IconButton
              onClick={() => {
                setOpenDetail(false);
              }}
            >
              <CloseIcon fontWeight="300" sx={{color: '#fff'}} />
            </IconButton>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '120px',
              backgroundColor: 'transparent',
              backgroundImage:
                'linear-gradient(to top, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0) 100%)',
              color: 'white',
              padding: '10px',
            }}
          >
            <Typography variant="h6" sx={{ml: 1, mb: 3, color: '#fff'}}>
              {singleData.title}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <Button
                disabled
                size="small"
                style={{
                  textTransform: 'none',
                  height: 28,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                }}
                sx={{mb: 2}}
              >
                <DeviceThermostatIcon
                  style={{ color: '#fff', height: 20 }}
                  sx={{ ml: 1 }}
                />
                <Typography
                  fontFamily="BalooBhaijaan"
                  fontWeight="700"
                  fontSize="10pt"
                  sx={{ color: '#fff', ml: 1, mr: 1, mt: 0.5 }}
                >
                  체감온도 - {singleData.windChill} °C
                </Typography>
              </Button>

              <Button
                disabled
                size="small"
                style={{
                  textTransform: 'none',
                  height: 28,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                }}
                sx={{ mb: 2 }}
              >
                <LightModeIcon
                  style={{ color: '#fff', height: 20 }}
                  sx={{ ml: 1 }}
                />
                <Typography
                  fontFamily="BalooBhaijaan"
                  fontWeight="700"
                  fontSize="10pt"
                  sx={{ color: '#fff', ml: 1, mr: 1, mt: 0.5 }}
                >
                  하늘상태 - {weatherSky(singleData.skyStatus)}
                </Typography>
              </Button>

              <Button
                disabled
                size="small"
                style={{
                  textTransform: 'none',
                  height: 28,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                }}
                sx={{ mb: 2 }}
              >
                <WbCloudyIcon
                  style={{ color: '#fff', height: 20 }}
                  sx={{ ml: 1 }}
                />
                <Typography
                  fontFamily="BalooBhaijaan"
                  fontWeight="700"
                  fontSize="10pt"
                  sx={{ color: '#fff', ml: 1, mr: 1, mt: 0.5 }}
                >
                  강우유형 - {rainfallType(singleData.rainfallType)}
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      ) : null}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleMarkClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <LookbookPopover
          handeLookClick={handeLookClick}
          handleMarkClose={handleMarkClose}
        />
      </Popover>
    </div>
  );

}