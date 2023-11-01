import Image from 'next/image';
import cloudImage from 'src/assets/images/cloud.png';
import LoginBox from 'src/components/User/LoginBox';

export default function LoginPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Image
        src={cloudImage}
        alt="background"
        fill
        objectFit="cover"
        objectPosition="center"
      />
      <LoginBox />
    </div>
  );
}
