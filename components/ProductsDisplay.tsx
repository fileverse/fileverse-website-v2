import React from 'react';

import { useMediaQuery } from '@mui/material';

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
        background || 'bg-yellow border border-black'
      } m-2 flex flex-col items-center justify-center rounded-md  ${
        isMediaMax1025px ? 'w-full mt-4' : 'w-[50%]'
      }`}
    >
      <div
        className={`p-4 ${
          isMediaMax1025px && 'w-full'
        } flex flex-col relative items-center`}
      >
        <div className={`mb-4 ${isMediaMax1025px ? 'w-full' : 'w-[400px]'}`}>
          <h1
            className={`mb-4 text-center font-bold ${
              isMediaMax1025px ? ' text-2xl' : 'text-3xl'
            } `}
          >
            {productName}
          </h1>
          <p
            className={` ${
              isMediaMax1025px ? 'text-base' : 'text-xl'
            } text-center font-bold`}
          >
            {firstDescription}
          </p>
          <p
            className={` ${
              isMediaMax1025px ? 'text-base' : 'text-xl'
            } text-center font-bold`}
          >
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
        <div className={`mt-4 items-center flex justify-center`}>
          <img
            className={` ${isMediaMax1025px ? 'h-full' : 'h-[400px]'}`}
            src={displayImage.src}
            alt="fileverse-window"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
