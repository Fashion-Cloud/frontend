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
import lottie from 'lottie-web';
import React, { useEffect, useRef, useState } from 'react';
import { BsCloudRainFill, BsCloudSnowFill } from 'react-icons/bs';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useFindAllWeathers } from 'src/api/hook/WeatherHook';

import {
  rainfallTypeState,
  weatherDataState,
  windChillState,
} from '../../../utils/Recoil';
import useSkyStatusStore from '../../../utils/zustand/weather/SkyStatusStore';

const IconOptions = [
  <WbSunnyIcon key="sunnyIcon" />,
  <CloudIcon key="cloudIcon" />,
  <BsCloudRainFill size="25" key="rainFillIcon" />,
  <Box display="flex" fontSize="25px" sx={{ my: '-6px' }} key="weatherIconBox">
    <BsCloudRainFill size="25" />{' '}
    <Divider orientation="vertical" flexItem sx={{ height: 25, mx: 1 }} />{' '}
    <BsCloudSnowFill size="25" />
  </Box>,
  <BsCloudSnowFill size="25" key="snowFill" />,
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
  const [isLoading, setIsLoading] = useState(false);

  const weatherData = useRecoilValue(weatherDataState);

  const [anchorElSelect, setAnchorElSelect] =
    useState<HTMLButtonElement | null>(null);
  const [openSelect, setOpenSelect] = useState(false);
  const [placementSelect, setPlacementSelect] = useState<PopperPlacementType>();
  const [selectedIndex, setSelectedIndex] = useState(
    searchSky(weatherData?.sky, weatherData?.rainfallType)
  );

  const [anchorElSlider, setAnchorElSlider] =
    useState<HTMLButtonElement | null>(null);
  const [openSlider, setOpenSlider] = useState(false);
  const [placementSlider, setPlacementSlider] = useState<PopperPlacementType>();

  const { skyStatus, setSkyStatus } = useSkyStatusStore();
  const [rainfallType, setRainfallType] = useRecoilState(rainfallTypeState);
  const [windChill, setWindChill] = useRecoilState(windChillState);

  const [snowState, setSnowState] = useState<boolean>(false);

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

  const { data: windChillData } = useFindAllWeathers();

  function searchSky(skyStatus: string, rainfallType: string) {
    let index = 0;
    // console.log('[searchSky] skyStatus: ', skyStatus);
    // console.log('[searchSky] rainfallCode: ', rainfallCode);

    if (skyStatus === 'SUNNY' && rainfallType === 'NONE') {
      index = 0;
    } else if (
      (skyStatus === 'CLOUDY' || skyStatus === 'OVERCAST') &&
      rainfallType === 'NONE'
    ) {
      index = 1;
    } else if (
      skyStatus === 'NONE' &&
      (rainfallType === 'CLEAR' || rainfallType === 'RAINDROP')
    ) {
      index = 2;
    } else if (
      skyStatus === 'NONE' &&
      (rainfallType === 'RAIN' || rainfallType === 'RAINDROP_FLURRY')
    ) {
      index = 3;
    } else if (
      skyStatus === 'NONE' &&
      (rainfallType === 'SNOW' || rainfallType === 'FLURRY')
    ) {
      index = 4;
    }

    return index;
  }

  useEffect(() => {
    // 일단 이부분 API 호출할 때, windChill이 undefined로 떠서 주석해둡니다.
    // if (windChillData) {
    //   console.log(windChillData);
    //   setWindChill(windChillData?.data?.windChill);
    // }

    searchSky(skyStatus, rainfallType);
  }, [skyStatus, rainfallType, windChillData]);

  function getSkyData(data: string) {
    console.log('data: ', data);

    if (data === 'Sunny') {
      setSkyStatus('SUNNY');
      setRainfallType('NONE');
      setSnowState(false);
    } else if (data === 'Cloudy') {
      setSkyStatus('CLOUDY');
      setRainfallType('NONE');
      setSnowState(false);
    } else if (data === 'Rain') {
      setSkyStatus('NONE');
      setRainfallType('CLEAR');
      setSnowState(false);
    } else if (data === 'Rain & Snow') {
      setSkyStatus('NONE');
      setRainfallType('RAIN');
      setSnowState(true);
    } else if (data === 'Snow') {
      setSkyStatus('NONE');
      setRainfallType('FLURRY');
      setSnowState(false);
    }
  }

  const handleWeatherSelect =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (openSlider) {
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
      if (openSelect) {
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
            width: !snowState ? '45px' : '90px',
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
