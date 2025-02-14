/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { useMediaQuery } from '@mui/material';
import type { NextPage } from 'next';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

import BodyWrapper from '../components/BodyWrapper';
import ContentLayout from '../components/ContentLayout';
import FeaturesSection from '../components/FeaturesSection';
import HeadSectionLayout from '../components/HeadSectionLayout';
import ImageLayout from '../components/ImageLayout';
import ListWithIconCard from '../components/ListWithIconCard';
import PrimaryButton from '../components/PrimaryButton';
import ProductsDisplay from '../components/ProductsDisplay';
import SectionLayout from '../components/SectionLayout';
import SubHeading from '../components/SubHeading';
import TweetCard from '../components/TweetCard';
import WhomCard from '../components/WhomCard';
import devDaoTweet1 from '../public/assets/1devdao.png';
import coinbaseTweet2 from '../public/assets/2Coinbase.png';
import filecoinTweet3 from '../public/assets/3filecoin.png';
import scrollTweet4 from '../public/assets/4scroll.png';
import gnosisTweet5 from '../public/assets/5gnosis.png';
import tweet6 from '../public/assets/6.png';
import tweet7 from '../public/assets/7.png';
import tweet8 from '../public/assets/8.png';
import BlockChain from '../public/assets/BlockChain.png';
import check from '../public/assets/check.svg';
import Crypto from '../public/assets/Crypto.png';
import Dao from '../public/assets/Dao.png';
import ddocsImg from '../public/assets/dDocsImg.png';
import dropDownArrow from '../public/assets/dropDownArrow.svg';
import familyIcon from '../public/assets/familyIcon.png';
import fileverseVase from '../public/assets/fileVase.png';
import fileverseWindow from '../public/assets/fileverseWindow.png';
import global from '../public/assets/global.svg';
import heroMobile from '../public/assets/hero-mobile.png';
import Nft from '../public/assets/Nft.png';
import padLock from '../public/assets/padlock.svg';
import hero from '../public/assets/portalHero.png';
import solo from '../public/assets/solo.png';
import Web3 from '../public/assets/Web3.png';

