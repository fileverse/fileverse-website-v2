import React from 'react';

import { useRouter } from 'next/router';

interface ButtonType {
  title?: string;
  linkTo?: string;
  icon?: any;
  iconStyles?: string;
  openNewTab?: boolean;
  isDisable?: boolean;
  width?: string;
}
const PrimaryButton = ({
  title,
  icon,
  openNewTab,
  iconStyles,
  linkTo,
  isDisable,
  width,
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
      className={`${
        isDisable
          ? ' bg-gray-300 cursor-not-allowed'
          : 'bg-black cursor-pointer'
      } ${
        width && `w-[${width}] justify-center`
      } flex items-center text-white py-3 px-6 rounded-md`}
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
