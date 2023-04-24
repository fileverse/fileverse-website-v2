import React, { useState } from 'react';

import { useMediaQuery } from '@mui/material';
import arrow from '../public/assets/arrow-up-right.svg';

import profile from '../public/assets/profilesvg.svg';
import cover from '../public/assets/cover.svg';
import likeIcon from '../public/assets/likeIcon.svg';
import boltIcon from '../public/assets/boltIcon.svg';

const ContractCard = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  const [hoverButton, setHoverButton] = useState(false);
  return (
    <div
      className="border-[1.5px] rounded-xl border-[#dddddd]
     w-[26rem] h-[20rem] flex flex-col mb-4 cursor-pointer hover:border-[5px]  hover:border-[#FFF9CE]"
      onMouseOver={() => setHoverButton(true)}
      onMouseOut={() => setHoverButton(false)}
    >
      <div className="h-full w-full">
        <div className="h-[45%] relative">
          <div
            className={`flex absolute h-[5rem] border rounded-lg bottom-0 left-5 w-[5rem] items-center`}
          >
            <div className="w-full justify-center flex bg-white overflow-hidden rounded-lg h-full">
              <img
                src={profile.src}
                alt="logo"
                className="object-cover h-full"
              />
            </div>
          </div>
          <div
            className={`flex justify-center absolute h-[32px] border  border-[#E2E2E2] rounded-lg bottom-0 right-4 w-[90px] items-center`}
          >
            <img src={likeIcon.src} alt="logo" className="h-[12px] mr-2" />
            300
          </div>
          <div
            className={`flex justify-center absolute h-[32px] border border-[#E2E2E2] rounded-lg bottom-0 right-28 w-[90px] items-center`}
          >
            <img src={boltIcon.src} alt="logo" className="h-[14px] mr-2" />
            15.8k
          </div>
          <div className={`w-full  h-[75%]`}>
            <img
              src={cover.src}
              className={`h-full w-full object-cover rounded-t-lg`}
            />
          </div>
        </div>
        <div className="h-[55%] w-full px-4">
          <div className="w-full h-full flex flex-col ">
            <div className=" font-semibold text-[#000000] text-xl mb-2">
              {'Fileverse'}
            </div>
            <div className=" flex text-xs mb-4">
              Breathe in. Breathe out. Follow our content for smooth visual
              breathing techniques. Send our GIF files to anyone that needs help
              breathing . Visit us before your Google or Zoom calls.
              Wooooooooosah [woo-sah]
            </div>
            <div
              className={`w-[10rem] flex items-center justify-center
                    border-[1px] border-[#AAAAAA] rounded-lg	h-[42px] 
                   font-semibold	 text-[#000000] text-base ${
                     hoverButton ? 'bg-yellow' : 'bg-[#ffffff]'
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
