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
        isMediaMax1025px ? 'w-[300px]' : 'w-[38rem] h-[37rem]'
      } rounded-md p-4 m-4 `}
    >
      <div className={`h-full ${isMediaMax1025px ? '' : ' grid grid-rows-4'}`}>
        <div className="items-center row-span-3 flex justify-center">
          <img
            src={image.src}
            className={`w-[30rem] ${isMediaMax1025px ? 'h-[15rem]' : ''} `}
            alt="fileverse-subdomain-window"
          />
        </div>
        <div className="">
          <h2 className="text-center font-semibold text-2xl">{title}</h2>
          <p className="text-center">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
