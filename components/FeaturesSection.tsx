import React, { useRef, useState } from 'react';

import { useMediaQuery } from '@mui/material';

import chatWindow from '../public/assets/chatWindow.svg';
import dropDownArrow from '../public/assets/dropDownArrow.svg';
import fileTypes from '../public/assets/fileTypes.svg';
import subdomainWindow from '../public/assets/subdomainWindow.svg';
import FeatureCard from './FeatureCard';
import SectionLayout from './SectionLayout';

const FeaturesSection = () => {
  const featuresDiv = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');

  const sideScroll = (element: any, distance: number, step: number) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    });
  };

  const handleDesktopScroll = (direction: string) => {
    const distance = isMediaMax1025px ? 330 : 430;
    if (direction === 'forward') {
      sideScroll(featuresDiv.current, distance, 10);
    } else {
      sideScroll(featuresDiv.current, distance, -10);
    }
  };
  const scrollCheck = (element: any) => {
    setscrollX(element.scrollLeft);
    if (
      Math.floor(element.scrollWidth - element.scrollLeft) <=
      element.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  return (
    <SectionLayout>
      <div className="flex items-center w-full">
        <div className="w-full">
          <div className="flex">
            <h2 className="font-bold text-3xl w-full">Features & More</h2>
            <div className="w-full flex justify-end">
              <div
                onClick={() => handleDesktopScroll('back')}
                className={` ${
                  scrollX === 0 ? 'bg-[#0000001A]' : 'bg-black'
                } m-2 w-8 h-8 rounded-full flex items-center justify-center`}
              >
                <img
                  src={dropDownArrow.src}
                  alt="back-arrow"
                  className="changeWhite rotate-90"
                />
              </div>
              <div
                onClick={() => handleDesktopScroll('forward')}
                className={`${
                  scrolEnd ? 'bg-[#0000001A]' : 'bg-black'
                } m-2 w-8 h-8 rounded-full flex items-center justify-center`}
              >
                <img
                  src={dropDownArrow.src}
                  alt="back-arrow"
                  className=" changeWhite -rotate-90"
                />
              </div>
            </div>
          </div>
          <div
            ref={featuresDiv}
            onScroll={() => scrollCheck(featuresDiv.current)}
            className={`flex overflow-auto no-scrollbar`}
          >
            <>
              <FeatureCard
                image={subdomainWindow}
                title={'Chat Rooms & Spaces'}
                text="Create encrypted chat rooms to collaborate with peers on a file. Invite people by sending them an access-token (Fil_POAP). Use your ENS as your profile."
              />
              <FeatureCard
                image={fileTypes}
                title={'Airdrop Access-Tokens'}
                text="Access-tokens/Fil_POAPs are NFTs that you can customise from scratch and send to as many addresses you want to give them access to a file, chat room, or Fileverse Co-op."
              />
              <FeatureCard
                image={chatWindow}
                title={'3D Beauty '}
                text="Upload your 3D models on Fileverse, and share the URL with your anons, frens, or the world. "
              />
              <FeatureCard
                image={subdomainWindow}
                title={'Multimedia'}
                text=" Upload and share any type of files. Your peers will be able to preview them on Fileverse or download them."
              />
              <FeatureCard
                image={subdomainWindow}
                title={'Token-gate'}
                text="Give exclusive access to a file or chat room to existing on-chain communities or groups. Define the type and number of tokens or NFTs needed (eg. a BAYC or 10 ETH) to gain access to your file or chat room."
              />
              <FeatureCard
                image={subdomainWindow}
                title={'Live collaboration '}
                text="Create a document or whiteboard directly on Fileverse and collaborate live with your peers. See their ENS or address as they contribute to the document."
              />
            </>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FeaturesSection;
