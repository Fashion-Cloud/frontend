import React from "react"
import { 
    Toolbar, 
    Typography,
    Slider,
    Box
} from "@mui/material";
import { styled } from '@mui/material/styles';

type ReviewProps = {
    getReviewData: Function;
}

const reviewMarks = [
    {
      value: 0,
      label: '추웠다'
    },
    {
      value: 1,
      label: '서늘했다'
    },
    {
      value: 2,
      label: '괜찮았다'
    },
    {
      value: 3,
      label: '따뜻했다'
    },
    {
      value: 4,
      label: '더웠다'
    }
];

const PrettoSlider = styled(Slider)({
    color: '#87A9D7',
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
});

export default function AddReview({getReviewData}: ReviewProps) {
    const [reviewSlider, setReviewSlider] = React.useState<number>(2);

    const handleReviewChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setReviewSlider(newValue);
            getReviewData(newValue);
        }
    };

    return(
        <Toolbar sx={{mt: '-10px'}}>
            <Typography fontFamily='BalooBhaijaan' fontWeight='700' fontSize='16pt'>
                Review: 
            </Typography>
            <Box  sx={{ width: 250, ml: '20px', mt: '30px' }}>
                <PrettoSlider
                    aria-label="pretto slider"
                    step={1}
                    max={4}
                    marks={reviewMarks}
                    value={reviewSlider}
                    onChange={handleReviewChange}
                />
            </Box>
        </Toolbar>
    )
}