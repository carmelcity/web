import React from 'react';
import { CommunityBusiness } from './CommunityBusiness';
import { StudioBusiness } from './StudioBusiness';
import { LabBusiness } from './LabBusiness';
import { FeaturedBusiness } from './FeaturedBusiness';
import { FeaturedProduct } from './FeaturedProduct';
import { FeaturedLab } from './FeaturedLab';

const Main = () => {
  return (
    <div className="w-full mx-auto items-center flex justify-center bg-dark-indigo lg:-mt-48 -mt-96">
      <div className="flex flex-col">
        <CommunityBusiness />
        <FeaturedBusiness />
        <FeaturedProduct />
      </div>
    </div>
  );
};

export default Main;
