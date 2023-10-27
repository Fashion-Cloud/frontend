import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box, Button, ButtonGroup,
  Card,
  CardMedia, ClickAwayListener,
  Grid, Grow,
  IconButton, MenuItem, MenuList,
  Modal, Paper, Popper,
  Toolbar,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import useCheckAuth from 'src/api/hook/CheckAuthHook';
import { token } from 'src/assets/data/token';

import { WeatherPostType } from '../../utils/types';
import useRainfallTypeStore from '../../utils/zustand/weather/RainfallTypeStore';
import useSkyStatusStore from '../../utils/zustand/weather/SkyStatusStore';
import useWindChillSearchStore from "../../utils/zustand/weather/WindChillSearchStore";
import AddFashionButton from './FashionListBox/AddFashionButton';
import FashioinDetailModal from './FashionListBox/FashionDetailModal';
import PaginationBox from './FashionListBox/PaginationBox';
import SearchBox from './FashionListBox/SearchBox';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 600,
  width: 400,
  bgcolor: '#FFF',
  borderRadius: '25px',
  boxShadow: 24,
  p: 2,
};

const options = ['전체', '팔로우']

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
  }

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
  }

  const handleCloseFiltering = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpenFiltering(false);
  }

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
      await axios
        .get(
          `/api/v1/posts/weather?skyStatus=${skyStatus}&rainfallType=${rainfallType}&minWindChill=${windChillSearch[0]}&maxWindChill=${windChillSearch[1]}&page=${page}&size=8`,
          {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
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
      await axios
        .get(
          `/api/v1/posts/follow/timeline?page=${page}&size=8`,
          {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
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
                  borderRadius: '10%',
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
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '80px',
                      backgroundColor: 'rgba(0, 0, 0, 0.54)',
                      color: 'white',
                      padding: '10px',
                    }}
                  >
                    <Typography variant="h6" sx={{ ml: 1 }}>
                      {fashion[index].title}
                    </Typography>
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
      <Logo />

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
            backgroundColor: '#87A9D7',
            '&:hover': { backgroundColor: '#1f5091' },
          }}
        >
          <Typography sx={{ fontSize: '12pt', textTransform: 'none' }}>
            Search
          </Typography>
        </Button>

        <ButtonGroup variant="contained" ref={anchorRef} sx={{mt: 2}}>
          <Button sx={{color: 'black', backgroundColor: 'white', '&:hover': { backgroundColor: '#e8e8e8' }}} onClick={handleClickFilter}>
            {options[selectedIndex]}
            <ExpandMoreIcon/>
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
          <div style={{ textAlign: 'right' }}>
            <IconButton
              onClick={() => {
                setOpenDetail(false);
              }}
            >
              <CloseIcon style={{ color: '#000' }} fontWeight="300" />
            </IconButton>
          </div>
          <FashioinDetailModal singleId={singleId} />
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
