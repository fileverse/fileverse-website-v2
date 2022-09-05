/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { useMediaQuery } from '@mui/material';
import type { NextPage } from 'next';

import BodyWrapper from '../components/BodyWrapper';
import FeatureCard from '../components/FeatureCard';
import HeadSectionLayout from '../components/HeadSectionLayout';
import ListWithIconCard from '../components/ListWithIconCard';
import PrimaryButton from '../components/PrimaryButton';
import SectionLayout from '../components/SectionLayout';
import backArrow from '../public/assets/backArrow.svg';
import BlockChain from '../public/assets/BlockChain.svg';
import check from '../public/assets/check.svg';
import Crypto from '../public/assets/Crypto.svg';
import Dao from '../public/assets/Dao.svg';
import familyIcon from '../public/assets/familyIcon.svg';
import fileverseWindow from '../public/assets/fileSampleImage.svg';
import fileTypes from '../public/assets/fileTypes.svg';
import filverseVase from '../public/assets/fileVase.svg';
import forwardArrow from '../public/assets/forwardArrow.svg';
import global from '../public/assets/global.svg';
import Nft from '../public/assets/Nft.svg';
import padLock from '../public/assets/padlock.svg';
import subdomainWindow from '../public/assets/subdomainWindow.svg';
import Tweets from '../public/assets/Tweets.svg';
import Web3 from '../public/assets/Web3.svg';

