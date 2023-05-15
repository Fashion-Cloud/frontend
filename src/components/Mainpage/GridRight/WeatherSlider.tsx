import {
  Box,
  Slider
} from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';

type TempProps = {
  getTempData: Function;
}

const PrettoSlider = styled(Slider)({
  color: '#7673DC',
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
    backgroundColor: '#7673DC',
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

export default function WeatherSlider({getTempData}: TempProps){
  const [tempSlider, setTempSlider] = React.useState<number>(26);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setTempSlider(newValue);
      getTempData(newValue)
    }
  };
  
  return (
      <Box sx={{width: 400,background: '#FFFFFF', mt: -11, ml: 45, borderRadius: '30px'}}>
          <Box sx={{ width: 320, ml: 5, mr: 5}}>
            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                value={tempSlider}
                onChange={handleChange}
                sx={{mt: 1}}
                min={-30}
                max={50}
            />
          </Box>
      </Box>
  );
}