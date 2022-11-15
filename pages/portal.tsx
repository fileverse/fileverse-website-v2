import React, { useState } from 'react';

import { useMediaQuery } from '@mui/material';

import BodyWrapper from '../components/BodyWrapper';
import HeadSectionLayout from '../components/HeadSectionLayout';
import PrimaryButton from '../components/PrimaryButton';
import blackWeb3 from '../public/assets/blackWeb3.svg';
import dropDownArrow from '../public/assets/dropDownArrow.svg';
import nextArrow from '../public/assets/nextArrow.svg';
import subdomainImage from '../public/assets/subdomainImage.svg';
import whiteWeb2 from '../public/assets/whiteWeb2.svg';

const Subdomain = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  const isMediaMax700px = useMediaQuery('(max-width: 700px)');
  const [openedTab, setOpenedTab] = useState<string[]>([]);
  const FAQs = [
    {
      name: 'For whom is Fileverse Portal?',
      description: `Fileverse is for anyone that wants a privacy-first and sustainable alternative to centralised apps like Google Drive/Workspace, WeTransfer, Dropbox, Microsoft Office. Fileverse is for anyone that does not want to be the product. 
        Finally, Fileverse is for you dear anon that wants a useful web3 tool, and a stress-free crypto experience, for file sharing, collaboration, communication, and much more!`,
    },
    {
      name: 'What is a collaboration & file management smart contract?',
      description: `Each Fileverse Portal is a self-deployed file management and collaboration smart contract. When you create a Portal you also deploy your one smart contract. This smart contract is yours and only yours since you own the address used to deploy it. You control what is added to your Portal.`,
    },
    {
      name: 'Where is my data stored?',
      description: `All the data you add on your Fileverse Portal is stored on a peer-to-peer network and file system called IPFS. Other networks being added: Arweave, Swarm.`,
    },
    {
      name: 'What is kept on-chain?',
      description: `Whenever you upload a file, you also update the status of your Portal. This is saved on your smart contract.`,
    },
    {
      name: 'How does Portal encrypt my data?',
      description: `All files are encrypted by default. You also have the option to use End-to-End encryption when sharing files or information with your members! Simply choose the relevant option when uploading a file. It’s that easy.`,
    },
    {
      name: 'Is Fileverse open source?',
      description: `Yes, Fileverse started as an open source project on Gitcoin and received support from more than 13,000 contributors.`,
    },
    {
      name: 'Has Fileverse Portal been audited?',
      description: `Since Fileverse Portal is a file management and collaboration smart contract, we have decided to be audited by an independent team. This takes some time and will be publicly shared once the audit has been completed. More details here.
      `,
    },
  ];

  return (
    <BodyWrapper>
      <>
        <HeadSectionLayout>
          <div className="flex min-h-[85vh] justify-center p-4">
            <div
              className={`lg:w-[90%] ${
                isMediaMax1025px && 'w-full'
              } flex flex-wrap items-center`}
            >
              <div className={`lg:w-[50%] ${isMediaMax1025px && 'w-full'}`}>
                <h2
                  className={`font-bold border border-black flex flex-wrap  lg:text-5xl ${
                    isMediaMax1025px && 'text-3xl justify-center'
                  } `}
                >
                  Your On-chain Portal for
                  <div className="border border-black" id="flip">
                    <div>File sharing</div>
                    <div>Collaboration</div>
                    <div>Coordination</div>
                  </div>
                </h2>
                <div
                  className={`flex ${
                    isMediaMax1025px && ' justify-center'
                  } my-4`}
                >
                  <h6 className="font-semibold">On-Chain</h6>
                  <h6 className="mx-3">-</h6>
                  <h6 className="font-semibold">Private</h6>
                  <h6 className="mx-3">-</h6>
                  <h6 className="font-semibold">E2EE</h6>
                </div>
                <p className={`mt-8   ${isMediaMax1025px && 'text-center'}`}>
                  Fileverse is building the first privacy-enhancing, on-chain
                  alternative to Google Workspace. Owners of Portals control all
                  their data, from how it’s stored to how it’s accessed, and
                  shared. This is your censorship resistant collaboration DApp!
                </p>
                <div
                  className={`mt-4  ${
                    isMediaMax1025px && 'flex justify-center'
                  } `}
                >
                  <PrimaryButton
                    title={'Launch Your Portal'}
                    linkTo={'https://beta.fileverse.io/'}
                  />
                </div>
              </div>
              <div
                className={`lg:w-[50%] ${
                  isMediaMax1025px && 'w-full'
                } flex items-center justify-center relative`}
              >
                <div className="relative">
                  <img src={subdomainImage.src} alt="fileverse-window" />
                </div>
              </div>
            </div>
          </div>
        </HeadSectionLayout>
        <div className="mt-8 w-[100vw] flex justify-center">
          <div className="flex w-[90vw] justify-center">
            <div className="flex flex-col">
              <h2 className="font-bold text-center text-3xl">Steps</h2>
              <div className="flex flex-wrap justify-center mt-4">
                <div
                  className={`${
                    isMediaMax1025px ? 'w-52 h-56' : 'w-60 h-64'
                  } m-2 bg-[#F3F3F3] rounded-xl p-4 flex flex-col justify-center items-center`}
                >
                  <h2 className="text-lg">Pick your favourite chain</h2>
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
                    isMediaMax1025px ? 'w-52 h-56' : 'w-60 h-64'
                  } m-2 bg-[#F3F3F3] rounded-xl p-4 flex flex-col justify-center items-center `}
                >
                  <h2 className="text-lg text-center">
                    Secure your encryption keys
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
                  className={`${
                    isMediaMax1025px ? 'w-52 h-56' : 'w-60 h-64'
                  } m-2 bg-[#F3F3F3] rounded-xl p-4 flex flex-col justify-center items-center`}
                >
                  <h2 className="text-lg text-center">
                    Deploy your Portal smart contract.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col justify-center items-center my-8 p-8 bg-[#FFFCE7]">
          <h2 className="font-bold text-center text-3xl">FAQs</h2>
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
                      Fileverse Portal is a web3 alternative to Google Drive &
                      Workspace. It has privacy by design and focuses on the
                      healthier side of the internet where users are not the
                      product.
                    </span>
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold">Technical answer:</span>
                    <span className="ml-2">
                      Each Fileverse Portal is a self-deployed file management
                      and collaboration smart contract. You own the keys to this
                      smart contract, it’s your smart contract!
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
                      share, any multimedia file: images, 3D files, music,
                      video, Zip files etc.
                    </li>
                    <li>
                      <span className="font-semibold">Collaborate</span> with
                      anyone via: shared documents, whiteboards, and more.
                    </li>
                    <li>
                      <span className="font-semibold">Chat</span> privately with
                      everyone with chat spaces.
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {FAQs.map((question, index) => (
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
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center relative">
            <div className="pt-12 relative">
              <div className="m-4 pt-40 w-72 bg-black h-96 rounded-lg">
                <div className="top-4 absolute">
                  <img alt="web2 style" src={whiteWeb2.src} className="" />
                </div>
                <div className="absolute top-20 left-[70px]">
                  <p className="text-2xl font-semibold">Web 2 </p>
                  <p className="text-2xl font-semibold">Style</p>
                </div>

                <div className="row-span-2">
                  <p className="text-white py-2 px-4 text-lg">
                    Fake-free (sells your data)
                  </p>
                  <p className="text-white py-2 px-4 text-lg">Simple</p>
                  <p className="text-white py-2 px-4 text-lg">Unencrypted</p>
                  <p className="text-white py-2 px-4 text-lg">Intrusive</p>
                  <p className="text-white py-2 px-4 text-lg">Censorable</p>
                  <p className="text-white py-2 px-4 text-lg">Locks you in</p>
                </div>
              </div>
            </div>
            <div className="pt-12 relative">
              <div className="m-4 pt-40 w-72 bg-yellow h-96 rounded-lg">
                <div className=" top-4 absolute">
                  <img alt="fileverse style" src={blackWeb3.src} className="" />
                </div>
                <div className="absolute top-24 left-14">
                  <p className="text-2xl text-white font-semibold">
                    Fileverse{' '}
                  </p>
                </div>
                <div className="">
                  <p className="py-1 px-4 text-lg">Free version</p>
                  <p className="py-1 px-4 text-lg">Simple</p>
                  <p className="py-1 px-4 text-lg">E2E encrypted</p>
                  <p className="py-1 px-4 text-lg">Private by default</p>
                  <p className="py-1 px-4 text-lg">Uncensorable</p>
                  <p className="py-1 px-4 text-lg">Take your data anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </BodyWrapper>
  );
};

export default Subdomain;
