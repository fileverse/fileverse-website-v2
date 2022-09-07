import { useMediaQuery } from '@mui/material';
import React, { useRef, useState } from 'react';

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
            <h2 className="font-bold text-3xl">Features</h2>
            <div className="w-full flex justify-end">
              <div
                onClick={() => handleDesktopScroll('back')}
                className={` bg-[#0000001A] ${
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
                title={'Subdomain'}
                text="Subdomain The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
              />
              <FeatureCard
                image={fileTypes}
                title={'File Types'}
                text="Subdomain The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
              />
              <FeatureCard
                image={chatWindow}
                title={'Chat'}
                text="Subdomain The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
              />
              <FeatureCard
                image={subdomainWindow}
                title={'Subdomain'}
                text="Subdomain The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
              />
            </>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FeaturesSection;
