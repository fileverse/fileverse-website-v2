import React from 'react';

import { useMediaQuery } from '@mui/material';

import PrimaryButton from './PrimaryButton';

interface ProductDisplayProps {
  title: string;
  CTAButtonLink: string;
  CTAButtonTitle: string;
  description: string;
  displayImage: any;
  badgeText: string;
}

const ProductsDisplay = ({
  title,
  CTAButtonLink,
  CTAButtonTitle,
  description,
  displayImage,
  badgeText,
}: ProductDisplayProps) => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <div className={`relative ${isMediaMax1025px ? 'w-full' : 'w-[50%]'}`}>
      <div className="badge-overlay">
        <span className="top-left badge">{badgeText}</span>
      </div>
      <div
        className={` mt-20 ${
          isMediaMax1025px && 'w-full'
        } flex flex-col relative items-center`}
      >
        <div className={`${isMediaMax1025px ? 'w-full' : 'w-[70%]'}`}>
          <h1
            className={`font-bold text-3xl  ${
              isMediaMax1025px && 'text-center'
            } `}
          >
            {title}
          </h1>
          <h1>
            <a
              href=""
              className="typewrite"
              data-period="2000"
              data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'
            >
              <span className="wrap"></span>
            </a>
          </h1>
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
