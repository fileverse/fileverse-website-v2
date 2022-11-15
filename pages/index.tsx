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
                    Web3’s Simplest Way <br /> to Share Files
                  </h1>
                  <p className={`mt-4  ${isMediaMax1025px && 'text-center'}`}>
                    Your tool for quick file sharing between blockchain
                    addresses and beyond Share files, create on-chain access
                    rules for them, and even dedicated chat rooms. All in a few
                    clicks
                  </p>
                  <div
                    className={`mt-4  ${
                      isMediaMax1025px && 'flex justify-center'
                    } `}
                  >
                    <PrimaryButton title={'Learn More'} linkTo={''} />
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
                    title="Decentralisation"
                    icon={check}
                    paragraph={
                      'Your files are kept on peer-to-peer storage networks and your interactions with peers managed on-chain. Oh.. and you can also enable End-to-End encryption!'
                    }
                  />
                  <ListWithIconCard
                    title="Simplicity"
                    icon={padLock}
                    paragraph={
                      'Everything you need to move away from centralised collaboration apps, just a few clicks away. All from the comfort of your crypto wallet.'
                    }
                  />
                  <ListWithIconCard
                    title="Social coordination"
                    icon={global}
                    paragraph={
                      'Blockchains are like community computers, enabling you to coordinate globally with people. Fileverse shows you how. Jump into the space of permissionless coordinating & collaboration.'
                    }
                  />
                  <div
                    className={`mt-8 lg:pl-12  ${
                      isMediaMax1025px && 'flex justify-center'
                    }`}
                  >
                    <PrimaryButton title="Learn More" />
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
                For whom Is Fileverse Solo and Filverse Co-op?
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
                      The Web3 Curious
                    </h3>
                    <p className="text-center">
                      Web3 is not only about speculation & finance. Try just
                      sharing files peer-to-peer with no one snooping on and
                      selling your personal data.
                    </p>
                  </div>
                  <div className=" m-2 w-[20rem]">
                    <div className="flex justify-center">
                      <img className="w-32" src={Dao.src} alt="dao" />
                    </div>
                    <h3 className="text-center font-semibold">DAOs</h3>
                    <p className="text-center">
                      On-chain organisations deserve on-chain collaboration
                      tools and analytics.
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
                      Crypto Natives
                    </h3>
                    <p className="text-center">
                      Think your wallet is just for buying and selling? Your
                      wallet is a powerful cryptography tool that unlocks new
                      forms of social coordination!
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
                      Start decentralising your collaboration stack. Enjoy
                      intuitive Web3 solutions to share contant, chat, and much
                      more, with your teams.
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
                      You're not going to gate that Subscriber-only article via
                      user accounts and database entries are you…? Token-gate it
                      and start creating on-chain analytics for your content via
                      custom access-tokens they can mint on the go.
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
                      NFT Communities
                    </h3>
                    <p className="text-center">
                      On-chain communities deserve on-chain collaboration tools
                      and analytics. Try Filverse Co-op for a real decentralised
                      and on-chain experience.
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
