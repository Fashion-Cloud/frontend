import { Box, Card, CardMedia, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useFindAllBooks } from 'src/api/hook/LookbookHook';

import { LookBookBoxType } from '../../../utils/types';
import useLookbookNameStore from '../../../utils/zustand/lookbook/LookbookNameStore';

export default function LookbookBox() {
  const { setLookbookName } = useLookbookNameStore();

  const [lookbook, setLookbook] = useState<LookBookBoxType[]>([]);

  const { data: lookBookData } = useFindAllBooks();

  useEffect(() => {
    if (lookBookData?.data) {
      setLookbook(lookBookData?.data.data);
    }
  }, [lookBookData]);

  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
      <Box width="50px" />

      <Grid container spacing={3}>
        {Array.isArray(lookbook) &&
          lookbook.map((lookbook, index) => (
            <Grid item key={index} xs={4}>
              <Link
                href={{
                  pathname: '/lookbookdetail/[id]',
                  query: { id: lookbook.id },
                }}
              >
                <Card
                  sx={{ borderRadius: '10px', cursor: 'pointer' }}
                  onClick={() => {
                    setLookbookName(lookbook.title);
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      image={lookbook.image}
                      sx={{
                        height: '350px',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '100px',
                        bgcolor: 'transparent',
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
                        {lookbook.title}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Link>
            </Grid>
          ))}
      </Grid>
      <Box width="50px" />
    </Box>
  );
}
