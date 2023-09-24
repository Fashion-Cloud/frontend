import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import GridOnIcon from '@mui/icons-material/GridOn';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

import LookbookLayout from '../layout/LookbookLayout';
import MyPostLayout from '../layout/MyPostLayout';

export default function TabBox() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
        <Tab
          label={
            <Box display="flex">
              <GridOnIcon sx={{ mt: '-4px', mr: '5px' }} />
              게시글
            </Box>
          }
          value={0}
        />
        <Tab
          label={
            <Box display="flex">
              <BookmarkBorderIcon sx={{ mt: '-4px', mr: '5px' }} />
              룩북
            </Box>
          }
          value={1}
        />
      </Tabs>

      {value === 0 && (
        <Box>
          <MyPostLayout />
        </Box>
      )}

      {value === 1 && (
        <Box>
          <LookbookLayout />
        </Box>
      )}
    </Box>
  );
}
