import React from 'react';

import { useMediaQuery } from '@mui/material';

import BodyWrapper from '../components/BodyWrapper';
import HeadSectionLayout from '../components/HeadSectionLayout';
import ListWithIconCard from '../components/ListWithIconCard';
import PrimaryButton from '../components/PrimaryButton';
import SectionLayout from '../components/SectionLayout';
import AccessToken from '../public/assets/AccessToken.svg';
import chatWindow from '../public/assets/chatWindow.svg';
import fileTypes from '../public/assets/fileTypes.svg';
import profileWindow from '../public/assets/profileWindow.svg';
import subdomainWindow from '../public/assets/subdomainWindow.svg';
import tick from '../public/assets/tick.svg';
import walletList from '../public/assets/walletList.svg';
import dropDownArrow from '../public/assets/whiteArrow.svg';
import whyConnectWindow from '../public/assets/whyConnectWindow.svg';

const Features = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <BodyWrapper>
      <>
        <HeadSectionLayout>
          <>
            <div className="w-[90vw] border border-black flex flex-wrap items-center">
              <div className={`${isMediaMax1025px ? 'w-full' : 'w-[50%]'}`}>
                <h1
                  className={`font-bold ${
                    isMediaMax1025px ? 'text-3xl text-center' : 'text-5xl'
                  } `}
                >
                  What you can expect
                </h1>
                <p className={`mt-4  ${isMediaMax1025px ? 'text-center' : ''}`}>
                  Easy file sharing between blockchain addresses & built on top
                  of decentralized protocols. Use our token-gating features to
                  control who can access your documents, images, audio and
                  videos.
                </p>
              </div>
              <div
                className={`${
                  isMediaMax1025px ? 'w-full' : 'w-[50%]'
                } h-full bg-center bg-no-repeat flex items-center justify-center relative`}
              >
                <div className="relative">
                  <img src={whyConnectWindow.src} alt="fileverse-window" />
                  <img
                    className="absolute top-[100px] right-4"
                    src={walletList.src}
                  />
                </div>
              </div>
            </div>
          </>
        </HeadSectionLayout>
        {/* Subdomain */}
        <SectionLayout>
          <>
            <div
              className={`h-full mr-8 w-[50%] flex justify-center items-center`}
            >
              <img
                className="h-full"
                src={subdomainWindow.src}
                alt="fileverse-wallet-vase"
              />
            </div>
            <div className="h-full flex w-[50%] items-center justify-center">
              <div className="">
                <div className="flex w-full">
                  <h2 className="font-bold ml-12 text-3xl">Subdomain</h2>
                </div>
                <div className="w-full">
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                    }
                  />
                </div>
              </div>
            </div>
          </>
        </SectionLayout>
        {/* Chat */}
        <SectionLayout>
          <>
            <div className="h-full w-[50%] mr-8 flex items-center ">
              <div className="">
                <div className="flex w-full">
                  <h2 className="font-bold ml-12 text-3xl">Chat</h2>
                </div>
                <div className="w-full">
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                    }
                  />
                </div>
              </div>
            </div>
            <div className="h-full w-[50%] flex justify-center">
              <img
                className="h-full"
                src={chatWindow.src}
                alt="fileverse-wallet-vase"
              />
            </div>
          </>
        </SectionLayout>

        <div className="bg-yellow">
          {/* File Types  */}
          <SectionLayout>
            <>
              <div className={`h-full w-[50%] mr-8 flex justify-center`}>
                <img
                  className="h-full"
                  src={fileTypes.src}
                  alt="fileverse-wallet-vase"
                />
              </div>
              <div className="h-full w-[50%] m-8 flex items-center ">
                <div className="">
                  <div className="flex w-full">
                    <h2 className="font-bold ml-12 text-3xl">File Types</h2>
                  </div>
                  <div className="w-full">
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                      }
                    />
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                      }
                    />
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                      }
                    />
                  </div>
                </div>
              </div>
            </>
          </SectionLayout>
          {/* Access Token */}
          <SectionLayout>
            <>
              <div className="h-full w-[50%] mr-8 flex items-center justify-center ">
                <div className="">
                  <div className="flex w-full">
                    <h2 className="font-bold ml-12 text-3xl">Access NFTS</h2>
                  </div>
                  <div className="w-full">
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                      }
                    />
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                      }
                    />
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                      }
                    />
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="h-full w-[50%] mr-8 flex justify-center">
                <img
                  className="h-full"
                  src={AccessToken.src}
                  alt="fileverse-wallet-vase"
                />
              </div>
            </>
          </SectionLayout>
        </div>
        {/* Profile */}
        <SectionLayout>
          <>
            <div className={`h-full w-[50%] mr-8 flex justify-center`}>
              <img
                className="h-full"
                src={profileWindow.src}
                alt="fileverse-wallet-vase"
              />
            </div>
            <div className="h-full w-[50%] m-8 flex items-center ">
              <div className="">
                <div className="flex w-full">
                  <h2 className="font-bold ml-12 text-3xl">Profile</h2>
                </div>
                <div className="w-full">
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
                    }
                  />
                </div>
              </div>
            </div>
          </>
        </SectionLayout>
        {/* More Feature */}
        <div className="mb-12">
          <div className="p-4">
            <h2 className="font-bold text-center ml-12 text-3xl">
              More features to come
            </h2>
          </div>
          <div className="bg-yellow p-8 flex justify-center mt-8">
            <PrimaryButton
              title="Go to Dapp"
              icon={dropDownArrow}
              iconStyles="ml-4"
            />
          </div>
        </div>
      </>
    </BodyWrapper>
  );
};

export default Features;
