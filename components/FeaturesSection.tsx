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
  const [index, setIndex] = useState(0);
  const isMediaMax1025px = useMediaQuery('(max-width: 700px)');
  const featuresArray = [
    {
      image: subdomainWindow,
      title: 'Subdomain',
      text: "Subdomain The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      image: fileTypes,
      title: 'File Types',
      text: "Subdomain The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      image: chatWindow,
      title: 'Chat',
      text: "Subdomain The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
  ];

  const sideScroll = (
    element: any,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
  const handleMobileNext = (direction: string) => {
    if (direction === 'next' && index < featuresArray.length - 1) {
      setIndex(index + 1);
    } else if (direction === 'prev' && index !== 0) {
      setIndex(index - 1);
    }
  };
  const handleDesktopScroll = (direction: string) => {
    if (direction === 'forward') {
      sideScroll(featuresDiv.current, -300, 650, 10);
    } else {
      sideScroll(featuresDiv.current, -300, 650, -10);
    }
  };
  return (
    <SectionLayout>
      <div className="flex items-center w-full">
        <div className="w-full">
          <div className="flex">
            <h1 className="font-bold text-3xl">Features</h1>
            <div className="w-full flex justify-end">
              <div
                onClick={() => {
                  if (isMediaMax1025px) {
                    handleMobileNext('prev');
                  } else {
                    handleDesktopScroll('back');
                  }
                }}
                className={` bg-[#0000001A] ${
                  index === 0 ? 'bg-[#0000001A]' : 'bg-black'
                } m-2 w-8 h-8 rounded-full flex items-center justify-center`}
              >
                <img
                  src={dropDownArrow.src}
                  alt="back-arrow"
                  className="changeWhite rotate-90"
                />
              </div>
              <div
                onClick={() => {
                  if (isMediaMax1025px) {
                    handleMobileNext('next');
                  } else {
                    handleDesktopScroll('forward');
                  }
                }}
                className={`${
                  index === featuresArray.length - 1
                    ? 'bg-[#0000001A]'
                    : 'bg-black'
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
            className={`flex overflow-auto ${
              isMediaMax1025px && 'justify-center'
            }  no-scrollbar`}
          >
            {isMediaMax1025px ? (
              <FeatureCard
                image={featuresArray[index].image}
                title={featuresArray[index].title}
                text={featuresArray[index].text}
              />
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FeaturesSection;
