import React, { useState } from 'react';

import { useMediaQuery } from '@mui/material';
import { NextSeo } from 'next-seo';
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router';
import fileverseLogo from '../public/assets/fileverse.png';

import BodyWrapper from '../components/BodyWrapper';
import FeaturesSection from '../components/FeaturesSection';
import HeadSectionLayout from '../components/HeadSectionLayout';
import PrimaryButton from '../components/PrimaryButton';
import dropDownArrow from '../public/assets/dropDownArrow.svg';
import nextArrow from '../public/assets/nextArrow.svg';
import portalHero from '../public/assets/portalHero.png';
import step1 from '../public/assets/step1.png';
import step2 from '../public/assets/step2.png';
import xicon from '../public/assets/x-icon.svg';
import HeadNav from '../components/HeadNav';
import ContractCard from '../components/ContractCard';

const ExplorePage = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  const isMediaMax1260px = useMediaQuery('(max-width: 1262px)');
  const isMediaMax700px = useMediaQuery('(max-width: 700px)');
  const [openedTab, setOpenedTab] = useState<string[]>([]);
  const [notification, setNotification] = useState(true);
  const isMediaMax1280px = useMediaQuery('(max-width: 1280px)');
  const isMediaMax1120px = useMediaQuery('(max-width: 1120px)');
  const isMediaMax570px = useMediaQuery('(max-width: 570px)');
  const router = useRouter();

  const getBannerFontSize = () => {
    if (isMediaMax570px) {
      return 'text-[8px]';
    }
    if (isMediaMax700px) {
      return 'text-[10px]';
    }
    if (isMediaMax1280px) {
      return 'text-[12px]';
    }
    return 'text-[14px]';
  };

  return (
    <>
      <HeadNav defaultColor={true} />
      <HeadSectionLayout defaultBackground={true} noFooter={true}>
        <div className="flex flex-col w-full h-[85vh] justify-between items-center p-4 mt-6">
          <div className="h-[10%] flex w-full items-center justify-between mb-6">
            <div className="font-semibold text-xl ">
              Explore popular portals
            </div>
            <div className="w-[50%] flex justify-between">
              <div
                className="w-[80%] mr-12 flex px-2 items-center	 border rounded-md h-10 hover:outline 
           outline-black"
              >
                <img src="" className="w-[24px] h-[24px] ml-2" />
                <input
                  className=" text-md px-4 w-full h-full outline-none"
                  type="text"
                  placeholder={'Search here...'}
                />
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
          <div className="h-[90%] w-full border-[1.5px] rounded-xl border-[#dddddd] p-4">
            <div
              className={`h-full w-full flex flex-wrap items-start overflow-y-scroll no-scrollbar gap-4 ${
                isMediaMax1260px ? 'justify-evenly' : ''
              } `}
            >
              <ContractCard />
              <ContractCard />
              <ContractCard />
              <ContractCard />
              <ContractCard />
              <ContractCard />
              <ContractCard />
              <ContractCard />
              <ContractCard />
              <ContractCard />
              <ContractCard />
              <ContractCard />
              <ContractCard />
              <ContractCard />
            </div>
          </div>
        </div>
      </HeadSectionLayout>
    </>
  );
};

export default ExplorePage;