const Home: NextPage = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <BodyWrapper>
      <div className="">
        <HeadSectionLayout>
          <>
            <div className="flex h-[85vh] border border-black min-h-[600px] justify-center p-4">
              <div
                className={`${
                  isMediaMax1025px ? 'w-full' : 'w-[90%]'
                } flex flex-wrap items-center`}
              >
                <div className={`${isMediaMax1025px ? 'w-full' : 'w-[50%]'}`}>
                  <h1
                    className={`font-bold ${
                      isMediaMax1025px ? 'text-3xl text-center' : 'text-5xl'
                    } `}
                  >
                    File sharing for
                  </h1>
                  <h1
                    className={`font-bold  ${
                      isMediaMax1025px ? 'text-3xl text-center' : 'text-5xl'
                    }`}
                  >
                    Web3 communities.
                  </h1>
                  <p
                    className={`mt-4  ${isMediaMax1025px ? 'text-center' : ''}`}
                  >
                    Easy file sharing between blockchain addresses & built on
                    top of decentralized protocols. Use our token-gating
                    features to control who can access your documents, images,
                    audio and videos.
                  </p>
                  <div
                    className={`mt-4  ${
                      isMediaMax1025px ? 'flex justify-center' : ''
                    } `}
                  >
                    <PrimaryButton title={'Visit Dapp'} linkTo={'/'} />
                  </div>
                </div>
                <div
                  className={`${
                    isMediaMax1025px ? 'w-full' : 'w-[50%]'
                  } flex justify-center border border-black`}
                >
                  <img
                    className=""
                    src={fileverseWindow.src}
                    alt="fileverse-window"
                  />
                </div>
              </div>
            </div>
          </>
        </HeadSectionLayout>
        {/* second second */}
        <SectionLayout>
          <div className={` ${isMediaMax1025px ? '' : 'flex'} `}>
            <div
              className={`${
                isMediaMax1025px ? '' : 'w-[50%] mr-8'
              } flex items-center border border-black justify-center`}
            >
              <img
                className="h-[35rem]"
                src={filverseVase.src}
                alt="fileverse-wallet-vase"
              />
            </div>
            <div
              className={` ${
                isMediaMax1025px ? 'mt-12' : 'w-[50%] m-8'
              } flex border border-black items-center `}
            >
              <div className="">
                <div className="flex w-full">
                  <h1 className="font-bold ml-12 text-3xl">
                    What you can expect
                  </h1>
                </div>
                <div className="w-full">
                  <ListWithIconCard
                    title="What you can expect"
                    icon={check}
                    paragraph={
                      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                    }
                  />
                  <ListWithIconCard
                    title="What you can expect"
                    icon={padLock}
                    paragraph={
                      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                    }
                  />
                  <ListWithIconCard
                    title="What you can expect"
                    icon={global}
                    paragraph={
                      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                    }
                  />
                  <div
                    className={`mt-8  ${
                      isMediaMax1025px ? 'flex justify-center' : 'pl-12'
                    }`}
                  >
                    <PrimaryButton title="More ..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionLayout>
        {/* Added section */}
        <SectionLayout>
          <div className="border border-black flex items-center w-full">
            <div className="w-full">
              <div className="flex">
                <h1 className="font-bold text-3xl">Features</h1>
                <div className="w-full flex justify-end">
                  <img
                    src={backArrow.src}
                    alt="back-arrow"
                    className="w-8 h-8 m-2"
                  />
                  <img
                    src={forwardArrow.src}
                    alt="back-arrow"
                    className="w-8 m-2 h-8"
                  />
                </div>
              </div>
              <div className="border flex overflow-auto border-red no-scrollbar">
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
                  image={subdomainWindow}
                  title={'Subdomain'}
                  text="Subdomain The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                />{' '}
              </div>
            </div>
          </div>
        </SectionLayout>
        {/* Third section */}
        <div className="flex flex-col mt-8 justify-center ">
          <div className="">
            <div className="p-4">
              <h2 className="font-bold text-center text-2xl">
                For whom did we build this tool?
              </h2>
            </div>
            <div className="flex justify-center">
              <div className="w-[90%]">
                <div className=" flex flex-wrap bg-yellow justify-center drop-shadow-lg rounded-md w-full">
                  <div className="m-2 w-[20rem]">
                    <div className="flex justify-center">
                      <img className="w-32" src={familyIcon.src} />
                    </div>
                    <h1 className="text-center font-semibold">
                      Our Friends and Families
                    </h1>
                    <p className="text-center">
                      We dont use Google Drive. We share files à la Web3
                    </p>
                  </div>
                  <div className=" m-2 w-[20rem]">
                    <div className="flex justify-center">
                      <img className="w-32" src={Dao.src} alt="dao" />
                    </div>
                    <h1 className="text-center font-semibold">DAOs</h1>
                    <p className="text-center">
                      Share your alpha with anons that own the DAO's token.
                      Membership-gating!
                    </p>
                  </div>
                  <div className="m-2 w-[20rem]">
                    <div className="flex justify-center">
                      <img
                        className="w-32"
                        src={Nft.src}
                        alt="nft-community-image"
                      />
                    </div>
                    <h1 className="text-center font-semibold">
                      NFT Communities
                    </h1>
                    <p className="text-center">
                      Share any file with anyone that owns a specific NFT (eg.
                      BAYC or a membership NFT)
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap bg-yellow justify-center drop-shadow-lg rounded-md w-full">
                  <div className="m-2 w-[20rem] ">
                    <div className="flex justify-center">
                      <img className="w-32" src={Web3.src} />
                    </div>
                    <h1 className="text-center font-semibold">
                      Web3 Companies
                    </h1>
                    <p className="text-center">
                      Create your token/NFT & only team members it can access
                      your files
                    </p>
                  </div>
                  <div className="m-2 w-[20rem]">
                    <div className="flex justify-center">
                      <img
                        className="w-32"
                        src={Crypto.src}
                        alt="crypto-publisher"
                      />
                    </div>
                    <h1 className="text-center font-semibold">
                      Cryto Publishers
                    </h1>
                    <p className="text-center">
                      Send exclusive content to your paying members wit hout
                      asking for emails..
                    </p>
                  </div>
                  <div className=" m-2 w-[20rem] ">
                    <div className="flex justify-center">
                      <img
                        className="w-32"
                        src={BlockChain.src}
                        alt="fileverse-blockchain"
                      />
                    </div>
                    <h1 className="text-center font-semibold">
                      Blockchain Natives
                    </h1>
                    <p className="text-center">
                      Get your fileverse sub-domain, like vitalik.fileverse.io &
                      use it as a one-stop-shop for all of your token-gated
                      content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fourth section */}
        <div className="bg-[#FFE60033] w-[100vw] mt-12 p-4">
          <h2 className="font-bold text-2xl text-center">Recent Tweets</h2>
          <div className="relative mt-8">
            <div className="flex overflow-x-auto no-scrollbar">
              <img src={Tweets.src} />
              <img src={Tweets.src} />
              <img src={Tweets.src} />
              <img src={Tweets.src} />
              <img src={Tweets.src} />
            </div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
};

export default Home;
