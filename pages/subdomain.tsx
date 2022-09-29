import React from 'react';

import { useMediaQuery } from '@mui/material';

import BodyWrapper from '../components/BodyWrapper';
import HeadSectionLayout from '../components/HeadSectionLayout';
import PrimaryButton from '../components/PrimaryButton';
import SectionLayout from '../components/SectionLayout';
import nextArrow from '../public/assets/nextArrow.svg';
import subdomainImage from '../public/assets/subdomainImage.svg';

const Subdomain = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <BodyWrapper>
      <>
        <HeadSectionLayout>
          <div className="flex min-h-[85vh] justify-center p-4">
            <div
              className={`lg:w-[90%] ${
                isMediaMax1025px && 'w-full'
              } flex flex-wrap items-center`}
            >
              <div className={`lg:w-[50%] ${isMediaMax1025px && 'w-full'}`}>
                <h2
                  className={`font-bold lg:text-5xl ${
                    isMediaMax1025px && 'text-3xl text-center'
                  } `}
                >
                  Google Drive but much better
                </h2>
                <div
                  className={`flex ${
                    isMediaMax1025px && ' justify-center'
                  } my-4`}
                >
                  <h6 className="font-semibold">On-Chain</h6>
                  <h6 className="mx-3">-</h6>
                  <h6 className="font-semibold">Private</h6>
                  <h6 className="mx-3">-</h6>
                  <h6 className="font-semibold">For You</h6>
                </div>
                <p className={`mt-8   ${isMediaMax1025px && 'text-center'}`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries
                </p>
                <div
                  className={`mt-4  ${
                    isMediaMax1025px && 'flex justify-center'
                  } `}
                >
                  <PrimaryButton
                    title={'Launch'}
                    linkTo={'https://beta.fileverse.io/'}
                  />
                </div>
              </div>
              <div
                className={`lg:w-[50%] ${
                  isMediaMax1025px && 'w-full'
                } flex items-center justify-center relative`}
              >
                <div className="relative">
                  <img src={subdomainImage.src} alt="fileverse-window" />
                </div>
              </div>
            </div>
          </div>
        </HeadSectionLayout>
        <SectionLayout>
          <div className="border w-full flex flex-col border-black">
            <h2 className="font-bold text-center border border-black text-3xl">
              Steps
            </h2>
            <div className="border flex flex-wrap justify-center border-red mt-4">
              <div className="w-64 m-4 bg-[#F3F3F3] rounded-xl p-4 h-60 flex flex-col justify-center items-center">
                <h2>Pick</h2>
                <h2>Your Chain</h2>
              </div>
              <div className="flex items-center mx-4">
                <img src={nextArrow.src} />
              </div>
              <div className="border w-64 m-4 bg-[#F3F3F3] rounded-xl p-4 h-60 flex flex-col justify-center items-center ">
                <h2>Pick</h2>
                <h2>Your Chain</h2>
              </div>
              <div className="flex items-center mx-4">
                <img src={nextArrow.src} />
              </div>
              <div className="w-64 m-4 bg-[#F3F3F3] rounded-xl p-4 h-60 flex flex-col justify-center items-center">
                <h2>Pick</h2>
                <h2>Your Chain</h2>
              </div>
            </div>
          </div>
        </SectionLayout>
      </>
    </BodyWrapper>
  );
};

export default Subdomain;
