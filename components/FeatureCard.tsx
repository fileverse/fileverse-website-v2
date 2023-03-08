import React from 'react';

import { useMediaQuery } from '@mui/material';

interface CardTypes {
  image: any;
  title: string;
  text: string;
}
const FeatureCard = ({ image, title, text }: CardTypes) => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <div
      className={`bg-white border border-[#E2E2E2] rounded-xl lg:w-[500px]  flex items-center flex-none ${
        isMediaMax1025px && 'w-[300px]'
      } rounded-ld py-8 px-4 mr-4 mt-4 `}
    >
      <div className={``}>
        <div className="items-center h-[250px] flex justify-center">
          <img
            src={image.src}
            className={`w-[380px] ${isMediaMax1025px ? '' : 'h-full'}`}
            alt="fileverse-subdomain-window"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-center font-semibold text-2xl">{title}</h2>
          <p className="text-center">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
