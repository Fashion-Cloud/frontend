import Stories from 'react-insta-stories';
import {Story} from "react-insta-stories/dist/interfaces";
import {Box, Modal} from "@mui/material";
import {useEffect, useState} from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 800,
  width: 850,
};

const stories: Story[] = [
  {
    url: 'https://fashion-cloud.s3.ap-northeast-2.amazonaws.com/d4dcafa7-c1d7-43e0-807d-730ec3811542-%E1%84%8C%E1%85%A6%E1%84%82%E1%85%B5.jpeg',
    header: {
      heading: '너무 이쁘어요!',
      subheading: 'Mohit Karekar',
      profileImage: 'https://fashion-cloud.s3.ap-northeast-2.amazonaws.com/d4dcafa7-c1d7-43e0-807d-730ec3811542-%E1%84%8C%E1%85%A6%E1%84%82%E1%85%B5.jpeg'
    }
  }, {
    url: 'https://fashion-cloud.s3.ap-northeast-2.amazonaws.com/e0782c64-0689-4190-8179-b0e03928e22b-IMG_3402.JPG',
    header: {
      heading: '와우...',
      subheading: 'Mohit Karekar',
      profileImage: 'https://avatars.githubusercontent.com/u/83361012?v=4'
    }
  }, {
    url: 'https://fashion-cloud.s3.ap-northeast-2.amazonaws.com/d4dcafa7-c1d7-43e0-807d-730ec3811542-%E1%84%8C%E1%85%A6%E1%84%82%E1%85%B5.jpeg',
    header: {
      heading: 'insta란 이런 것...',
      subheading: 'mohitk05',
      profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
    }
  }, {
    url: 'https://fashion-cloud.s3.ap-northeast-2.amazonaws.com/d4dcafa7-c1d7-43e0-807d-730ec3811542-%E1%84%8C%E1%85%A6%E1%84%82%E1%85%B5.jpeg',
    header: {
      heading: '넘나 힘드러..',
      subheading: 'Mohit Karekar',
      profileImage: 'https://avatars.githubusercontent.com/u/83361012?v=4'
    }
  }, {
    url: 'https://fashion-cloud.s3.ap-northeast-2.amazonaws.com/e0782c64-0689-4190-8179-b0e03928e22b-IMG_3402.JPG',
    header: {
      heading: '이쁘지?',
      subheading: 'Mohit Karekar',
      profileImage: 'https://avatars.githubusercontent.com/u/83361012?v=4'
    }
  }, {
    url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
    header: {
      heading: '아니 인스타 스토리 라이브러리 레퍼런스가 별로 없으요...',
      subheading: 'mohitk05',
      profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
    }
  }
]

interface StoryProps {
  openDetail: boolean;
  onClose: () => void;
}

export default function DisplayStory({ openDetail, onClose }: StoryProps) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const handleSelectStory = (index: number) => {
    setCurrentStoryIndex(index);
  };

  const StoryPreview = ({ story, index }: { story: Story; index: number }) => {
    return (
      <div onClick={() => handleSelectStory(index)}  style={{ width: '200px', height: '300px', margin: '0 10px', position: 'relative', cursor: 'pointer' }}>
        <img src={story.url} alt="story preview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.5, borderRadius: '5px' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
          <img src={story.header&&story.header.profileImage} alt="profile" style={{ width: 60, height: 60, borderRadius: '50%' }} />
        </div>
      </div>
    );
  };

  useEffect(() => {
    setCurrentStoryIndex(0);
  }, [])

  return (
    <Modal open={openDetail} onClose={onClose}>
      <Box sx={style} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* 이전 스토리 미리보기 */}
        {currentStoryIndex > 0 ? (
          <StoryPreview story={stories[currentStoryIndex - 1]} index={currentStoryIndex - 1} />
        ) : (
          <div style={{ width: '222px' }}></div>
        )}

        <Stories
          stories={[stories[currentStoryIndex]]}
          defaultInterval={5000}
          width={432}
          height={768}
          onStoryEnd={() => {
            if (currentStoryIndex < stories.length - 1) {
              setCurrentStoryIndex(currentStoryIndex + 1);
            }
          }}
        />

        {/* 다음 스토리 미리보기 */}
        {currentStoryIndex < stories.length - 1 ? (
          <StoryPreview story={stories[currentStoryIndex + 1]} index={currentStoryIndex + 1} />
        ) : (
          <div style={{ width: '222px' }}></div>
        )}

      </Box>
    </Modal>
  );
};