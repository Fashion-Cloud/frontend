import React, { useState, useEffect } from 'react';
import { type } from '../../utils/types';
import { styled } from '@mui/material/styles';
import { 
    Box,
    Grow,
    IconButton,
    InputBase, 
    Paper, 
    Popper, 
    PopperPlacementType, 
    ToggleButton, 
    ToggleButtonGroup, 
    Toolbar,
    Typography,
    Slider,
    Tooltip
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ThermostatIcon from '@mui/icons-material/Thermostat';

import axios from 'axios';
import useGeoLocation from "../../assets/hooks/useGeoLocation";

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from "@mui/icons-material/Cloud";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const IconOptions = [<WbSunnyIcon/>, <CloudIcon/>, <UmbrellaIcon/>, <AcUnitIcon/>];
const options = ['Sunny', 'Mostly Cloudy', 'Rain', 'Snow'];

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

type SearchProps = {
    getWeatherData: Function;
    getTempData: Function;
    getPageNum: Function;
}

export default function SearchBox({getWeatherData, getTempData}: SearchProps) {
    const [anchorElSelect, setAnchorElSelect] = React.useState<HTMLButtonElement | null>(null);
    const [openSelect, setOpenSelect] = React.useState(false);
    const [placementSelect, setPlacementSelect] = React.useState<PopperPlacementType>();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const [anchorElSlider, setAnchorElSlider] = React.useState<HTMLButtonElement | null>(null);
    const [openSlider, setOpenSlider] = React.useState(false);
    const [placementSlider, setPlacementSlider] = React.useState<PopperPlacementType>();

    const [tempSlider, setTempSlider] = React.useState<number>(26);

    const location = useGeoLocation();
    let latitude: number | undefined
    let longitude: number | undefined

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setTempSlider(newValue);
            getTempData(newValue);
        }
    };
    
    const SearchBar = () => {
        return(
            <Paper
                component="form"
                sx={{ mt: 2, p: '2px 4px', display: 'flex', alignItems: 'center', width: '400px', height: '45px', borderRadius: '10px' }}
             >
                <SearchIcon sx={{ml: '10px', color: '#B2B1B5'}}/>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
            </Paper>
        )
    }

    const weatherAPI = async () => {
        if(latitude !== undefined){
            try {
                await axios.get(`/api/v1/weather?latitude=${latitude}&longitude=${longitude}`,
                {
                    headers: {
                        Accept: 'application/json'
                    },
                    withCredentials: true
                }
            ).then((response) => {
                const data = response.data.data;
                console.log("[WexatherTemp] tempAPI: ", data)
                setTempSlider(data?.temperature)
            });
            } catch {
                console.log("[WeatherTemp] tempAPI: api 불러오기 실패")
            };
        }
    }

    useEffect(() => {
        if (location !== undefined) {
            latitude = location.coordinates?.lat;
            longitude = location.coordinates?.lng;
            console.log("[GeoLocation] latitude: " , latitude)
            console.log("[GeoLocation] longitude: " , longitude)

            weatherAPI()
        }
    }, [location])

    function getSkyData(data: string) {
        let skyCode: number = 0;
        let rainfallCode: number = 0;
        console.log("data: ", data)

        if (data === 'Sunny') {
            skyCode = 1;
            rainfallCode = 0;
        } else if (data === 'Mostly Cloudy'){
            skyCode = 3;
            rainfallCode = 0;
        } else if (data === 'Rain'){
            skyCode = 4;
            rainfallCode = 1;
        } else if (data === 'Snow'){
            skyCode = 5;
            rainfallCode = 3;
        }

        getWeatherData(skyCode, rainfallCode)
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
        getSkyData(options[index])
        setOpenSelect(false);
    };

    const handleWeatherSlider =
        (newPlacement: PopperPlacementType) =>
        (event: React.MouseEvent<HTMLButtonElement>) => {
            if (openSelect === true) {
                setOpenSelect(false)
            }
            setAnchorElSlider(event.currentTarget);
            setOpenSlider((prev) => placementSlider !== newPlacement || !prev);
            setPlacementSlider(newPlacement);
    };
    const handleSliderMenuItemClick = () => {
        setOpenSlider(false);
    };

    return(
        <Box>
            <Toolbar sx={{ml: '13px'}}>
                <SearchBar/>

                {/* Weather Select */}
                <Paper
                    component="form"
                    sx={{ mt: 2, ml: 1, display: 'flex', justifyContent: 'center', width: '45px', height: '45px', borderRadius: '10px' }}
                >
                    <IconButton onClick={handleWeatherSelect('bottom')} sx={{borderRadius: '10px'}}>
                        {IconOptions[selectedIndex]}
                    </IconButton>
                </Paper>
            
                {/* Weather Slider */}
                <Paper
                    component="form"
                    sx={{ mt: 2, ml: 1, p: '2px 4px', display: 'flex', justifyContent: 'center', width: '100px', height: '45px', borderRadius: '10px' }}
                >
                    <IconButton onClick={handleWeatherSlider('bottom')} sx={{borderRadius: '10px', mx: 1}}>
                        <ThermostatIcon sx={{mr: 1}}/>

                        <Typography>
                            {tempSlider} °C
                        </Typography>
                    </IconButton>
                </Paper>
            </Toolbar>

            <Popper open={openSelect} anchorEl={anchorElSelect} placement={placementSelect} transition>
                {({ TransitionProps }) => (
                <Grow {...TransitionProps} timeout={350}>
                    <Paper>
                        <ToggleButtonGroup>
                            {options.map((option, index) => (
                                <Tooltip key = {option} title={options[index]} arrow>
                                    <ToggleButton
                                        value = 'center'
                                        onClick={() => {
                                            handleSelectMenuItemClick(index)
                                            setSelectedIndex(index)
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
            <Popper open={openSlider} anchorEl={anchorElSlider} placement={placementSlider} transition>
                {({ TransitionProps }) => (
                <Grow {...TransitionProps} timeout={350}>
                    <Paper sx={{ width: 300}}>
                        <Box sx={{ width: 250, ml: 3}}>
                            <PrettoSlider
                                valueLabelDisplay="auto"
                                aria-label="pretto slider"
                                value={tempSlider}
                                onChange={handleSliderChange}
                                sx={{mt: 1}}
                                min={-30}
                                max={50}
                                onClick={() => {
                                    handleSliderMenuItemClick()
                                }}
                            />
                        </Box>
                    </Paper>
                </Grow>
                )}
            </Popper>
        </Box>
    )
}