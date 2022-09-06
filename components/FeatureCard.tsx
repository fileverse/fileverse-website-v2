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
        isMediaMax1025px ? 'w-[22rem]' : 'w-[500px]'
      } rounded-ld p-4 m-4 `}
    >
      <div className={``}>
        <div className="items-center flex justify-center">
          <img
            src={image.src}
            className={`w-[380px] h-[380px]  `}
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
