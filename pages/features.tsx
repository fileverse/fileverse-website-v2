import React from 'react';

import { useMediaQuery } from '@mui/material';

import BodyWrapper from '../components/BodyWrapper';
import ContentLayout from '../components/ContentLayout';
import FeaturesSection from '../components/FeaturesSection';
import HeadSectionLayout from '../components/HeadSectionLayout';
import ImageLayout from '../components/ImageLayout';
import ListWithIconCard from '../components/ListWithIconCard';
import PrimaryButton from '../components/PrimaryButton';
import SectionLayout from '../components/SectionLayout';
import AccessToken from '../public/assets/AccessToken.svg';
import chatWindow from '../public/assets/chatWindow.svg';
import fileTypes from '../public/assets/fileTypes.svg';
import whyConnectWindow from '../public/assets/MainImage.png';
import profileWindow from '../public/assets/profileWindow.svg';
import subdomainWindow from '../public/assets/subdomainWindow.svg';
import tick from '../public/assets/tick.svg';
import dropDownArrow from '../public/assets/whiteArrow.svg';

const Features = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <BodyWrapper>
      <>
        <HeadSectionLayout>
          <>
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
                    What you can expect
                  </h2>
                  <p className={`mt-4   ${isMediaMax1025px && 'text-center'}`}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries
                  </p>
                  {isMediaMax1025px && (
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
                  )}
                </div>
                <div
                  className={`lg:w-[50%] ${
                    isMediaMax1025px && 'w-full'
                  } flex items-center justify-center relative`}
                >
                  <div className="relative">
                    <img src={whyConnectWindow.src} alt="fileverse-window" />
                  </div>
                </div>
              </div>
            </div>
          </>
        </HeadSectionLayout>
        {/* Subdomain */}
        <SectionLayout>
          <div className={` lg:flex`}>
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
          <div className={`lg:flex`}>
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
                className={` lg:w-[50%] lg:mr-8 ${
                  isMediaMax1025px && 'h-[25rem]'
                } flex items-center justify-center`}
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
        <FeaturesSection />
        <div className="bg-yellow py-4">
          {/* File Types  */}
          <SectionLayout>
            <div className={` lg:flex`}>
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
            <div className={`lg:flex`}>
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
          <div className={`lg:flex`}>
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
        <div className="mt-8">
          <div className="flex justify-center items-center">
            <h2 className="font-bold p-4 text-center text-3xl">
              More features to come
            </h2>
          </div>
          <div className="bg-yellow p-8 flex justify-center">
            <PrimaryButton
              title="Go to Dapp"
              icon={dropDownArrow}
              iconStyles="ml-4"
              linkTo="https://beta.fileverse.io/"
            />
          </div>
        </div>
      </>
    </BodyWrapper>
  );
};

export default Features;
