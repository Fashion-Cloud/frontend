import {
    Typography
} from '@mui/material';
import { useEffect, useState } from 'react';


export default function FirstInfo(){
    const [blogTitle, setBlogTitle] = useState('');
    const [count, setCount] = useState(0);
    const completionWord = '요즘 날씨, 어떤 옷을 입을지 고민된다면?';

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setBlogTitle((prevTitleValue) => {
              let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
              setCount(count + 1);
      
              if (count >= completionWord.length) {
                setCount(0);
                setBlogTitle('');
              }
      
              return result;
            });
        }, 200);

        return () => {
            clearInterval(typingInterval);
        };
    });

    return(
        <Typography 
            fontFamily='CookieRun-Regular'
            fontStyle='normal'
            fontWeight='bold'
            fontSize='27pt'
            style={{
                position: 'absolute',
                left: '200px',
                top: '350px',
                color: "#eeeeff"
            }}
        >
            {/* 요즘 날씨, 어떤 옷을 입을지 고민된다면? */}
            {blogTitle}
        </Typography>
    )
}