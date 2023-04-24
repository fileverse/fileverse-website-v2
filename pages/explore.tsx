import React, { useState } from 'react';

import { useMediaQuery } from '@mui/material';
import { NextSeo } from 'next-seo';
import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router';
import fileverseLogo from '../public/assets/profilesvg.svg';

import searchIcon from '../public/assets/searchIcon.svg';
import arrow from '../public/assets/arrow-up-right.svg';
import exploreBanner from '../public/assets/exploreBanner.svg';
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
      <HeadNav defaultColor={true} explorePage={true} />
      <HeadSectionLayout defaultBackground={true} noFooter={true}>
        <div className="flex flex-col w-full h-full justify-center items-center">
          {/* <div className="w-[95%] h-[24vh] bg-yellow  flex flex-col items-center justify-center  rounded-xl">
            <div className="w-[32%] text-center text-[#000000] text-4xl font-semibold">
              Discover Portals to collaborate and create awesome stuff
            </div>
            <div className="w-[32%] text-center text-base text-[#333333]">
              Share and collaborate with your tribe around the world with
              security Your data is safe and E2E Encrypted
            </div>
          </div> */}
          <div className="flex flex-col w-[95%] h-[90vh] justify-between items-center py-4 mt-6">
            <div className="h-[10%] flex w-full items-center justify-between mb-6">
              <div
                className={`font-semibold ${
                  isMediaMax700px ? 'text-xl' : 'text-2xl'
                } text-[#000000]`}
              >
                Explore popular portals
              </div>
              <div
                className={`w-[50%] flex ${
                  isMediaMax1025px ? 'justify-end' : 'justify-between'
                }`}
              >
                {!isMediaMax1025px && (
                  <div
                    className="w-[70%] mr-12 flex px-6 items-center	 border rounded-xl h-[3rem] hover:outline 
           outline-black"
                  >
                    <img
                      src={searchIcon.src}
                      className="w-[18px] h-[18px] ml-2 mt-1"
                    />
                    <input
                      className="text-lg px-4 w-full h-full outline-none text-[#777777]"
                      type="text"
                      placeholder={'Search portal here...'}
                    />
                  </div>
                )}
                <div
                  className="w-[290px] min-w-[12rem] flex items-center justify-center
                     rounded-xl	h-[3rem] bg-[#000000]
                   	 text-[#ffffff] text-lg "
                >
                  <>Create your portal</>
                  <img src={arrow.src} className="w-[20px] h-[20px] ml-2" />
                </div>
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
        </div>
      </HeadSectionLayout>
    </>
  );
};

export default ExplorePage;
