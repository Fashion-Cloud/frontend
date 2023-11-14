import { Avatar } from '@mui/material';
import { useState } from 'react';

type Props = {
  nick: string;
};

export default function UserIcon({ nick }: Props) {
  const [blueLine, setBlueLine] = useState<boolean>(true);

  return (
    <div
      style={{
        textAlign: 'center',
      }}
      onClick={() => (setBlueLine(false), console.log('bluecheck', blueLine))}
    >
      <div
        style={{
          border: blueLine ? '4px solid transparent' : '4px solid transparent',
          borderRadius: '50%',
          backgroundImage: blueLine
            ? 'linear-gradient(#fff, #fff), linear-gradient(to bottom, #0066FF 0%,  #A6CAFF 100%)'
            : 'linear-gradient(#fff, #fff), linear-gradient(to bottom, #a6a6a6 0%,  #E7E7E7 100%)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'content-box, border-box',
          marginLeft: '1.2rem',
          marginRight: '1.2rem',
        }}
      >
        <Avatar sx={{ width: 80, height: 80 }} />
      </div>
      <div style={{ marginTop: 6, marginBottom: 17 }}>{nick}</div>
    </div>
  );
}
