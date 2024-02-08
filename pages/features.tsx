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
import chatWindow from '../public/assets/chatWindow.png';
import featureHero from '../public/assets/feature-hero.png';
import fileTypes from '../public/assets/fileTypes.png';
import subdomainWindow from '../public/assets/subdomainWindow.png';
import tick from '../public/assets/tick.svg';
import tokenGating from '../public/assets/tokengating.png';

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
                    className={`font-bold lg:text-4xl ${
                      isMediaMax1025px && 'text-2xl text-center'
                    } `}
                  >
                    We are building a privacy-enhancing, on-chain alternative to
                    Google Workspace.
                  </h2>
                  <p
                    className={`mt-4    ${
                      isMediaMax1025px ? 'text-center w-full' : 'w-[80%]'
                    }`}
                  >
                    Fileverse is a simple on-ramp to leverage the full extent of
                    the Web3 tech stack and experience the social web as
                    sovereign individuals. That’s our northstar!
                  </p>
                  <div
                    className={`mt-4  ${
                      isMediaMax1025px && 'flex justify-center'
                    } `}
                  >
                    <PrimaryButton
                      title={'Discover More'}
                      linkTo={'#feature'}
                    />
                  </div>
                </div>
                <div
                  className={`lg:w-[50%] ${
                    isMediaMax1025px && 'w-full'
                  } flex items-center justify-center relative`}
                >
                  <div className="relative">
                    <img src={featureHero.src} alt="fileverse-window" />
                  </div>
                </div>
              </div>
            </div>
          </>
        </HeadSectionLayout>
        {/* portal */}
        <SectionLayout>
          <div id="feature" className={` lg:flex items-center pt-[7vh]`}>
            <ImageLayout>
              <img
                className={`${!isMediaMax1025px && 'w-[480px]'}`}
                src={subdomainWindow.src}
                alt="subdomain-window"
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
                    Fileverse Portal
                  </h2>
                </div>
                <div className="w-full">
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      ' Fileverse Portals are your doors to the on-chain world. Each Portal is a self-deployed file management smart contract, made for collaboration and full control over your data.'
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
                      ' End-to-end encryption: you own all the keys to your Portal, including your end-to-end encryption keys for file sharing with your members.'
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
        {/* custom token */}
        <SectionLayout>
          <div className={`lg:flex items-center`}>
            {isMediaMax1025px && (
              <ImageLayout>
                <img
                  className=""
                  src={tokenGating.src}
                  alt="fileverse-wallet-vase"
                />
              </ImageLayout>
            )}
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
                    Custom Access-Tokens
                  </h2>
                </div>
                <div className="w-full">
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'Create a custom access-token and send it to any EVM addresses. This gives the receivers access to your selected files, chat rooms, collaborative documents, etc.'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
                    paragraph={
                      'Let new followers or members or your Fileverse Portal mint a membership NFT (POAP) to get access to some exclusive content and experiences.'
                    }
                  />
                  <ListWithIconCard
                    icon={tick}
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
                  src={tokenGating.src}
                  alt="fileverse-wallet-vase"
                  className="w-[480px]"
                />
              </ImageLayout>
            )}
          </div>
        </SectionLayout>

        <FeaturesSection portalPage={false} />
        <div className="bg-yellow mt-8 py-8">
          {/* chat */}
          <SectionLayout marginTop="mt-0">
            <div className={`lg:flex  items-center`}>
              {isMediaMax1025px && (
                <ImageLayout>
                  <img src={chatWindow.src} alt="fileverse-wallet-vase" />
                </ImageLayout>
              )}
              <ContentLayout>
                <div className=" ">
                  <div className="flex w-full">
                    <h2
                      className={`font-bold  ${
                        isMediaMax1025px
                          ? 'text-2xl text-center w-full'
                          : 'text-3xl ml-12'
                      }`}
                    >
                      Chat Rooms & Spaces
                    </h2>
                  </div>
                  <div className="w-full">
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'Gather friends, collaborators or communities  in one place for encrypted discussions stored on p2p networks. No servers, no centralisation. Your safe chat space.'
                      }
                    />
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'Chat rooms: any file URL you share has its very own encrypted chat space. Anyone that has access to your file can directly chat in this room with you and other visitors.'
                      }
                    />
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'Chat spaces: coming soon on your Fileverse Portal. Your space to update and discuss with all your members that have access to your Fileverse Portal.'
                      }
                    />
                  </div>
                </div>
              </ContentLayout>
              {!isMediaMax1025px && (
                <ImageLayout>
                  <img
                    className="w-[480px]"
                    src={chatWindow.src}
                    alt="fileverse-wallet-vase"
                  />
                </ImageLayout>
              )}
            </div>
          </SectionLayout>
          {/* any file */}
          <SectionLayout>
            <div className={` lg:flex items-center`}>
              <ImageLayout>
                <img
                  src={fileTypes.src}
                  alt="fileverse-wallet-vase"
                  className={`${!isMediaMax1025px && 'w-[480px]'}`}
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
                      Fileverse For Any File
                    </h2>
                  </div>
                  <div className="w-full">
                    <ListWithIconCard
                      icon={tick}
                      whiteIconBackground={true}
                      paragraph={
                        'Upload and share any type of multimedia files. Your peers will be able to preview them on Fileverse or download them.'
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
                        'Fileverse Portal: want more security & privacy? Enable end-to-end encryption between you and your members of your Fileverse Portal.'
                      }
                    />
                  </div>
                </div>
              </ContentLayout>
            </div>
          </SectionLayout>
        </div>
      </>
    </BodyWrapper>
  );
};

export default Features;
