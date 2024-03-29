import 'react-toastify/dist/ReactToastify.css';

import { Box, List, ListItem, ListItemText, Paper } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

import { useFindAllBooks } from '../../../api/hook/LookbookHook';
import { LookBookBoxType } from '../../../utils/types';

const paperStyle = {
  height: 300,
  width: 200,
  bgcolor: '#FFF',
  boxShadow: 24,
};

const style = {
  width: '100%',
  maxWidth: 400,
  bgcolor: 'background.paper',
};

type LookbookProps = {
  handeLookClick: (id: string) => void;
  handleMarkClose: () => void;
};

export default function LookbookPopover({
  handeLookClick,
  handleMarkClose,
}: LookbookProps) {
  // toastify 알람 실행 함수 만들기
  const success = () => toast.success('이미지 업로드 성공!');

  const [lookbook, setLookbook] = useState<LookBookBoxType[]>([]);
  const { data: lookBookData } = useFindAllBooks();

  useEffect(() => {
    if (lookBookData?.data) {
      setLookbook(lookBookData?.data.data);
    }
  }, [lookBookData]);

  return (
    <Paper sx={paperStyle}>
      <List sx={style} component="nav">
        <ListItem divider>
          <ListItemText primary="룩북" />
        </ListItem>

        {Array.isArray(lookbook) &&
          lookbook.map((lookbook, index) => (
            <ListItem
              key={index}
              button
              onClick={() => {
                handeLookClick(lookbook.id);
                handleMarkClose();
                success();
              }}
            >
              <Box sx={{ mr: '10px' }}>
                <Image
                  height={40}
                  width={40}
                  src={lookbook.image}
                  alt={lookbook.title}
                />
              </Box>

              <ListItemText primary={lookbook.title} sx={{ mt: '-3px' }} />
            </ListItem>
          ))}
      </List>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Paper>
  );
}
