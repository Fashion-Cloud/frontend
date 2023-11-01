import Image from 'next/image';
import cloudImage from 'src/assets/images/cloud.png';
import RegisterBox from 'src/components/User/RegisterBox';

export default function RegisterPage() {
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
      <RegisterBox />
    </div>
  );
}
