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
  const isMediaMax1440px = useMediaQuery('(max-width: 1440px)');
  return (
    <div
      className={`${
        background ? `${background}` : 'bg-yellow'
      } m-2 flex flex-col items-center justify-center rounded-[16px] ${
        isMediaMax1440px
          ? 'w-full mt-4 p-10'
          : `min-w-[400px] w-full max-h-[636px] ${background ? 'p-10' : 'p-20'}`
      }`}
    >
      <div
        className={`${
          isMediaMax1440px && 'w-full'
        } flex flex-col relative items-center`}
      >
        <div className={`mb-4 ${isMediaMax1440px ? 'w-full' : 'w-[350px]'}`}>
          <h2
            className={` text-center font-bold ${
              isMediaMax1440px ? ' text-2xl' : 'text-4xl'
            } `}
          >
            {productName}
          </h2>
          <p className={` ${isMediaMax1440px ? 'text-base' : ''} text-center `}>
            {firstDescription}
          </p>
          <p className={` ${isMediaMax1440px ? 'text-base' : ''} text-center `}>
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
              isMediaMax1440px ? 'text-sm' : 'text-base'
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
