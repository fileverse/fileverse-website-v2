import React from 'react';

import { useMediaQuery } from '@mui/material';

import BodyWrapper from '../components/BodyWrapper';
import HeadSectionLayout from '../components/HeadSectionLayout';
import PrimaryButton from '../components/PrimaryButton';
import code from '../public/assets/code.png';
import downArrow from '../public/assets/downArrowGray.svg';
import erospixie from '../public/assets/erospixel.png';
import heart50 from '../public/assets/heart50.png';
import heartbit from '../public/assets/heartbit.png';
import metric from '../public/assets/metric.png';

export default function HeartBit() {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');

  return (
    <BodyWrapper heartbitPage={true}>
      <div
        className={`flex flex-col w-[80%] h-full justify-center items-center mx-auto ${
          isMediaMax1025px ? '' : ''
        } `}
      >
        <HeadSectionLayout noFooter={true} defaultBackground={true}>
          <div
            id="hero"
            className={`w-full flex flex-col justify-between items-center gap-2 ${
              isMediaMax1025px ? 'mt-10' : 'mt-5'
            } `}
          >
            <p
              className={`font-bold ${
                isMediaMax1025px ? 'text-2xl text-center' : 'text-[3rem]'
              } `}
            >
              HeartBit SDK - New Onchain Metric
            </p>
            <p
              className={` text-center ${
                isMediaMax1025px ? 'text-base w-[90%]' : 'text-[1.25rem]'
              }`}
            >
              Deploy onchain likes to your dApp with this free and easy to
              plugin SDK.
            </p>
            <div
              className={` ${
                isMediaMax1025px ? 'p-7' : 'py-9 px-24'
              }  border-[#FFF9CE] border-4 rounded-2xl shadow-xl flex flex-col justify-center items-center my-6`}
            >
              <img
                src={heartbit.src}
                alt="heart bit"
                className={`mb-6 w-[260px] ${isMediaMax1025px ? '' : ''} `}
              />
              <p
                className={` font-bold ${
                  isMediaMax1025px ? 'text-2xl' : 'text-4xl'
                }`}
              >
                114K
              </p>
              <p
                className={` font-bold text-center ${
                  isMediaMax1025px ? 'text-lg' : 'text-2xl'
                }`}
              >
                HeartBits Minted
              </p>
            </div>
            <p
              className={`${
                isMediaMax1025px ? 'text-xs' : 'text-2xl'
              } font-bold text-[#000000] opacity-60`}
            >
              Create Yours
            </p>
            <img
              src={downArrow.src}
              alt="Heart Bit"
              className="my-2 animate-bounce"
            />
          </div>
        </HeadSectionLayout>

        <div
          id="cards"
          className={`w-full flex justify-between items-center ${
            isMediaMax1025px ? 'flex-col gap-8' : ''
          }`}
        >
          <div
            className={` ${
              isMediaMax1025px ? 'py-8' : 'w-[45%] h-[350px]'
            }  bg-[#FFF9CE] rounded-2xl flex flex-col justify-center items-center gap-4 shadow-lg`}
          >
            <p
              className={` font-bold ${
                isMediaMax1025px ? 'text-lg' : 'text-2xl'
              }`}
            >
              A new engagement Metric
            </p>
            <p className={`text-base text-center w-[80%]`}>
              Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum
              Lorem impsum Lorem impsum Lorem impsum Lorem impsu
            </p>
            <img src={metric.src} alt="metric" className="w-[50px]" />
          </div>
          <div
            className={` ${
              isMediaMax1025px ? 'py-8' : 'w-[45%] h-[350px]'
            }  bg-[#FFF9CE] rounded-2xl flex flex-col justify-center items-center gap-4 shadow-lg`}
          >
            <p
              className={` font-bold ${
                isMediaMax1025px ? 'text-lg' : 'text-2xl'
              }`}
            >
              A new engagement Metric
            </p>
            <p className={`text-base text-center w-[80%]`}>
              Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum
              Lorem impsum Lorem impsum Lorem impsum Lorem impsu
            </p>
            <img src={code.src} alt="metric" className="w-[50px]" />
          </div>
        </div>
        <div
          id="getstarted"
          className={`flex flex-col justify-between items-center gap-20 mt-20`}
        >
          <PrimaryButton
            title={'Get Started'}
            linkTo={'https://twitter.com/fileverse'}
            openNewTab={true}
          />
          <div
            className={`w-full flex justify-center items-start font-bold mb-20  ${
              isMediaMax1025px ? 'gap-4 text-lg flex-col' : 'gap-14 text-2xl'
            }`}
          >
            <div className="flex gap-3 items-center">
              <img
                src={heart50.src}
                alt="heart50"
                className={` ${
                  isMediaMax1025px ? 'w-[24px] h-[24px]' : 'w-[36px] h-[36px]'
                } `}
              />
              <p>Free</p>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src={heart50.src}
                alt="heart50"
                className={` ${
                  isMediaMax1025px ? 'w-[24px] h-[24px]' : 'w-[36px] h-[36px]'
                } `}
              />
              <p>Open-Source</p>
            </div>
            <div className="flex gap-3 items-center">
              <img
                src={heart50.src}
                alt="heart50"
                className={` ${
                  isMediaMax1025px ? 'w-[24px] h-[24px]' : 'w-[36px] h-[36px]'
                } `}
              />
              <p>Instant</p>
            </div>
          </div>
        </div>
        <div
          className={` ${
            isMediaMax1025px ? 'p-4 gap-2' : 'w-[80%] text-[32px] gap-8 py-8'
          }  text-center bg-[#FFF9CE] rounded-2xl flex flex-col justify-center items-center  shadow-xl`}
        >
          <img
            src={erospixie.src}
            alt="Erospixie"
            className={` ${isMediaMax1025px ? 'w-[40%]' : 'w-[195px]'}`}
          />
          <p>Bring onchain love to your dApp for Valentine’s Day!</p>
          <p className={` ${isMediaMax1025px ? 'px-2' : 'w-[85%] px-8'}`}>
            When you click on a Like button it’s all air; fugazi; dairy dust. An
            ephemeral entry an a centralized database...
          </p>
          <p className={` ${isMediaMax1025px ? 'px-2' : 'w-[85%] px-8'}`}>
            When someone use HeartBit, instead of air or a minting fee, they
            gift their time: a public measure of appreciation for onchain
            content
          </p>
        </div>
      </div>
    </BodyWrapper>
  );
}