const Home: NextPage = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  const isMediaMax1440px = useMediaQuery('(max-width: 1440px)');

  return (
    <BodyWrapper portalPage={true}>
      <>
        <HeadSectionLayout noFooter={true} defaultBackground={true}>
          <>
            <div className="flex min-h-[85vh] justify-center">
              <div
                className={` lg:w-[90%] ${
                  isMediaMax1025px && 'w-full flex-col justify-evenly mt-24'
                } flex items-center`}
              >
                <div className={`lg:w-[50%] ${isMediaMax1025px && 'w-full'}`}>
                  <h1
                    className={`font-bold  lg:text-4xl ${
                      isMediaMax1025px &&
                      'text-2xl flex flex-col items-center justify-center mt-4'
                    } `}
                  >
                    Your simplest way to
                    <Typewriter
                      options={{
                        strings: [
                          'collaborate',
                          'share knowledge',
                          'manage files',
                          'create content',
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h1>
                  <p
                    className={`mt-4 ${
                      isMediaMax1025px ? 'text-center w-full' : 'w-[80%]'
                    }`}
                  >
                    Onchain communities and individuals deserve onchain tools
                    for collaboration and productivity.
                  </p>
                  <div
                    className={`my-4  ${
                      isMediaMax1025px && 'flex justify-center'
                    } `}
                  >
                    <PrimaryButton title={'Learn More'} linkTo={'#product'} />
                  </div>
                </div>
                <div
                  className={`lg:w-[50%] ${
                    isMediaMax1025px && 'w-[90vw]'
                  } flex justify-center`}
                >
                  <Image
                    src={isMediaMax1025px ? heroMobile : hero}
                    style={{ width: '100%', height: 'auto' }}
                    alt="fileverse-window"
                  />
                </div>
              </div>
            </div>
          </>
        </HeadSectionLayout>
        <HeadSectionLayout
          id="product"
          noFooter={true}
          defaultBackground={true}
        >
          <>
            <div
              className={`flex mt-[4.5vh] lg:w-[90%] ${
                isMediaMax1440px && 'flex-wrap'
              } justify-evenly items-center 2xl:gap-8 lg:p-4`}
            >
              <ProductsDisplay
                background={'bg-[#F8F9FA]'}
                productName={`Fileverse Portal`}
                CTAButtonLink={'/portal'}
                firstDescription={
                  'Privacy-enhancing and onchain alternative to Google Workspace & Notion'
                }
                CTAButtonTitle={'Create Your Portal'}
                CTAbuttonDisabled={false}
                displayImage={fileverseWindow}
                CTADescription={''}
              />
              <ProductsDisplay
                productName={`dDocs.new`}
                CTAButtonLink={'https://docs.fileverse.io/'}
                firstDescription={
                  'Time to ditch Go*gle d*cs ddocs.new: Privacy-enhancing. Peer-to-peer. Self-sovereign.'
                }
                CTAButtonTitle={'Open document'}
                CTAbuttonDisabled={false}
                displayImage={ddocsImg}
                CTADescription={''}
              />
              {/* {!isMediaMax1025px && (
                <div className="h-full flex items-center justify-center">
                  <div className="relative w-[50px] h-[500px]">
                    <div className="line"></div>
                    <div className="text-center h-[12px] absolute left-0 right-0 top-[50%] mt-[-12px] z-20">
                      <div className="bg-yellow font-semibold">OR</div>
                    </div>
                  </div>
                </div>
              )} */}
              <ProductsDisplay
                background={'bg-[#F8F9FA]'}
                productName={`Fileverse Solo`}
                CTAButtonLink={'https://beta.fileverse.io'}
                CTAButtonTitle={'Launch App'}
                displayImage={solo}
                firstDescription={'Privacy-first file sharing, simplified'}
                secondDescription={'Share any files with or without a wallet'}
                CTADescription={''}
              />
            </div>
          </>
        </HeadSectionLayout>
        <SectionLayout>
          <div className={`lg:flex`}>
            <ImageLayout>
              <Image
                src={fileverseVase}
                alt="fileverse-wallet-vase"
                style={{ width: isMediaMax1025px ? '480px' : '100%' }}
              />
            </ImageLayout>
            <ContentLayout>
              <div className="">
                <div className="flex w-full">
                  <h2
                    className={`font-bold  ${
                      isMediaMax1025px
                        ? 'text-2xl text-center w-full'
                        : 'text-3xl ml-12'
                    }`}
                  >
                    What you can expect
                  </h2>
                </div>
                <div className="w-full">
                  <ListWithIconCard
                    title="Decentralisation"
                    icon={check}
                    paragraph={
                      'Your files are stored on peer-to-peer storage networks and access permissions are done via a smart contract and User Controlled Authorization Networks (UCANs). Oh.. and everything is end-to-end encrypted!'
                    }
                  />
                  <ListWithIconCard
                    title="Simplicity"
                    icon={padLock}
                    paragraph={
                      'Everything you need to move away from centralised servers and predatory surveillance practices, in just a few clicks. All from the comfort of your own wallet and key pair. Yes, it’s all yours.'
                    }
                  />
                  <ListWithIconCard
                    title="Coordination"
                    icon={global}
                    paragraph={
                      'Blockchains are community computers, enabling you to coordinate globally with people. Use Fileverse to explore permissionless coordination & collaboration.'
                    }
                  />
                  <div
                    className={`mt-8 lg:pl-12  ${
                      isMediaMax1025px && 'flex justify-center'
                    }`}
                  >
                    <PrimaryButton linkTo="/features" title="Learn More" />
                  </div>
                </div>
              </div>
            </ContentLayout>
          </div>
        </SectionLayout>
        <FeaturesSection portalPage={false} />
        <div className="flex flex-col mt-8 justify-center ">
          <div className="">
            <div className="p-4">
              <SubHeading text={'Who can benefit from Fileverse?'} />
            </div>
            <div className="flex justify-center">
              <div className="w-[75%]">
                <div className=" flex pb-8 flex-wrap bg-yellow justify-center drop-shadow-lg rounded-md w-full">
                  <WhomCard
                    image={familyIcon}
                    title={'The Web3 Curious'}
                    description={`Web3 is more than finance. It offers tools to better control your data, coordinate with peers without relying on centralized servers, and unleash your creativity. All without the need to buy tokens.`}
                  />

                  <WhomCard
                    image={Dao}
                    title={'DAOs'}
                    description={`Onchain organisations deserve onchain collaboration tools. Use Fileverse to co-create and share public knowledge-bases. Share trustlessly and keep important information available to all, forever, uncensorable.`}
                  />

                  <WhomCard
                    image={Nft}
                    title={`Crypto Natives`}
                    description={`Your wallet can do a lot more than just financial transactions: use it to unlock new forms of social coordination and content production! Use Fileverse as your safe haven connected to your centralised tools.`}
                  />

                  <WhomCard
                    image={Web3}
                    title={`Decentralised Teams`}
                    description={`Create a workspace from your Safe Multisig; publish your documentation or knowledgebase on our Notion alternative; live edit dDocs & whiteboards; and use perma storage for important public content.`}
                  />

                  <WhomCard
                    image={Crypto}
                    title={`Content Creators`}
                    description={`Move away from apps that limit you and your followers. Gain full independence, create a community through token-gating / access-token airdrop, enable direct subscribers & discover new engagement metrics.`}
                  />

                  <WhomCard
                    image={BlockChain}
                    title={'Hackathon Participants and Researchers'}
                    description={`Publish your project info on a decentralised web page and share your code, database, and files authoritatively. Show the world what you are capable of!`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFE60033] w-[100vw] mt-12 p-4 relative">
          <SubHeading text="Fileverse on Twitter" />
          <div className="mt-8">
            <div className=" flex overflow-auto no-scrollbar items-start gap-10">
              <div
                className={`absolute right-2 top-[50%] m-2 w-8 h-8 bg-black opacity-30 rounded-full flex items-center justify-center z-10`}
              >
                <img
                  src={dropDownArrow.src}
                  alt="back-arrow"
                  className="changeWhite -rotate-90"
                />
              </div>
              <TweetCard image={devDaoTweet1} />
              <TweetCard image={coinbaseTweet2} />
              <TweetCard image={filecoinTweet3} />
              <TweetCard image={scrollTweet4} />
              <TweetCard image={gnosisTweet5} />
              <TweetCard image={tweet6} />
              <TweetCard image={tweet7} />
              <TweetCard image={tweet8} />
            </div>
          </div>
        </div>
      </>
    </BodyWrapper>
  );
};

export default Home;
