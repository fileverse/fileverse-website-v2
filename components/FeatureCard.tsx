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
      className={`bg-[#FFFCE7] flex items-center flex-none ${
        isMediaMax1025px ? 'w-[20rem]' : 'w-[38rem] h-[37rem]'
      } rounded-md p-4 m-4 `}
    >
      <div
        className={`border h-full border-black ${
          isMediaMax1025px ? '' : ' grid grid-rows-4'
        }`}
      >
        <div className="items-center row-span-3 border border-black flex justify-center">
          <img
            src={image.src}
            className="w-[30rem]"
            alt="fileverse-subdomain-window"
          />
        </div>
        <div className="border border-black">
          <h2 className="text-center font-semibold text-2xl">{title}</h2>
          <p className="text-center">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
