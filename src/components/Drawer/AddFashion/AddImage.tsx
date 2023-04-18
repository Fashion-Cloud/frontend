import { useState } from 'react'

const preview_URL: string = 'https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif';

export default function AddImage() {
    let inputRef;

    const [image, setImage] = useState({
        image_file: "",
        preview_URL: preview_URL,
    });

    const saveImage = (e: any) => {
        e.preventDefault();
        if (e.target.files[0]) {
          // 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
          URL.revokeObjectURL(image.preview_URL);
          const preview_URL = URL.createObjectURL(e.target.files[0]);
          setImage(() => ({
            image_file: e.target.files[0],
            preview_URL: preview_URL,
          }));
        }
    };

      
}