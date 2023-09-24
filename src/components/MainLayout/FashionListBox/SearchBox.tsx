import CloudIcon from '@mui/icons-material/Cloud';
import SearchIcon from '@mui/icons-material/Search';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {
  Backdrop,
  Box,
  Divider,
  Grow,
  IconButton,
  InputBase,
  Paper,
  Popper,
  PopperPlacementType,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import lottie from 'lottie-web';
import React, { useEffect, useRef, useState } from 'react';
import { BsCloudRainFill, BsCloudSnowFill } from 'react-icons/bs';
import { useRecoilState, useRecoilValue } from 'recoil';

import useGeoLocation from '../../../assets/hooks/useGeoLocation';
import {
  rainfallCodeState,
  skyCodeState,
  weatherDataState,
  windChillState,
} from '../../../utils/Recoil';

const IconOptions = [
  <WbSunnyIcon />,
  <CloudIcon />,
  <BsCloudRainFill size="25" />,
  <Box display="flex" fontSize="25px" sx={{ my: '-6px' }}>
    <BsCloudRainFill size="25" />{' '}
    <Divider orientation="vertical" flexItem sx={{ height: 25, mx: 1 }} />{' '}
    <BsCloudSnowFill size="25" />
  </Box>,
  <BsCloudSnowFill size="25" />,
];
const options = ['Sunny', 'Cloudy', 'Rain', 'Rain & Snow', 'Snow'];

const PrettoSlider = styled(Slider)({
  color: '#7DAADB',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#7DAADB',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

export default function SearchBox() {
  const [isLoading, setIsLoading] = useState(true);

  const weatherData = useRecoilValue(weatherDataState);

  const [anchorElSelect, setAnchorElSelect] =
    useState<HTMLButtonElement | null>(null);
  const [openSelect, setOpenSelect] = useState(false);
  const [placementSelect, setPlacementSelect] = useState<PopperPlacementType>();
  const [selectedIndex, setSelectedIndex] = useState(
    searchSky(weatherData.sky, weatherData.rainfallType)
  );

  const [anchorElSlider, setAnchorElSlider] =
    useState<HTMLButtonElement | null>(null);
  const [openSlider, setOpenSlider] = useState(false);
  const [placementSlider, setPlacementSlider] = useState<PopperPlacementType>();

  const [skyCode, setSkyCode] = useRecoilState<number>(skyCodeState);
  const [rainfallCode, setRainfallCode] = useRecoilState(rainfallCodeState);
  const [windChill, setWindChill] = useRecoilState(windChillState);

  const [snowState, setSnowState] = useState<boolean>(false);

  const location = useGeoLocation();
  let latitude: number | undefined;
  let longitude: number | undefined;

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setWindChill(newValue);
      console.log('[Recoil] windChill: ', newValue);
    }
  };

  const SearchBar = () => {
    return (
      <Paper
        component="form"
        sx={{
          mt: 2,
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: '400px',
          height: '45px',
          borderRadius: '10px',
        }}
      >
        <SearchIcon sx={{ ml: '10px', color: '#B2B1B5' }} />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
      </Paper>
    );
  };

  const weatherAPI = async () => {
    if (latitude !== undefined) {
      try {
        await axios
          .get(`/api/v1/weather?latitude=${latitude}&longitude=${longitude}`, {
            headers: {
              Accept: 'application/json',
            },
            withCredentials: true,
          })
          .then((response) => {
            const data = response.data.data;
            console.log('[WexatherTemp] tempAPI: ', data);

            setWindChill(data?.windChill);
            setIsLoading(false);
          });
      } catch {
        console.log('[WeatherTemp] tempAPI: api 불러오기 실패');
        setIsLoading(false);
      }
    }
  };

  function searchSky(skyCode: number, rainfallCode: number) {
    let index = 0;
    console.log('[searchSky] skyCode: ', skyCode);
    console.log('[searchSky] rainfallCode: ', rainfallCode);

    if (skyCode === 1 && rainfallCode === 0) {
      index = 0;
    } else if ((skyCode === 3 || skyCode === 4) && rainfallCode === 0) {
      index = 1;
    } else if (skyCode === 0 && (rainfallCode === 1 || rainfallCode === 5)) {
      index = 2;
    } else if (skyCode === 0 && (rainfallCode === 2 || rainfallCode === 6)) {
      index = 3;
    } else if (skyCode === 0 && (rainfallCode === 3 || rainfallCode === 7)) {
      index = 4;
    }

    return index;
  }

  useEffect(() => {
    if (location !== undefined) {
      latitude = location.coordinates?.lat;
      longitude = location.coordinates?.lng;
      console.log('[GeoLocation] latitude: ', latitude);
      console.log('[GeoLocation] longitude: ', longitude);

      weatherAPI();
    }

    searchSky(skyCode, rainfallCode);
  }, [location, skyCode, rainfallCode]);

  function getSkyData(data: string) {
    console.log('data: ', data);

    if (data === 'Sunny') {
      setSkyCode(1);
      setRainfallCode(0);
      setSnowState(false);
    } else if (data === 'Cloudy') {
      setSkyCode(3);
      setRainfallCode(0);
      setSnowState(false);
    } else if (data === 'Rain') {
      setSkyCode(0);
      setRainfallCode(1);
      setSnowState(false);
    } else if (data === 'Rain & Snow') {
      setSkyCode(0);
      setRainfallCode(2);
      setSnowState(true);
    } else if (data === 'Snow') {
      setSkyCode(0);
      setRainfallCode(7);
      setSnowState(false);
    }
  }

  const handleWeatherSelect =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (openSlider === true) {
        setOpenSlider(false);
      }
      setAnchorElSelect(event.currentTarget);
      setOpenSelect((prev) => placementSelect !== newPlacement || !prev);
      setPlacementSelect(newPlacement);
    };
  const handleSelectMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    getSkyData(options[index]);
    setOpenSelect(false);
  };

  const handleWeatherSlider =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (openSelect === true) {
        setOpenSelect(false);
      }
      setAnchorElSlider(event.currentTarget);
      setOpenSlider((prev) => placementSlider !== newPlacement || !prev);
      setPlacementSlider(newPlacement);
    };
  const handleSliderMenuItemClick = () => {
    setOpenSlider(false);
  };

  const LoadingLottie = () => {
    // weatherData에 따라 다른 애니메이션 데이터를 선택
    const getAnimationData = () => {
      return require('../../../assets/lotties/salesman.json');
    };

    const animationData = getAnimationData();
    // const animationData = require('../../assets/lotties/allRain.json');

    //lottie
    const element = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const animation = lottie.loadAnimation({
        container: element.current as HTMLDivElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => {
        animation.destroy(); // lottie-web 인스턴스 제거
      };
    }, []);
    return <Box ref={element} style={{ marginTop: 30, height: 300 }}></Box>;
  };

  return (
    <Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <LoadingLottie />
      </Backdrop>

      <Toolbar sx={{ ml: '13px' }}>
        <SearchBar />

        {/* Weather Select */}
        <Paper
          component="form"
          sx={{
            mt: 2,
            ml: 1,
            display: 'flex',
            justifyContent: 'center',
            width: snowState === false ? '45px' : '90px',
            height: '45px',
            borderRadius: '10px',
          }}
        >
          <IconButton
            onClick={handleWeatherSelect('bottom')}
            sx={{ borderRadius: '10px' }}
          >
            {IconOptions[selectedIndex]}
          </IconButton>
        </Paper>

        {/* Weather Slider */}
        <Paper
          component="form"
          sx={{
            mt: 2,
            ml: 1,
            p: '2px 4px',
            display: 'flex',
            justifyContent: 'center',
            width: '100px',
            height: '45px',
            borderRadius: '10px',
          }}
        >
          <IconButton
            onClick={handleWeatherSlider('bottom')}
            sx={{ borderRadius: '10px', mx: 1 }}
          >
            <ThermostatIcon sx={{ mr: 1 }} />

            <Typography>{windChill} °C</Typography>
          </IconButton>
        </Paper>
      </Toolbar>

      <Popper
        open={openSelect}
        anchorEl={anchorElSelect}
        placement={placementSelect}
        transition
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} timeout={350}>
            <Paper>
              <ToggleButtonGroup>
                {options.map((option, index) => (
                  <Tooltip key={option} title={options[index]} arrow>
                    <ToggleButton
                      value="center"
                      onClick={() => {
                        handleSelectMenuItemClick(index);
                        setSelectedIndex(index);
                      }}
                    >
                      {IconOptions[index]}
                    </ToggleButton>
                  </Tooltip>
                ))}
              </ToggleButtonGroup>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Popper
        open={openSlider}
        anchorEl={anchorElSlider}
        placement={placementSlider}
        transition
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} timeout={350}>
            <Paper sx={{ width: 300 }}>
              <Box sx={{ width: 250, ml: 3 }}>
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  value={windChill}
                  onChange={handleSliderChange}
                  sx={{ mt: 1 }}
                  min={-30}
                  max={50}
                  onClick={() => {
                    handleSliderMenuItemClick();
                  }}
                />
              </Box>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}
