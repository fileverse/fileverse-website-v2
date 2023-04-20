import React from 'react';

import { useMediaQuery } from '@mui/material';
import fileverse from '../public/assets/fileverse.png';

const ContractCard = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <div
      className="border-[1.5px] rounded-xl border-[#dddddd]
     w-[26rem] h-[20rem] flex flex-col mb-4 cursor-pointer "
    >
      <div className="h-full w-full">
        <div className="h-[40%] relative">
          <div
            className={`flex absolute h-16 border rounded-lg bottom-4 left-5 w-16 items-center`}
          >
            <div className="w-full justify-center flex bg-white overflow-hidden rounded-lg h-full">
              <img
                src={fileverse.src}
                alt="logo"
                className="object-cover h-full"
              />
            </div>
          </div>
          <div
            className={`flex justify-center absolute h-6 border rounded-lg bottom-2 right-4 w-12 items-center`}
          >
            300
          </div>
          <div
            className={`flex justify-center absolute h-6 border rounded-lg bottom-2 right-20 w-16 items-center`}
          >
            15.8k
          </div>
          <div className={`w-full  h-[70%]`}>
            <img
              src={fileverse.src}
              className={`h-full w-full object-cover rounded-t-lg`}
            />
          </div>
        </div>
        <div className="h-[60%] w-full px-4">
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
            <button
              className="w-[12rem] flex items-center justify-center
                    border-[1px] border-[#AAAAAA] rounded-lg	h-10 bg-[#ffffff]
                   font-semibold	 text-[#000000] text-base"
            >
              create new portal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractCard;
