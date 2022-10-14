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
      name: 'What is Lorem ipsum ?',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
    {
      name: 'Why do we use it?',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
    {
      name: 'Where does it come from ?',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
    {
      name: 'Where can i get some ?',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
    {
      name: 'The Standard Lorem ipsum?',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
    {
      name: 'Where does it come from .. ?',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    },
    {
      name: 'Where does it come from. ?',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
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
                  className={`font-bold lg:text-5xl ${
                    isMediaMax1025px && 'text-3xl text-center'
                  } `}
                >
                  Google Drive but much better
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
                  <h6 className="font-semibold">For You</h6>
                </div>
                <p className={`mt-8   ${isMediaMax1025px && 'text-center'}`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries
                </p>
                <div
                  className={`mt-4  ${
                    isMediaMax1025px && 'flex justify-center'
                  } `}
                >
                  <PrimaryButton
                    title={'Launch'}
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
                  <h2 className="text-lg">Pick</h2>
                  <h2 className="text-lg">Your Chain</h2>
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
                  <h2 className="text-lg">Your Keys</h2>
                  <h2 className="text-lg">Your Data</h2>
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
                  <h2 className="text-lg">Push Your</h2>
                  <h2 className="text-lg">On-Chain Page</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col justify-center items-center my-8 p-8 bg-[#FFFCE7]">
          <h2 className="font-bold text-center text-3xl">FAQs</h2>
          <div className={`${isMediaMax1025px ? 'w-full' : 'w-[70%]'} mt-4`}>
            {FAQs.map((question, index) => (
              <>
                <div
                  key={index}
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
              </>
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
                  <p className="text-white py-2 px-4 text-lg">Free</p>
                  <p className="text-white py-2 px-4 text-lg">Convenient</p>
                  <p className="text-white py-2 px-4 text-lg">Non Private</p>
                  <p className="text-white py-2 px-4 text-lg">Intrusive</p>
                  <p className="text-white py-2 px-4 text-lg">...</p>
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
                  <p className="py-2 px-4 text-lg">Free</p>
                  <p className="py-2 px-4 text-lg">Convenient</p>
                  <p className="py-2 px-4 text-lg">Private</p>
                  <p className="py-2 px-4 text-lg">On-Chain</p>
                  <p className="py-2 px-4 text-lg">...</p>
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
