import React from 'react';

import { useMediaQuery } from '@mui/material';

import PrimaryButton from './PrimaryButton';

interface ProductDisplayProps {
  title: string;
  CTAButtonLink: string;
  CTAButtonTitle: string;
  description: string;
  displayImage: any;
  MbadgeText?: string;
  DbadgeText?: string;
  paragraph?: string;
}

const ProductsDisplay = ({
  title,
  CTAButtonLink,
  CTAButtonTitle,
  description,
  displayImage,
  MbadgeText,
  DbadgeText,
  paragraph,
}: ProductDisplayProps) => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <div className={`relative ${isMediaMax1025px ? 'w-full mt-4' : 'w-[50%]'}`}>
      <div className="badge-overlay">
        {isMediaMax1025px ? (
          <span className="top-left badge">{MbadgeText}</span>
        ) : (
          <span className="top-left badge">{DbadgeText}</span>
        )}
      </div>
      <div
        className={` mt-10 ${
          isMediaMax1025px && 'w-full'
        } flex flex-col relative items-center`}
      >
        <div
          className={`${
            isMediaMax1025px
              ? 'w-full flex flex-col justify-center items-center'
              : 'w-[70%]'
          }`}
        >
          <h1
            className={`font-bold   ${
              isMediaMax1025px ? ' text-2xl w-[80%] text-center' : 'text-3xl'
            } `}
          >
            {title}
          </h1>
          {paragraph && <p>{paragraph}</p>}
          <p className={`my-2  ${isMediaMax1025px && 'text-center'}`}>
            {description}
          </p>
          <div className={`mt-4 flex justify-center `}>
            <PrimaryButton
              openNewTab={true}
              title={CTAButtonTitle}
              linkTo={CTAButtonLink}
            />
          </div>
        </div>
        <div className={`w-[70%] mt-4 flex justify-center`}>
          <img className="" src={displayImage.src} alt="fileverse-window" />
        </div>
      </div>
    </div>
  );
};

export default ProductsDisplay;
