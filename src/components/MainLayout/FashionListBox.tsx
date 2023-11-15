import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  ClickAwayListener,
  Grid,
  Grow,
  MenuItem,
  MenuList,
  Modal,
  Paper,
  Popper,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import apiV1Instance from 'src/api/api-instance';
import useCheckAuth from 'src/api/hook/CheckAuthHook';

import logoUrl from '../../../public/title-logo.png';
import { WeatherPostType } from '../../utils/types';
import useRainfallTypeStore from '../../utils/zustand/weather/RainfallTypeStore';
import useSkyStatusStore from '../../utils/zustand/weather/SkyStatusStore';
import useWindChillSearchStore from '../../utils/zustand/weather/WindChillSearchStore';
import AddFashionButton from './FashionListBox/AddFashionButton';
import FashionModal from './FashionListBox/FashionModal';
import PaginationBox from './FashionListBox/PaginationBox';
import SearchBox from './FashionListBox/SearchBox';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 750,
  width: 550,
};

const options = ['전체', '팔로우'];

export default function FashionListBox() {
  const [post, setPost] = useState<WeatherPostType[]>([]);

  const [singleId, setSingleId] = useState<string>('');
  const [openDetail, setOpenDetail] = useState<boolean>(false);

  const handleOpenDetail = () => setOpenDetail(true);
  const handleCloseDetail = () => setOpenDetail(false);

  const { skyStatus } = useSkyStatusStore();
  const { rainfallType } = useRainfallTypeStore();
  const { windChillSearch } = useWindChillSearchStore();

  const [pageCount, setPageCount] = useState<number>(1); // 전체 페이지
  const [page, setPage] = useState<number>(1); // 현재 페이지

  const [openFiltering, setOpenFiltering] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClickFilter = () => {
    setOpenFiltering((prevOpen) => !prevOpen);
  };

  const handleFilterMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    if (index === 0) {
      fashionAPI();
      console.log('전체 보기');
    } else if (index === 1) {
      followTimelineAPI();
      console.log('팔로우 보기');
    }
    setOpenFiltering(false);
  };

  const handleCloseFiltering = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpenFiltering(false);
  };

  function getPageNum(page: number) {
    setPage(page);
    console.log('[SearchBox -> FashionList] page: ', page);
  }

  const Logo = () => {
    return (
      <Typography fontSize="23pt" sx={{ ml: '60px' }}>
        Fashion{' '}
        <span style={{ fontWeight: 'bold', color: '#7DAADB' }}>Cloud</span>
      </Typography>
    );
  };

  const fashionAPI = async () => {
    console.log('[Recoil] skyCode: ', skyStatus);
    console.log('[Recoil] rainfallCode: ', rainfallType);
    console.log('[Recoil] windChillSearch: ', windChillSearch);
    try {
      await apiV1Instance
        .get(
          `${process.env.NEXT_PUBLIC_API}/posts/weather?skyStatus=${skyStatus}&rainfallType=${rainfallType}&minWindChill=${windChillSearch[0]}&maxWindChill=${windChillSearch[1]}&page=${page}&size=8`
        )
        .then((response) => {
          const data = response.data;
          console.log('data.data: ', data.data);

          setPost(data.data.content);
          setPageCount(data.data.totalPages);
          // setPage(1);
        });
    } catch {
      console.log('api 불러오기 실패');
    }
  };

  const followTimelineAPI = async () => {
    try {
      await apiV1Instance
        .get(`/api/v1/posts/follow/timeline?page=${page}&size=8`)
        .then((response) => {
          const data = response.data;
          console.log('data.data: ', data.data);

          setPost(data.data.content);
          setPageCount(data.data.totalPages);
        });
    } catch {
      console.log('api 불러오기 실패');
    }
  };

  const getSkyStatusIcon = (skyStatus: string) => {
    switch (skyStatus) {
      case 'SUNNY':
        return '☀️';
      case 'OVERCAST':
        return '☁️';
      case 'RAINY':
        return '🌧️';
      case 'rain&snow':
        return '🌧️ & ❄️';
      case 'snow':
        return '❄️';
      default:
        return '';
    }
  };

  const FashionList = () => {
    let fashion: WeatherPostType[] = [];
    const array = [];

    fashion = post;
    if (fashion !== undefined) {
      for (let index = 0; index < fashion.length; index++) {
        // eslint-disable-next-line no-lone-blocks
        {
          array.push(
            <Grid
              item
              key={fashion[index].id}
              style={{ margin: '15px' }}
              xs={12}
              sm={4}
              md={3}
              lg={2.1}
            >
              <Card
                sx={{
                  width: '220px',
                  borderRadius: '5%',
                  cursor: 'pointer',
                  ':hover': {
                    boxShadow:
                      '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
                  },
                }}
                onClick={() => {
                  handleOpenDetail();
                  setSingleId(fashion[index].id);
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="260px"
                    image={fashion[index].image}
                  />

                  {/* 날씨 아이콘*/}
                  <div
                    style={{
                      position: 'absolute',
                      top: '4px',
                      right: '5px',
                      color: 'white',
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#c4c4c4',
                      padding: '1px',
                      borderRadius: '100px',
                    }}
                  >
                    <span style={{ marginRight: '3px', marginLeft: '3px' }}>
                      {getSkyStatusIcon(fashion[index].skyStatus)}
                    </span>
                  </div>

                  {/* 온도 아이콘*/}
                  <div
                    style={{
                      position: 'absolute',
                      top: '33px',
                      right: '5px',
                      color: 'black',
                      fontSize: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#c4c4c4',
                      padding: '3px',
                      borderRadius: '100px',
                    }}
                  >
                    <span
                      style={{
                        marginRight: '3px',
                        marginLeft: '3px',
                        color: 'white',
                      }}
                    >
                      {' '}
                      {fashion[index].temperature}°C
                    </span>
                  </div>

                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '70px',
                      backgroundColor: 'rgba(0, 0, 0, 0.54)',
                      color: 'white',
                      padding: '10px',
                    }}
                  >
                    <Typography variant="h6" sx={{ ml: 1 }}>
                      {fashion[index].title}
                    </Typography>

                    {/* 리뷰 아이콘 */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 10,
                        left: 170,
                        width: 'max-content',
                        height: '35%',
                        backgroundColor: '#FF6767',
                        color: 'white',
                        padding: '1px',
                        paddingRight: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '10px',
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ ml: 1, color: '#fff', fontSize: '10px' }}
                      >
                        {fashion[index].review}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          );
        }
      }
    }

    return array;
  };

  useEffect(() => {
    fashionAPI();
  }, [page]);

  useCheckAuth();

  return (
    <Box sx={{ height: '100vh', backgroundColor: '#F5F8FC' }}>
      <Box height="75px" />
      <Image src={logoUrl} alt="logo" style={{ marginLeft: 60 }} />

      <Toolbar>
        <SearchBox />

        <Button
          variant="contained"
          onClick={() => fashionAPI()}
          sx={{
            width: '100px',
            height: '40px',
            mt: 2,
            mr: 12,
            borderRadius: 10,
            backgroundColor: '#71B4DC',
            '&:hover': { backgroundColor: '#1f5091' },
          }}
        >
          <Typography sx={{ fontSize: '12pt', textTransform: 'none' }}>
            Search
          </Typography>
        </Button>

        <ButtonGroup variant="contained" ref={anchorRef} sx={{ mt: 2 }}>
          <Button
            sx={{
              color: 'black',
              backgroundColor: 'white',
              '&:hover': { backgroundColor: '#e8e8e8' },
            }}
            onClick={handleClickFilter}
          >
            {options[selectedIndex]}
            <ExpandMoreIcon />
          </Button>
        </ButtonGroup>

        <AddFashionButton />
      </Toolbar>

      <Grid
        container
        spacing={-3}
        direction="row"
        justifyContent="space-evenly"
        style={{
          marginLeft: '5px',
        }}
      >
        {FashionList()}
      </Grid>

      <PaginationBox pageCount={pageCount} getPageNum={getPageNum} />

      <Modal open={openDetail} onClose={handleCloseDetail} closeAfterTransition>
        <Box sx={style}>
          <FashionModal singleId={singleId} setOpenDetail={setOpenDetail} />
        </Box>
      </Modal>

      <Popper
        open={openFiltering}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleCloseFiltering}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) =>
                        handleFilterMenuItemClick(event, index)
                      }
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}
