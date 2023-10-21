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
  Slider, SliderThumb,
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
import { useFindAllWeathers } from 'src/api/hook/WeatherHook';

import useRainfallTypeStore from '../../../utils/zustand/weather/RainfallTypeStore';
import useSkyStatusStore from '../../../utils/zustand/weather/SkyStatusStore';
import useWeatherDataStore from '../../../utils/zustand/weather/WeatherDataStore';
import useWindChillStore from '../../../utils/zustand/weather/WindChillStore';
import useWindChillSearchStore from "../../../utils/zustand/weather/WindChillSearchStore";

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

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#87A9D7",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit"
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1
    }
  },
  "& .MuiSlider-track": {
    height: 3
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#87A9D7",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
    },
    "& > *": {
      transform: "rotate(45deg)"
    }
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3
  }
}));


export default function SearchBox() {
  const [isLoading, setIsLoading] = useState(false);

  const { weatherData } = useWeatherDataStore();

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
  const { rainfallType, setRainfallType } = useRainfallTypeStore();
  const { windChill, setWindChill } = useWindChillStore();

  const { windChillSearch, setWindChillSearch } = useWindChillSearchStore();
  // const [windChillSearch, setWindChillSearch] = useState<number[]>([20, 37]);

  const [snowState, setSnowState] = useState<boolean>(false);

  interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

  function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
          {children}
          <span className="airbnb-bar" />
          <span className="airbnb-bar" />
          <span className="airbnb-bar" />
        </SliderThumb>
    );
  }

  const handleSliderChange = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setWindChillSearch([Math.min(newValue[0], windChillSearch[1]), windChillSearch[1]]);
    } else {
      setWindChillSearch([windChillSearch[0], Math.max(newValue[1], windChillSearch[0])]);
    }
    console.log('windChill: ', windChill);
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
          inputProps={{ 'aria-label': 'search fashion' }}
        />
      </Paper>
    );
  };

  const { data: windChillData } = useFindAllWeathers();

  function searchSky(skyStatus: string, rainfallType: string) {
    let index = 0;

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
            width: '150px',
            height: '45px',
            borderRadius: '10px',
          }}
        >
          <IconButton
            onClick={handleWeatherSlider('bottom')}
            sx={{ borderRadius: '10px', mx: 1 }}
          >
            <ThermostatIcon sx={{ mr: 1 }} />

            {/*<Typography>{windChill} °C</Typography>*/}
            <Typography>{windChillSearch[0]} °C ~ {windChillSearch[1]} °C</Typography>
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
                <AirbnbSlider
                    valueLabelDisplay="auto"
                    slots={{ thumb: AirbnbThumbComponent }}
                    getAriaLabel={(index) =>
                        index === 0 ? "Minimum price" : "Maximum price"
                    }
                    onChange={handleSliderChange}
                    defaultValue={[20, 40]}
                    value={windChillSearch}
                    min={-30}
                    max={60}
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
