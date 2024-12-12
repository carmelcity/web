import React, { useState, useRef, Dispatch, SetStateAction } from 'react';
import { Image } from '../icons';

export const UploadImage = ({ setImage }: any) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click(); // Trigger file input click when image is clicked
  };

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setSelectedImage(selectedFile);
      setImage(selectedFile);
    } else {
      console.error('Please select a valid image file.');
    }
  };

  return (
    <div>
      {selectedImage && (
        <div className="flex">
          <img alt="Uploaded" src={URL.createObjectURL(selectedImage)} />
          <br />
          <button
            className="bg-red-500 w-6 text-black rounded-full absolute right-14 mt-2 "
            onClick={() => {
              setSelectedImage(null), setImage(null);
            }}>
            x
          </button>
        </div>
      )}

      {!selectedImage && (
        <div onClick={handleImageClick} className="w-14 rounded-full justify-center border border-cyan cursor-pointer">
          <Image />
        </div>
      )}

      {/* Hidden file input element */}
      <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFileChange} />
    </div>
  );
};
