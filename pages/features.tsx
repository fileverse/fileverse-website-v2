import React from 'react';

import { useMediaQuery } from '@mui/material';

import BodyWrapper from '../components/BodyWrapper';
import ContentLayout from '../components/ContentLayout';
import HeadSectionLayout from '../components/HeadSectionLayout';
import ImageLayout from '../components/ImageLayout';
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
            <div className=" border border-black flex flex-wrap items-center">
              <div
                className={`border border-black ${
                  isMediaMax1025px ? 'w-full' : 'w-[50%]'
                }`}
              >
                <h1
                  className={`font-bold ${
                    isMediaMax1025px ? 'text-3xl text-center' : 'text-5xl'
                  } `}
                >
                  What you can expect
                </h1>
                <p className={`mt-4  ${isMediaMax1025px ? 'text-center' : ''}`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                {isMediaMax1025px && (
                  <div
                    className={`mt-4  ${
                      isMediaMax1025px ? 'flex justify-center' : ''
                    } `}
                  >
                    <PrimaryButton title={'Visit Dapp'} linkTo={'/'} />
                  </div>
                )}
              </div>
              <div
                className={`${
                  isMediaMax1025px ? 'w-full' : 'w-[50%]'
                } border border-red flex items-center justify-center relative`}
              >
                <div className="relative">
                  <img src={whyConnectWindow.src} alt="fileverse-window" />
                  <img
                    className="absolute top-[100px] w-[4rem] right-4 border border-black"
                    src={walletList.src}
                    alt="wallet-image"
                  />
                </div>
              </div>
            </div>
          </>
        </HeadSectionLayout>
        {/* Subdomain */}
        <SectionLayout>
          <div
            className={` ${isMediaMax1025px ? '' : 'flex'} border border-black`}
          >
            <ImageLayout>
              <img
                className="h-full"
                src={subdomainWindow.src}
                alt="subdomain-window"
              />
            </ImageLayout>
            <ContentLayout>
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
            </ContentLayout>
          </div>
        </SectionLayout>
        {/* Chat */}
        <SectionLayout>
          <div
            className={` ${isMediaMax1025px ? '' : 'flex'} border border-black`}
          >
            {isMediaMax1025px && (
              <ImageLayout>
                <img
                  className="h-full"
                  src={chatWindow.src}
                  alt="fileverse-wallet-vase"
                />
              </ImageLayout>
            )}
            <ContentLayout>
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
            </ContentLayout>
            {!isMediaMax1025px && (
              <div
                className={`${
                  isMediaMax1025px ? 'h-[25rem]' : 'w-[50%] mr-8'
                } flex items-center border border-black justify-center`}
              >
                <img
                  className="h-full"
                  src={chatWindow.src}
                  alt="fileverse-wallet-vase"
                />
              </div>
            )}
          </div>
        </SectionLayout>

        <div className="bg-yellow">
          {/* File Types  */}
          <SectionLayout>
            <div
              className={` ${
                isMediaMax1025px ? '' : 'flex'
              } border border-black`}
            >
              <ImageLayout>
                <img
                  className="h-full"
                  src={fileTypes.src}
                  alt="fileverse-wallet-vase"
                />
              </ImageLayout>
              <ContentLayout>
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
              </ContentLayout>
            </div>
          </SectionLayout>
          {/* Access Token */}
          <SectionLayout>
            <div
              className={` ${
                isMediaMax1025px ? '' : 'flex'
              } border border-black`}
            >
              {isMediaMax1025px && (
                <ImageLayout>
                  <img
                    className="h-full"
                    src={AccessToken.src}
                    alt="fileverse-wallet-vase"
                  />
                </ImageLayout>
              )}
              <ContentLayout>
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
              </ContentLayout>
              {!isMediaMax1025px && (
                <ImageLayout>
                  <img
                    className="h-full"
                    src={AccessToken.src}
                    alt="fileverse-wallet-vase"
                  />
                </ImageLayout>
              )}
            </div>
          </SectionLayout>
        </div>
        {/* Profile */}
        <SectionLayout>
          <div
            className={` ${isMediaMax1025px ? '' : 'flex'} border border-black`}
          >
            <ImageLayout>
              <img
                className="h-full"
                src={profileWindow.src}
                alt="fileverse-wallet-vase"
              />
            </ImageLayout>
            <ContentLayout>
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
            </ContentLayout>
          </div>
        </SectionLayout>
        {/* More Feature */}
        <div className="mb-12">
          <div className="p-4 border border-black flex justify-center">
            <h2 className="font-bold p-4 text-center text-3xl">
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
