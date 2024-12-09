import React, { useEffect, useRef, useState } from 'react';
import { Readex_Pro } from 'next/font/google';
import { Modal } from '~/components/modal';
import { CreateStoryProps } from './props';
import { UploadImage } from '~/components/uploadImage';
import { showSuccessToast } from '~/components/toasts';
import Image from 'next/image';
import profile_placeholder from '~/images/profile_placeholder.webp';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export const CreateStory = ({ isModalOpen, setModalOpen }: CreateStoryProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState<any>();
  const [city, setCity] = useState('DevDads');
  const [isCitySelectionOpen, setCitySelectionOpen] = useState(false);
  const [storyImage, setStoryImage] = useState(null);

  const cityOptions = ['DevDads', 'Cluj', 'City H']; // TO BE REPLACED WITH REAL DATA
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setDescription(value);

    // Extract tags from the text and add them to the tags array
    const words = value.split(/\s+/); // Split by spaces and line breaks
    const newTags = words
      .filter(word => word.startsWith('#') && word.length > 1) // Filter out # only and empty tags
      .map(tag => tag.substring(1));
    setTags(newTags);
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height to auto to recalculate the height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to match the scrollHeight
    }
  }, [description]);

  const handleCreateStory = () => {
    setModalOpen(false);
    showSuccessToast('Story created!');
  };

  const selectCity = (option: string) => {
    setCitySelectionOpen(!isCitySelectionOpen);
    setCity(option);
  };

  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
      <div className="w-11/12 mx-auto">
        <div className="flex items-center">
          <Image src={profile_placeholder} width={100} height={100} alt="card" className="h-11 w-11" />
          <div className={`${readexPro.className} font-thin mx-3`}>Carmel User</div>
          <button
            disabled={!description || !city}
            className={`w-24 text-sm justify-center items-center ml-auto bg-cyan text-black h-8 rounded-md ${
              !description || !city ? 'bg-cyan/50 cursor-not-allowed' : ''
            }`}
            onClick={handleCreateStory}>
            Post Story
          </button>
        </div>
        <div className="flex flex-col mb-5 mt-5">
          <textarea
            placeholder="What is the title of your story?"
            value={title}
            onChange={(event: any) => setTitle(event.target.value)}
            className={`${readexPro.className} border border-opacity-10 text-left p-2 bg-transparent h-10 w-full`}
            style={{
              borderColor: 'cyan',
              outline: 'none',
              resize: 'none', // Disable textarea resizing by the user
              overflow: 'hidden', // Hide the scroll bar
              boxShadow: 'none',
            }}
          />

          <style jsx>{`
            textarea::placeholder {
              color: gray; /* Set the color of the placeholder text */
              font-style: normal; /* Optionally, apply italic style */
              font-weight: lighter;
            }
          `}</style>
        </div>
        <div className="flex flex-col mb-5 mt-5">
          <textarea
            placeholder="What is your story?"
            value={description}
            ref={textareaRef}
            onChange={handleInputChange}
            className={`${readexPro.className} border border-opacity-10 text-left p-2 bg-transparent min-h-[260px] h-auto w-full`}
            style={{
              borderColor: 'cyan',
              outline: 'none',
              resize: 'none', // Disable textarea resizing by the user
              overflowX: 'hidden', // Hide the horizontal scroll bar
              boxShadow: 'none',
              maxHeight: '260px', // Set max height to 500px
              overflowY: description.split('\n').length > 10 ? 'scroll' : 'hidden', // Show vertical scroll bar if height exceeds 500px
            }}
            rows={Math.max(description.split('\n').length, 1)} // Dynamically adjust rows based on content
          />

          <style jsx>{`
            textarea::placeholder {
              color: gray; /* Set the color of the placeholder text */
              font-style: normal; /* Optionally, apply italic style */
              font-weight: lighter;
            }
          `}</style>

          <div className="flex flex-wrap">
            {tags?.map((tag: string, index: number) => (
              <span
                key={index}
                className={`${readexPro.className} text-xs bg-cyan/50 text-black px-2 py-1 rounded-md mr-2 mt-2 animate-pulse`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className={`flex ${storyImage ? 'flex-col' : 'flex-row'} gap-x-3`}>
          <div className="flex flex-col sm:mb-5" title="Upload Image">
            <UploadImage setImage={setStoryImage} />
          </div>
          <div
            onClick={() => setCitySelectionOpen(!isCitySelectionOpen)}
            className={`${readexPro.className} h-14 w-14 rounded-full cursor-pointer border border-cyan mb-2`}
            title="Select City">
            <span className={`${readexPro.className} flex mt-3.5 ml-2 `}>CITY</span>
          </div>
          {isCitySelectionOpen && (
            <div className="bg-black border border-cyan text-white w-32 p-2 mb-2 absolute bottom-3 ml-32">
              <ul>
                {cityOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`${
                      option === city ? 'bg-cyan text-black' : ''
                    } hover:bg-cyan hover:text-black h-8 text-center pt-1 cursor-pointer`}
                    onClick={() => selectCity(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* <button
          disabled={!description || !city}
          className={`w-full hidden sm:flex justify-center items-center mx-auto bg-cyan text-black h-10 rounded-md ${
            !description || !city ? 'bg-cyan/50 cursor-not-allowed' : ''
          }`}
          onClick={handleCreateStory}>
          Post Story
        </button> */}
      </div>
    </Modal>
  );
};
