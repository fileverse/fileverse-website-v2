import React, { useState } from 'react';

import { useMediaQuery } from '@mui/material';
import arrow from '../public/assets/arrow-up-right.svg';

import likeIcon from '../public/assets/likeIcon.svg';
import boltIcon from '../public/assets/boltIcon.svg';
const allContract = [{}];
const ContractCard = ({
  name,
  logo,
  cover,
}: {
  name: string;
  logo: string;
  cover: string;
}) => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  const [hoverButton, setHoverButton] = useState(false);
  return (
    <div
      className="w-[28rem] h-[20rem] border-[1px] rounded-xl border-[#dddddd]
       flex flex-col mb-4 cursor-pointer hover:border-[5px]  hover:border-[#FFF9CE]"
      onMouseOver={() => setHoverButton(true)}
      onMouseOut={() => setHoverButton(false)}
    >
      <div className="h-full w-full">
        <div className="h-[45%] relative">
          <div
            className={`flex absolute h-[5rem] border rounded-lg bottom-0 left-5 w-[5rem] items-center`}
          >
            <div className="w-full justify-center flex bg-white overflow-hidden rounded-lg h-full">
              <img src={logo} alt="logo" className="object-cover h-full" />
            </div>
          </div>
          <div
            className={`flex justify-center absolute h-[32px] border-[1px]  border-[#E2E2E2] rounded-lg bottom-0  right-4 w-[90px] items-center`}
          >
            <img src={likeIcon.src} alt="logo" className="h-[12px] mr-2" />
            300
          </div>
          <div
            className={`flex justify-center absolute h-[32px] border-[1px] border-[#E2E2E2] rounded-lg bottom-0 right-28 w-[90px] items-center`}
          >
            <img src={boltIcon.src} alt="logo" className="h-[14px] mr-2" />
            15.8k
          </div>
          <div className={`w-full  h-[75%]`}>
            <img
              src={cover}
              className={`h-full w-full object-cover rounded-t-lg`}
            />
          </div>
        </div>
        <div className="h-[55%] w-full px-4">
          <div className="w-full h-full flex flex-col ">
            <div className=" font-semibold text-[#000000] text-xl mb-2">
              {name}
            </div>
            <div className="h-[60px] flex text-xs mb-4 overflow-y-scroll no-scrollbar">
              Breathe in. Breathe out. Follow our content for smooth visual
              breathing techniques. Send our GIF files to anyone that needs help
              breathing . Visit us before your Google or Zoom calls. breathing
              [woo-sah]
            </div>
            <div
              className={`w-[10rem] flex items-center justify-center
                   rounded-lg	h-[42px] 
                   font-semibold	 text-[#000000] text-base ${
                     hoverButton
                       ? 'bg-yellow'
                       : 'bg-[#ffffff]   border-[2px] border-[#E2E2E2]'
                   }`}
            >
              Explore Portal
              <img
                src={arrow.src}
                className="w-[20px] h-[20px] ml-2"
                style={{
                  filter:
                    'invert(100%) sepia(16%) saturate(7463%) hue-rotate(222deg) brightness(119%) contrast(115%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractCard;
