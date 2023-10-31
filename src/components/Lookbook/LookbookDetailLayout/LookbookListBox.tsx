import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {
  Box,
  Card,
  CardMedia,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useFindSomeBooks } from 'src/api/hook/LookbookHook';

import { SinglePostType } from '../../../utils/types';

export default function LookbookListBox() {
  const [open, setOpen] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpen = (index: number) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [lookbook, setLookbook] = useState<SinglePostType[]>([]);

  const { data: someLookBookData } = useFindSomeBooks();

  useEffect(() => {
    if (someLookBookData?.data) {
      setLookbook(someLookBookData?.data.data.posts);
    }
    console.log('someLookBookData?.data: ', someLookBookData?.data);
  }, [someLookBookData]);

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentImageIndex < lookbook.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  function lookbookList() {
    if (!lookbook || !Array.isArray(lookbook)) {
      return <div>Loading...</div>;
    }
    if (!Array.isArray(lookbook)) {
      return <div>lookbook is not an array</div>;
    }

    return (
      <Grid container spacing={3}>
        {lookbook &&
          lookbook.map((item, index) => (
            <Grid item key={index} xs={4}>
              <Card
                sx={{ borderRadius: '10px', cursor: 'pointer' }}
                onClick={() => {
                  handleOpen(index);
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  {item.image && (
                    <CardMedia
                      component="img"
                      image={item.image}
                      sx={{
                        height: '350px',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  )}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '100px',
                      backgroundColor: 'transparent',
                      backgroundImage:
                        'linear-gradient(to top, rgba(0, 0, 0, 0.54), rgba(0, 0, 0, 0))', // Apply gradient
                      color: 'white',
                      padding: '10px',
                      transition: 'background-image 0.3s', // Change transition property to background-image
                      '&:hover': {
                        // Change gradient on hover
                        backgroundImage:
                          'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ mt: 5, ml: 1 }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
      </Grid>
    );
  }

  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Box width="50px" />

      {lookbookList()}

      <Box width="50px" />
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            margin: 1,
            ml: 3,
          }}
        >
          <WbSunnyIcon />
          {lookbook?.length > 0 && (
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              {lookbook[currentImageIndex].windChill}°C
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {lookbook?.length > 0 && (
            <img
              src={lookbook[currentImageIndex].image}
              alt={lookbook[currentImageIndex].title}
              style={{ width: '100%', height: '600px', objectFit: 'cover' }}
            />
          )}
        </Box>
        <Divider />
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton onClick={handlePrev} disabled={currentImageIndex === 0}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ height: 63, mx: 10 }}
          />
          <IconButton
            onClick={handleNext}
            disabled={currentImageIndex === lookbook?.length - 1}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Toolbar>
      </Dialog>
    </Box>
  );
}
