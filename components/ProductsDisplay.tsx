import React from 'react';

import { useMediaQuery } from '@mui/material';
import Image from 'next/image';

import PrimaryButton from './PrimaryButton';

interface ProductDisplayProps {
  productName: string;
  CTAButtonLink: string;
  CTAButtonTitle: string;
  firstDescription: string;
  displayImage: any;
  secondDescription?: string;
  CTADescription: string;
  CTAbuttonDisabled?: boolean;
  background?: string;
}

const ProductsDisplay = ({
  background,
  productName,
  CTAButtonLink,
  CTAButtonTitle,
  firstDescription,
  secondDescription,
  CTADescription,
  displayImage,
  CTAbuttonDisabled,
}: ProductDisplayProps) => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <div
      className={` ${
        background ? `${background} border border-black` : 'bg-yellow'
      } m-2 flex py-8 flex-col items-center justify-center rounded-[36px]   ${
        isMediaMax1025px ? 'w-full mt-4' : 'w-[566px] max-h-[636px]'
      }`}
    >
      <div
        className={`p-4 ${
          isMediaMax1025px && 'w-full'
        } flex flex-col relative items-center`}
      >
        <div className={`mb-4 ${isMediaMax1025px ? 'w-full' : 'w-[350px]'}`}>
          <h1
            className={` text-center font-bold ${
              isMediaMax1025px ? ' text-2xl' : 'text-4xl'
            } `}
          >
            {productName}
          </h1>
          <p className={` ${isMediaMax1025px ? 'text-base' : ''} text-center `}>
            {firstDescription}
          </p>
          <p className={` ${isMediaMax1025px ? 'text-base' : ''} text-center `}>
            {secondDescription}
          </p>
        </div>
        <div>
          <div className={`my-4 flex justify-center `}>
            <PrimaryButton
              isDisable={CTAbuttonDisabled}
              openNewTab={true}
              title={CTAButtonTitle}
              linkTo={CTAButtonLink}
            />
          </div>
          <p
            className={`${
              isMediaMax1025px ? 'text-sm' : 'text-base'
            }  font-bold`}
          >
            {CTADescription}
          </p>
        </div>
        <div className={`mt-4 max-w-[420px] items-center flex justify-center`}>
          <Image
            src={displayImage}
            alt="fileverse-window"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
