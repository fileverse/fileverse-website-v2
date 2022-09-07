/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { useMediaQuery } from '@mui/material';
import type { NextPage } from 'next';

import BodyWrapper from '../components/BodyWrapper';
import ContentLayout from '../components/ContentLayout';
import FeaturesSection from '../components/FeaturesSection';
import HeadSectionLayout from '../components/HeadSectionLayout';
import ImageLayout from '../components/ImageLayout';
import ListWithIconCard from '../components/ListWithIconCard';
import PrimaryButton from '../components/PrimaryButton';
import SectionLayout from '../components/SectionLayout';
import BlockChain from '../public/assets/BlockChain.svg';
import check from '../public/assets/check.svg';
import Crypto from '../public/assets/Crypto.svg';
import Dao from '../public/assets/Dao.svg';
import familyIcon from '../public/assets/familyIcon.svg';
import fileverseWindow from '../public/assets/fileSampleImage.svg';
import filverseVase from '../public/assets/fileVase.svg';
import global from '../public/assets/global.svg';
import Nft from '../public/assets/Nft.svg';
import padLock from '../public/assets/padlock.svg';
import Tweets from '../public/assets/Tweets.svg';
import Web3 from '../public/assets/Web3.svg';

const Home: NextPage = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');

  return (
    <BodyWrapper>
      <>
        <HeadSectionLayout>
          <>
            <div className="flex min-h-[85vh] justify-center p-4">
              <div
                className={` lg:w-[90%] ${
                  isMediaMax1025px && 'w-full'
                } flex flex-wrap items-center`}
              >
                <div className={`lg:w-[50%] ${isMediaMax1025px && 'w-full'}`}>
                  <h1
                    className={`font-bold lg:text-5xl ${
                      isMediaMax1025px && 'text-3xl text-center'
                    } `}
                  >
                    File sharing for <br /> Web3 communities.
                  </h1>
                  <p className={`mt-4  ${isMediaMax1025px && 'text-center'}`}>
                    Easy file sharing between blockchain addresses & built on
                    top of decentralized protocols. Use our token-gating
                    features to control who can access your documents, images,
                    audio and videos.
                  </p>
                  <div
                    className={`mt-4  ${
                      isMediaMax1025px && 'flex justify-center'
                    } `}
                  >
                    <PrimaryButton
                      title={'Visit Dapp'}
                      linkTo={'https://beta.fileverse.io/'}
                    />
                  </div>
                </div>
                <div
                  className={`lg:w-[50%] ${
                    isMediaMax1025px && 'w-full'
                  } flex justify-center`}
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
        <SectionLayout>
          <div className={`lg:flex`}>
            <ImageLayout>
              <img
                className="h-full"
                src={filverseVase.src}
                alt="fileverse-wallet-vase"
              />
            </ImageLayout>
            <ContentLayout>
              <div className="">
                <div className="flex w-full">
                  <h2 className="font-bold ml-12 text-3xl">
                    What you can expect
                  </h2>
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
                    className={`mt-8 lg:pl-12  ${
                      isMediaMax1025px && 'flex justify-center'
                    }`}
                  >
                    <PrimaryButton title="More ..." />
                  </div>
                </div>
              </div>
            </ContentLayout>
          </div>
        </SectionLayout>
        <FeaturesSection />
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
                      <img
                        className="w-32"
                        src={familyIcon.src}
                        alt="fileverse family icon"
                      />
                    </div>
                    <h3 className="text-center font-semibold">
                      Our Friends and Families
                    </h3>
                    <p className="text-center">
                      We dont use Google Drive. We share files à la Web3
                    </p>
                  </div>
                  <div className=" m-2 w-[20rem]">
                    <div className="flex justify-center">
                      <img className="w-32" src={Dao.src} alt="dao" />
                    </div>
                    <h3 className="text-center font-semibold">DAOs</h3>
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
                    <h3 className="text-center font-semibold">
                      NFT Communities
                    </h3>
                    <p className="text-center">
                      Share any file with anyone that owns a specific NFT (eg.
                      BAYC or a membership NFT)
                    </p>
                  </div>
                  <div className="m-2 w-[20rem] ">
                    <div className="flex justify-center">
                      <img
                        className="w-32"
                        src={Web3.src}
                        alt="fileverse web3 icon"
                      />
                    </div>
                    <h3 className="text-center font-semibold">
                      Web3 Companies
                    </h3>
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
                        alt="fileverse crypto-publisher"
                      />
                    </div>
                    <h3 className="text-center font-semibold">
                      Cryto Publishers
                    </h3>
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
                    <h3 className="text-center font-semibold">
                      Blockchain Natives
                    </h3>
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
        <div className="bg-[#FFE60033] w-[100vw] mt-12 p-4">
          <h2 className="font-bold text-2xl text-center">Recent Tweets</h2>
          <div className="mt-8">
            <div className="flex overflow-x-auto no-scrollbar">
              <img src={Tweets.src} alt="tweet" />
              <img src={Tweets.src} alt="tweet" />
              <img src={Tweets.src} alt="tweet" />
              <img src={Tweets.src} alt="tweet" />
              <img src={Tweets.src} alt="tweet" />
            </div>
          </div>
        </div>
      </>
    </BodyWrapper>
  );
};

export default Home;
