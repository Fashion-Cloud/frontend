import Stories from 'react-insta-stories';
import {Story} from "react-insta-stories/dist/interfaces";
import {Box, Modal} from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 750,
  width: 550,
};

const stories: Story[] = [
  {
    url: 'https://fashion-cloud.s3.ap-northeast-2.amazonaws.com/d4dcafa7-c1d7-43e0-807d-730ec3811542-%E1%84%8C%E1%85%A6%E1%84%82%E1%85%B5.jpeg',
    header: {
      heading: 'Mohit Karekar',
      subheading: 'Posted 5h ago',
      profileImage: 'https://picsum.photos/1000/1000'
    }
  }, {
    url: 'https://fashion-cloud.s3.ap-northeast-2.amazonaws.com/e0782c64-0689-4190-8179-b0e03928e22b-IMG_3402.JPG',
    header: {
      heading: 'Mohit Karekar',
      subheading: 'Posted 32m ago',
      profileImage: 'https://picsum.photos/1080/1920'
    }
  }, {
    url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
    header: {
      heading: 'mohitk05/react-insta-stories',
      subheading: 'Posted 32m ago',
      profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
    }
  }, {
    url: 'https://fashion-cloud.s3.ap-northeast-2.amazonaws.com/d4dcafa7-c1d7-43e0-807d-730ec3811542-%E1%84%8C%E1%85%A6%E1%84%82%E1%85%B5.jpeg',
    header: {
      heading: 'Mohit Karekar',
      subheading: 'Posted 5h ago',
      profileImage: 'https://picsum.photos/1000/1000'
    }
  }, {
    url: 'https://fashion-cloud.s3.ap-northeast-2.amazonaws.com/e0782c64-0689-4190-8179-b0e03928e22b-IMG_3402.JPG',
    header: {
      heading: 'Mohit Karekar',
      subheading: 'Posted 32m ago',
      profileImage: 'https://picsum.photos/1080/1920'
    }
  }, {
    url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
    header: {
      heading: 'mohitk05/react-insta-stories',
      subheading: 'Posted 32m ago',
      profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
    }
  }
]

interface StoryProps {
  openDetail: boolean;
  onClose: () => void;
}

function DisplayStory({ openDetail, onClose }: StoryProps) {
  return (
    <Modal open={openDetail} onClose={onClose}>
      <Box sx={style}>
        <Stories
          stories={stories}
          defaultInterval={1500}
          width={432}
          height={768}
        />
      </Box>
    </Modal>
  );
}

export default DisplayStory;