import React, { useRef, useState } from 'react';

import { useMediaQuery } from '@mui/material';

import threeDbeauty from '../public/assets/3dbeauty.png';
import accessToken from '../public/assets/access-token.png';
import chatWindow from '../public/assets/chatWindow.png';
import dPages from '../public/assets/dPages.png';
import dropDownArrow from '../public/assets/dropDownArrow.svg';
import fileTypes from '../public/assets/fileTypes.png';
import subdomainWindow from '../public/assets/subdomainWindow.png';
import tokenGating from '../public/assets/tokengating.png';
import rearrangeArrayByIDs from '../utils/rearrangeArrayByIDs';
import FeatureCard from './FeatureCard';
import SectionLayout from './SectionLayout';

const FeaturesSection = ({ portalPage }: { portalPage: boolean }) => {
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

  const features = [
    {
      id: 0,
      image: dPages,
      title: 'Decentralized Pages',
      text: 'Your Notion alternative - publish decentralized websites, blogs, technical docs, write your notes or create personal wikis/databases, and more.',
    },
    {
      id: 1,
      image: accessToken,
      title: 'Airdrop Access-Tokens',
      text: 'These tokens are NFTs that you can fully customise and send to as many addresses you want to give them access to files.',
    },
    {
      id: 2,
      image: threeDbeauty,
      title: '3D Beauty',
      text: 'Upload your 3D files and share the URL with anons, frens, or the world. View any 3D model directly on Fileverse.',
    },
    {
      id: 3,
      image: tokenGating,
      title: 'Token Gating',
      text: portalPage
        ? '‘Define the type and number of tokens (e.g. 1 CloneX) for onchain groups to gain access to your file, page, docs, etc.’ '
        : 'Create granular permissions for individuals or communities accessing your files and content. All via onchain rules.',
    },
    {
      id: 4,
      image: fileTypes,
      title: portalPage ? 'Peer-to-Peer File Sharing' : 'Multimedia',
      text: 'Upload and share any type of multimedia file. Your peers will be able to preview or download them directly on Fileverse.',
    },
    {
      id: 5,
      image: subdomainWindow,
      title: 'Live collaboration',
      text: 'Create a doc, whiteboard, or web page directly on Fileverse and collaborate with your peers. Stored on IPFS/Arweave!',
    },
    {
      id: 6,
      image: chatWindow,
      title: 'Chat Rooms & Spaces',
      text: 'Create encrypted chat rooms to coordinate. Invite your peers by sending access-NFTs. Use your ENS as your chat profile.',
    },
  ];

  const portalPageFeatures = rearrangeArrayByIDs(
    features,
    [0, 4, 3, 5, 1, 6, 2]
  );

  return (
    <SectionLayout>
      <div className="flex items-center w-full">
        <div className="w-full">
          <div className="flex items-center">
            <h2
              className={`font-bold  w-full ${
                isMediaMax1025px ? 'text-2xl' : 'text-3xl'
              }`}
            >
              Features & More
            </h2>
            <div className="flex justify-end">
              <div
                onClick={() => handleDesktopScroll('back')}
                className={` ${
                  scrollX === 0
                    ? 'bg-[#0000001A] cursor-not-allowed'
                    : 'bg-black cursor-pointer'
                } m-2 w-8 h-8  rounded-full flex items-center justify-center`}
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
                  scrolEnd
                    ? 'bg-[#0000001A] cursor-not-allowed'
                    : 'bg-black cursor-pointer'
                } m-2 w-8 h-8 rounded-full flex items-center justify-center`}
              >
                <img
                  src={dropDownArrow.src}
                  alt="back-arrow"
                  className="changeWhite -rotate-90"
                />
              </div>
            </div>
          </div>
          <div
            ref={featuresDiv}
            onScroll={() => scrollCheck(featuresDiv.current)}
            className={`flex overflow-auto no-scrollbar`}
          >
            {portalPage
              ? portalPageFeatures.map((item) => (
                  <FeatureCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    text={item.text}
                  />
                ))
              : features.map((item) => (
                  <FeatureCard
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    text={item.text}
                  />
                ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FeaturesSection;
