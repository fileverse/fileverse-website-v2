import React from 'react';

import { useMediaQuery } from '@mui/material';
import Image from 'next/image';

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
        isMediaMax1025px && 'w-[300px] h-[480px]'
      } rounded-ld py-8 px-4 mr-4 mt-4 `}
    >
      <div className={``}>
        <div
          className={`${
            isMediaMax1025px
              ? 'items-start h-[200px]'
              : ' items-center h-[250px]'
          }  flex justify-center`}
        >
          <div
            className={`h-[100%]  ${
              isMediaMax1025px ? 'w-auto' : 'w-[380px] '
            }`}
          >
            <Image
              src={image}
              style={{ width: '100%', height: '100%' }}
              alt="fileverse-subdomain-window"
            />
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-center font-semibold text-2xl">{title}</h2>
          <p className="text-center h-[75px]">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
