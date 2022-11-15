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
                    All about features & the tech behind Fileverse
                  </h2>
                  <p className={`mt-4   ${isMediaMax1025px && 'text-center'}`}>
                    Fileverse is a simple on-ramp to leverage the full extent of
                    the Web3 tech stack & experience the social web as sovereign
                    individuals. That’s our northstar!
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
                  <h2 className="font-bold ml-12 text-3xl">Fileverse Portal</h2>
                </div>
                <div className="w-full">
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'Fileverse Portals are your door to the on-chain world. Portals are actual smart contracts. Store any multimedia file you want; you pick who and how anons can access your files.'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'Access management: you have a variety of options to restrict or open access to your Fileverse Portal and its content. Public, private and/or token enabled, the choice is yours.'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'End-to-end encryption: you own all the keys to your Portal, including your end-to-end keys for when you share files with your private members!'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'Collaborate live on documents, open chat spaces, create whiteboard files, and more. It’s time to move away from centralised collaboration tools.'
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
                  <h2 className="font-bold ml-12 text-3xl">
                    Chat Rooms & Spaces
                  </h2>
                </div>
                <div className="w-full">
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'Gather your friends, collaborators or community in one place for encrypted discussions stored on p2p networks. No servers, no centralisation!'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'Chat rooms: any file URL you share has its very own encrypted chat space. Anyone that has access to your file can directly chat in this room with you and other visitors.'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'Chat spaces: coming soon on your Fileverse Portal.. Your space to update and discuss with all your members that have access to your Fileverse Portal.'
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
                    <h2 className="font-bold ml-12 text-3xl">
                      Fileverse For Any File
                    </h2>
                  </div>
                  <div className="w-full">
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'Upload and share any types of multimedia files. Your peers will be able to preview them on Fileverse or download them.'
                      }
                    />
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'Did you receive a PDF, a doc, a song, or a ZIP file via Fileverse? Click on the new download button to have access to the files without the URL.'
                      }
                    />
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'Fileverse Portal: want more security & privacy? Enable end-to-end encryption between you and your members of your Fileverse Portal!'
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
                    <h2 className="font-bold ml-12 text-3xl">
                      Custom access-tokens
                    </h2>
                  </div>
                  <div className="w-full">
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'Create a custom access-token and send it to any EVM addresses. This gives the receivers access to your selected files, chat rooms, collaborative documents, etc.'
                      }
                    />
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'Let new followers or members or your Fileverse Portal mint a membership NFT (POAP) to get access to some exclusive content and experiences.'
                      }
                    />
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'Create on-chain analytics about your Portal’s reach, your files, and community support. On-chain individuals and communities deserve on-chain tools!'
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
