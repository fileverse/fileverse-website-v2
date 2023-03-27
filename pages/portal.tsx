import React, { useState } from 'react';

import { Tooltip, useMediaQuery } from '@mui/material';
import { NextSeo } from 'next-seo';
import Typewriter from 'typewriter-effect';

import BodyWrapper from '../components/BodyWrapper';
import FeaturesSection from '../components/FeaturesSection';
import HeadSectionLayout from '../components/HeadSectionLayout';
import PrimaryButton from '../components/PrimaryButton';
import dropDownArrow from '../public/assets/dropDownArrow.svg';
import nextArrow from '../public/assets/nextArrow.svg';
import portalHero from '../public/assets/portalHero.png';
import step1 from '../public/assets/step1.png';
import step2 from '../public/assets/step2.png';
import xicon from '../public/assets/x-icon.svg';

const Subdomain = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  const isMediaMax1260px = useMediaQuery('(max-width: 1262px)');
  const isMediaMax700px = useMediaQuery('(max-width: 700px)');
  const [openedTab, setOpenedTab] = useState<string[]>([]);
  const [notification, setNotification] = useState(true);
  const isMediaMax1280px = useMediaQuery('(max-width: 1280px)');
  const isMediaMax1120px = useMediaQuery('(max-width: 1120px)');
  const isMediaMax570px = useMediaQuery('(max-width: 570px)');
  const getBannerFontSize = () => {
    if (isMediaMax570px) {
      return 'text-[8px]';
    }
    if (isMediaMax700px) {
      return 'text-[10px]';
    }
    if (isMediaMax1280px) {
      return 'text-[12px]';
    }
    return 'text-[14px]';
  };
  // const FAQs = [
  //   {
  //     name: 'Who was Fileverse Portal built for?',
  //     description: `On-chain individuals and communities deserve on-chain tools that share the same values.

  //     Fileverse is for you, dear anon, who wants a useful, everyday web3 tool, that offers a stress-free crypto experience, for file sharing, collaboration, communication, and much more!

  //     This first version of Portal is for anyone that wants a privacy-first and no central point of failure alternative to centralised collaboration apps like Google Drive/Workspace, Notion, and Microsoft Office.

  //     It allows you to create your own ideal collaboration tool and workspace. You will be able to pick and choose different collaboration or productivity plugins to tailor your portal to your needs.
  //     `,
  //   },
  //   {
  //     name: 'What is a collaboration & file management smart contract?',
  //     description: `Each Fileverse Portal is a self-deployed file management and collaboration smart contract. When you create a Portal you also deploy your one smart contract. This smart contract is yours and only yours since you own the address used to deploy it. You control what is added to your Portal.`,
  //   },
  //   {
  //     name: 'Where is my data stored?',
  //     description: `By default, all the data you add on your Fileverse Portal is stored on a peer-to-peer network and file system called IPFS.

  //     You will soon also be able to just keep files on your local machine, or upload them to Arweave and Swarm.`,
  //   },
  //   {
  //     name: 'What is kept on-chain?',
  //     description: `Whenever you upload a file, you sign a transaction to update your Portal smart contract with a content hash of your file. You can make that hash either publicly accessible or completely private and encrypted.`,
  //   },
  //   {
  //     name: 'How does Portal encrypt my data?',
  //     description: `When uploading a file you can decide to make it Public (not encrypted) or Private (end-to-end encrypted). By design, you are the only one with the keys to the encryption and decryption of your files.

  //     In just two clicks you can decide who you want to give file access to: your collaborators, your NFT community, your followers, anyone with the link to the file, etc. It’s that easy.`,
  //   },
  //   {
  //     name: 'Is Fileverse open source?',
  //     description: `Yes, Fileverse started as an open source project on Gitcoin and received support from over 14,000 contributors! We built this in the open, with your feedback and your needs in mind.`,
  //   },
  //   {
  //     name: 'Has Fileverse Portal been audited?',
  //     description: `Since Fileverse Portal is a file management and collaboration smart contract, we have decided to receive an audit by an independent team. This takes some time and will be publicly shared once the audit has been completed. More details here.`,
  //   },
  // ];

  return (
    <BodyWrapper portalPage={true}>
      <>
        <NextSeo
          title="Fileverse Portal"
          openGraph={{
            url: 'https://fileverse.io/portal',
            title: 'Fileverse Portal',
            site_name: 'Fileverse',
            images: [
              {
                url: 'https://fileverse.io/assets/previewImage.jpg',
                width: 800,
                height: 420,
                alt: 'Fileverse',
              },
            ],
          }}
          twitter={{
            handle: '@fileverse',
            site: '@fileverse',
            cardType: 'summary_large_image',
          }}
        />
        <HeadSectionLayout defaultBackground={true} noFooter={true}>
          <div className="flex flex-col w-full h-full justify-center items-center p-4">
            {notification && (
              <div
                className={` bg-black p-3 flex w-fit rounded-full mt-4 ${getBannerFontSize()}`}
              >
                <p className="text-white text-center mr-4">
                  Portal soft launch was a resounding{' '}
                  <a
                    href="https://twitter.com/fileverse/status/1636751755936428033?s=20"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    success!
                  </a>{' '}
                  This also brought an unexpected overload on our Beta.
                  {isMediaMax1120px && !isMediaMax570px ? <br /> : null} To
                  focus on quality, we will transition to an invite-first &
                  whitelist mode. Stay tuned &lt;3
                </p>
                <img
                  onClick={() => setNotification(false)}
                  style={{
                    filter: `invert(100%) sepia(16%) saturate(7463%) hue-rotate(222deg) brightness(119%) contrast(115%)`,
                  }}
                  src={xicon.src}
                  className="cursor-pointer"
                  alt="close"
                />
              </div>
            )}
            <div
              className={`lg:w-[90%] ${
                isMediaMax1025px && 'w-full'
              } flex flex-wrap h-full items-center`}
            >
              <div
                className={`w-full mt-14 h-[40%]  flex flex-col justify-center items-center`}
              >
                {isMediaMax1260px ? (
                  <div
                    className={`font-bold  ${
                      isMediaMax1260px
                        ? 'text-2xl text-center'
                        : 'text-[3.5rem]'
                    } `}
                  >
                    <h6 className="">Your On-chain Portal for</h6>
                    <div className="">
                      <Typewriter
                        options={{
                          strings: [
                            'File Sharing',
                            'Collaboration',
                            'Content Creation',
                            '3D Visulaization',
                            'Brainstorming',
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className={`font-bold w-full justify-center flex ${
                      isMediaMax1025px ? 'text-2xl text-center' : 'text-[3rem]'
                    } `}
                  >
                    <h6 className=" text-end w-[60%]">
                      Your On-chain Portal for
                    </h6>
                    <span className="w-[40%] pl-3">
                      <Typewriter
                        options={{
                          strings: [
                            'File Sharing',
                            'Collaboration',
                            'Content Creation',
                            '3D Visulaization',
                            'Brainstorming',
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>
                )}

                <p
                  className={`mt-4 font-medium  text-center ${
                    isMediaMax1260px
                      ? ' w-full max-w-[600px] text-base'
                      : 'w-[52rem] text-[1.25rem]'
                  }`}
                >
                  Your personal collaboration tool and workspace for on-chain
                  file management and content creation, all without cutting
                  corners on privacy and decentralisation.
                </p>
                <Tooltip
                  title={
                    <p>
                      Stay tuned{' '}
                      <a
                        href="https://twitter.com/fileverse"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        here
                      </a>{' '}
                      &lt;3 Portal has now transitioned to invite-first &
                      allowlists!
                    </p>
                  }
                  placement="right"
                >
                  <div
                    className={`mt-8  ${
                      isMediaMax1025px && 'flex justify-center'
                    } `}
                  >
                    <PrimaryButton
                      title={'Create My Portal'}
                      linkTo={'https://portal.fileverse.io/#/create'}
                      isDisable={true}
                    />
                  </div>
                </Tooltip>

                <div
                  className={`flex ${
                    isMediaMax1025px ? 'text-xs justify-center' : 'text-lg'
                  } my-8`}
                >
                  <div className=" font-normal  text-[#00000099]">
                    Customizable
                  </div>
                  <div className="mx-3  text-[#00000099]">-</div>
                  <div className="font-normal text-[#00000099] ">
                    Privacy preserving
                  </div>
                  <div className="font-normal text-[#00000099] mx-3">-</div>
                  <div className="font-normal  text-[#00000099]">
                    Permissionless
                  </div>
                </div>
              </div>
              <div
                className={`w-full mt-10 h-full flex items-center justify-center relative`}
              >
                <img
                  src={portalHero.src}
                  alt="fileverse-window"
                  className="w-[63rem]"
                />
              </div>
            </div>
          </div>
        </HeadSectionLayout>
        <div className="mt-8 w-[100vw] flex justify-center">
          <div className="flex w-[90vw] justify-center">
            <div className="flex flex-col">
              <h2
                className={`font-bold text-center  ${
                  isMediaMax1025px ? 'text-2xl' : 'text-3xl'
                }`}
              >
                Steps
              </h2>
              <div className="flex flex-wrap justify-center mt-4">
                <div
                  className={`${
                    isMediaMax1025px ? 'w-52 h-60' : 'w-[25rem] h-[16rem]'
                  } m-2 bg-[#F3F3F3] rounded-xl p-4 flex flex-col justify-center items-center`}
                >
                  <img src={step1.src} className="w-[9rem]" alt="steps" />
                  <h2 className="text-lg mt-4 text-center">
                    Pick your favourite chain
                  </h2>
                </div>
                {!isMediaMax700px && (
                  <div className="flex items-center">
                    <img
                      alt="arrow"
                      src={nextArrow.src}
                      className={`${isMediaMax1025px && 'w-6'}`}
                    />
                  </div>
                )}

                <div
                  className={`border ${
                    isMediaMax1025px ? 'w-52 h-60' : 'w-[25rem] h-[16rem]'
                  } m-2 bg-[#F3F3F3] rounded-xl p-4 flex flex-col justify-center items-center `}
                >
                  <img src={step2.src} className="w-[9rem]" alt="steps" />
                  <h2 className="text-lg text-center mt-4">
                    Deploy your Portal smart contract
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col justify-center items-center my-8 p-8 bg-white">
          <h2
            className={`font-bold text-center ${
              isMediaMax1025px ? 'text-2xl' : 'text-3xl'
            } `}
          >
            Frequently Asked Questions
          </h2>
          <div className={`${isMediaMax1025px ? 'w-full' : 'w-[70%]'} mt-4`}>
            <div>
              <div
                onClick={() => {
                  if (openedTab.includes('What is a Portal?')) {
                    setOpenedTab((prev) => {
                      return prev.filter((i) => i !== 'What is a Portal?');
                    });
                  } else {
                    setOpenedTab((prev) => {
                      return [...prev, 'What is a Portal?'];
                    });
                  }
                }}
                className={`border-t flex items-center  border-black p-2 ${
                  openedTab.includes('What is a Portal?') &&
                  'bg-black text-white'
                }  `}
              >
                <h2 className="w-full">{'What is a Portal?'}</h2>
                <img
                  alt="arrow"
                  src={dropDownArrow.src}
                  className={` ${
                    openedTab.includes('What is a Portal?') &&
                    'rotate-180 changeWhite'
                  }`}
                />
              </div>

              {openedTab.includes('What is a Portal?') && (
                <div className="p-4">
                  <p>
                    <span className="font-semibold">Non-technical answer:</span>
                    <span className="ml-2">
                      Fileverse Portal is a web3 alternative to Google
                      Workspace, Notion, or any centralised collaboration
                      platform. It is customizable, private by design, and
                      focuses on the healthier side of the internet where users
                      are not the product.
                    </span>
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold">Technical answer:</span>
                    <span className="ml-2">
                      Each Portal is a self-deployed file management and
                      collaboration smart contract. It’s yours and no one
                      else’s. It acts as your content hash directory and allows
                      you to set access permissions for your files, folders and
                      Portal.
                    </span>
                  </p>
                  <p className="mt-2">
                    <span className="">
                      The interface/UI is also hosted IPFS, making the whole
                      collaboration dApp available to you without requiring our
                      servers.
                    </span>
                  </p>
                </div>
              )}
            </div>
            <div>
              <div
                onClick={() => {
                  if (
                    openedTab.includes('What can I do with a Fileverse Portal?')
                  ) {
                    setOpenedTab((prev) => {
                      return prev.filter(
                        (i) => i !== 'What can I do with a Fileverse Portal?'
                      );
                    });
                  } else {
                    setOpenedTab((prev) => {
                      return [
                        ...prev,
                        'What can I do with a Fileverse Portal?',
                      ];
                    });
                  }
                }}
                className={`border-t flex items-center  border-black p-2 ${
                  openedTab.includes(
                    'What can I do with a Fileverse Portal?'
                  ) && 'bg-black text-white'
                }  `}
              >
                <h2 className="w-full">
                  {'What can I do with a Fileverse Portal?'}
                </h2>
                <img
                  alt="arrow"
                  src={dropDownArrow.src}
                  className={` ${
                    openedTab.includes(
                      'What can I do with a Fileverse Portal?'
                    ) && 'rotate-180 changeWhite'
                  }`}
                />
              </div>
              {openedTab.includes('What can I do with a Fileverse Portal?') && (
                <div className="p-4">
                  <p>From your Portal, you can:</p>
                  <ul className="ml-6">
                    <li>
                      <span className="font-semibold">Store</span>, manage, and
                      share any multimedia file: images, 3D files, music, video,
                      Zip files, PDF, GIFs, etc.
                    </li>
                    <li>
                      <span className="font-semibold">Collaborate</span> with
                      anyone via: live documents, whiteboards, and more.
                    </li>
                    <li>
                      <span className="font-semibold">Chat</span> privately with
                      everyone with Chat Spaces.
                    </li>
                    <li>
                      <span className="font-semibold">Share</span> the Public
                      side of your Portal, for anyone to visit and see what
                      public content you have created or uploaded.
                    </li>
                    <li>
                      <span className="font-semibold">Create</span> as many
                      Portals as you want, for different needs, different
                      communities, different teams, different types of content.
                    </li>
                    <li>
                      <span className="font-semibold">See</span> on-chain
                      analytics of people that became “members” of your Portal.
                      Members receive a custom NFT of your Portal when they
                      decide to join. We call these Portal Tokens and are unique
                      to each Portal.
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <div
                onClick={() => {
                  if (
                    openedTab.includes(
                      'For whom was Fileverse Portal built for?'
                    )
                  ) {
                    setOpenedTab((prev) => {
                      return prev.filter(
                        (i) => i !== 'For whom was Fileverse Portal built for?'
                      );
                    });
                  } else {
                    setOpenedTab((prev) => {
                      return [
                        ...prev,
                        'For whom was Fileverse Portal built for?',
                      ];
                    });
                  }
                }}
                className={`border-t flex items-center  border-black p-2 ${
                  openedTab.includes(
                    'For whom was Fileverse Portal built for?'
                  ) && 'bg-black text-white'
                }  `}
              >
                <h2 className="w-full">
                  {'For whom was Fileverse Portal built for?'}
                </h2>
                <img
                  alt="arrow"
                  src={dropDownArrow.src}
                  className={` ${
                    openedTab.includes(
                      'For whom was Fileverse Portal built for?'
                    ) && 'rotate-180 changeWhite'
                  }`}
                />
              </div>
              {openedTab.includes(
                'For whom was Fileverse Portal built for?'
              ) && (
                <div className="p-4 flex flex-col gap-1">
                  <p>
                    On-chain individuals and communities deserve on-chain tools
                    that share the same values.
                  </p>
                  <p>
                    Fileverse is for you, dear anon, who wants a useful,
                    everyday web3 tool, that offers a stress-free crypto
                    experience, for file sharing, collaboration, communication,
                    and much more!
                  </p>
                  <p>
                    This first version of Portal is for anyone that wants a
                    privacy-first and no central point of failure alternative to
                    centralised collaboration apps like Google Drive/Workspace,
                    Notion, and Microsoft Office.
                  </p>
                  <p>
                    It allows you to create your own ideal collaboration tool
                    and workspace. You will be able to pick and choose different
                    collaboration or productivity plugins to tailor your portal
                    to your needs.
                  </p>
                </div>
              )}
            </div>
            <div>
              <div
                onClick={() => {
                  if (openedTab.includes('Where is my data stored?')) {
                    setOpenedTab((prev) => {
                      return prev.filter(
                        (i) => i !== 'Where is my data stored?'
                      );
                    });
                  } else {
                    setOpenedTab((prev) => {
                      return [...prev, 'Where is my data stored?'];
                    });
                  }
                }}
                className={`border-t flex items-center  border-black p-2 ${
                  openedTab.includes('Where is my data stored?') &&
                  'bg-black text-white'
                }  `}
              >
                <h2 className="w-full">{'Where is my data stored?'}</h2>
                <img
                  alt="arrow"
                  src={dropDownArrow.src}
                  className={` ${
                    openedTab.includes('Where is my data stored?') &&
                    'rotate-180 changeWhite'
                  }`}
                />
              </div>
              {openedTab.includes('Where is my data stored?') && (
                <div className="p-4 flex flex-col gap-1">
                  <p>
                    By default, all the data you add on your Fileverse Portal is
                    stored on a peer-to-peer network and file system called{' '}
                    <a
                      href="https://ipfs.tech/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      IPFS
                    </a>
                    . We are also using one of the most powerful and
                    privacy-enhancing decentralised database:{' '}
                    <a
                      href="https://gun.eco/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      https://gun.eco/
                    </a>
                  </p>
                </div>
              )}
            </div>
            <div>
              <div
                onClick={() => {
                  if (openedTab.includes('What is kept on-chain?')) {
                    setOpenedTab((prev) => {
                      return prev.filter((i) => i !== 'What is kept on-chain?');
                    });
                  } else {
                    setOpenedTab((prev) => {
                      return [...prev, 'What is kept on-chain?'];
                    });
                  }
                }}
                className={`border-t flex items-center  border-black p-2 ${
                  openedTab.includes('What is kept on-chain?') &&
                  'bg-black text-white'
                }  `}
              >
                <h2 className="w-full">{'What is kept on-chain?'}</h2>
                <img
                  alt="arrow"
                  src={dropDownArrow.src}
                  className={` ${
                    openedTab.includes('What is kept on-chain?') &&
                    'rotate-180 changeWhite'
                  }`}
                />
              </div>
              {openedTab.includes('What is kept on-chain?') && (
                <div className="p-4 flex flex-col gap-1">
                  <p>
                    Whenever you upload a file, you sign a transaction to update
                    your Portal smart contract with a content hash of your file.
                    You can make that hash either publicly accessible or
                    completely private and encrypted. The more you interact with
                    your Portal, the more your smart contract grows. Your
                    on-chain Portal is key for removing the dependence on any
                    centralised server and to make your on-chain life easier
                    with token-gating, etc.
                  </p>
                </div>
              )}
            </div>
            <div>
              <div
                onClick={() => {
                  if (openedTab.includes('How does Portal encrypt my data?')) {
                    setOpenedTab((prev) => {
                      return prev.filter(
                        (i) => i !== 'How does Portal encrypt my data?'
                      );
                    });
                  } else {
                    setOpenedTab((prev) => {
                      return [...prev, 'How does Portal encrypt my data?'];
                    });
                  }
                }}
                className={`border-t flex items-center  border-black p-2 ${
                  openedTab.includes('How does Portal encrypt my data?') &&
                  'bg-black text-white'
                }  `}
              >
                <h2 className="w-full">{'How does Portal encrypt my data?'}</h2>
                <img
                  alt="arrow"
                  src={dropDownArrow.src}
                  className={` ${
                    openedTab.includes('How does Portal encrypt my data?') &&
                    'rotate-180 changeWhite'
                  }`}
                />
              </div>
              {openedTab.includes('How does Portal encrypt my data?') && (
                <div className="p-4 flex flex-col gap-1">
                  <p>
                    When uploading a file you can decide to make it Public (not
                    encrypted) or Private (end-to-end encrypted). By design, you
                    are the only one with the keys to the encryption and
                    decryption of your files.
                  </p>
                  <p>
                    In just two clicks you can decide who you want to give file
                    access to: your collaborators, your NFT community, your
                    members, anyone with the link to the file, etc. It’s that
                    easy.
                  </p>
                </div>
              )}
            </div>
            <div>
              <div
                onClick={() => {
                  if (openedTab.includes('Is Fileverse open source?')) {
                    setOpenedTab((prev) => {
                      return prev.filter(
                        (i) => i !== 'Is Fileverse open source?'
                      );
                    });
                  } else {
                    setOpenedTab((prev) => {
                      return [...prev, 'Is Fileverse open source?'];
                    });
                  }
                }}
                className={`border-t flex items-center  border-black p-2 ${
                  openedTab.includes('Is Fileverse open source?') &&
                  'bg-black text-white'
                }  `}
              >
                <h2 className="w-full">{'Is Fileverse open source?'}</h2>
                <img
                  alt="arrow"
                  src={dropDownArrow.src}
                  className={` ${
                    openedTab.includes('Is Fileverse open source?') &&
                    'rotate-180 changeWhite'
                  }`}
                />
              </div>
              {openedTab.includes('Is Fileverse open source?') && (
                <div className="p-4 flex flex-col gap-1">
                  <p>
                    Yes, Fileverse started as an open source project on Gitcoin
                    and received support from over 14,000 contributors! We built
                    this in the open, with your feedback and your needs in mind.
                    Here is our initial tool,{' '}
                    <a
                      href="https://beta.fileverse.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Fileverse Solo
                    </a>{' '}
                    , and another key{' '}
                    <a
                      href="https://beta.fileverse.io/ipfs"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      tool
                    </a>{' '}
                    we’ve built with our community.
                  </p>
                  <p>
                    In just two clicks you can decide who you want to give file
                    access to: your collaborators, your NFT community, your
                    members, anyone with the link to the file, etc. It’s that
                    easy.
                  </p>
                </div>
              )}
            </div>
            <div>
              <div
                onClick={() => {
                  if (
                    openedTab.includes('Has Fileverse Portal been audited?')
                  ) {
                    setOpenedTab((prev) => {
                      return prev.filter(
                        (i) => i !== 'Has Fileverse Portal been audited?'
                      );
                    });
                  } else {
                    setOpenedTab((prev) => {
                      return [...prev, 'Has Fileverse Portal been audited?'];
                    });
                  }
                }}
                className={`border-t flex items-center  border-black p-2 ${
                  openedTab.includes('Has Fileverse Portal been audited?') &&
                  'bg-black text-white'
                }  `}
              >
                <h2 className="w-full">
                  {'Has Fileverse Portal been audited?'}
                </h2>
                <img
                  alt="arrow"
                  src={dropDownArrow.src}
                  className={` ${
                    openedTab.includes('Has Fileverse Portal been audited?') &&
                    'rotate-180 changeWhite'
                  }`}
                />
              </div>
              {openedTab.includes('Has Fileverse Portal been audited?') && (
                <div className="p-4 flex flex-col gap-1">
                  <p>
                    Since Fileverse Portal is a file management & collaboration
                    smart contract, we have decided to receive an audit by an
                    independent super cool team:{' '}
                    <a
                      href="https://nethermind.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Nethermind
                    </a>{' '}
                    . The audit has been successfully completed, we’ll share
                    more here and on our{' '}
                    <a
                      href="https://twitter.com/fileverse"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      Twitter
                    </a>{' '}
                    !
                  </p>
                </div>
              )}
            </div>
            {/* {FAQs.map((question, index) => (
              <div key={index}>
                <div
                  onClick={() => {
                    if (openedTab.includes(question.name)) {
                      setOpenedTab((prev) => {
                        return prev.filter((i) => i !== question.name);
                      });
                    } else {
                      setOpenedTab((prev) => {
                        return [...prev, question.name];
                      });
                    }
                  }}
                  className={`border-t flex items-center  border-black p-2 ${
                    openedTab.includes(question.name) && 'bg-black text-white'
                  }  `}
                >
                  <h2 className="w-full">{question.name}</h2>
                  <img
                    alt="arrow"
                    src={dropDownArrow.src}
                    className={` ${
                      openedTab.includes(question.name) &&
                      'rotate-180 changeWhite'
                    }`}
                  />
                </div>
                {openedTab.includes(question.name) && (
                  <p className="p-4">{question.description}</p>
                )}
              </div>
            ))} */}
          </div>
        </div>
        <FeaturesSection />
      </>
    </BodyWrapper>
  );
};

export default Subdomain;
