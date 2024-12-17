import { useState } from 'react';

export const useImageUpload = () => {
  const [image, setImage] = useState();

  const handleEditImageClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.addEventListener('change', (event: any) => {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    });

    input.click();
  };

  return { image, handleEditImageClick };
};
