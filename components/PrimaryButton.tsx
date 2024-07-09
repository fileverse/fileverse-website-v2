import React from 'react';

import clsx from 'clsx';
import { useRouter } from 'next/router';

interface ButtonType {
  title?: string;
  linkTo?: string;
  icon?: any;
  iconStyles?: string;
  openNewTab?: boolean;
  isDisable?: boolean;
  width?: string;
  customCSS?: string;
}
const PrimaryButton = ({
  title,
  icon,
  openNewTab,
  iconStyles,
  linkTo,
  isDisable,
  width,
  customCSS,
}: ButtonType) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (linkTo && !isDisable) {
          if (openNewTab) window.open(linkTo, '_blank');
          else {
            router.push(linkTo);
          }
        }
      }}
      className={clsx(
        'flex items-center  rounded-md',
        width && `w-[${width}] justify-center`,
        customCSS || 'bg-black text-white py-3 px-6',
        isDisable ? ' bg-gray-300 cursor-not-allowed' : 'cursor-pointer'
      )}
    >
      {icon && (
        <img
          className={`${iconStyles} ${title && 'mr-2'}`}
          src={icon.src}
          alt="button icon"
        />
      )}
      {title && title}
    </button>
  );
};

export default PrimaryButton;
