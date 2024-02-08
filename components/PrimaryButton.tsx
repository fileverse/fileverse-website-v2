import React from 'react';

import { useRouter } from 'next/router';

interface ButtonType {
  title: string;
  linkTo?: string;
  icon?: any;
  iconStyles?: string;
  openNewTab?: boolean;
  isDisable?: boolean;
}
const PrimaryButton = ({
  title,
  icon,
  openNewTab,
  iconStyles,
  linkTo,
  isDisable,
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
      } flex items-center text-white py-3 px-6 rounded-md`}
    >
      {icon && (
        <img
          className={`${iconStyles} mr-2`}
          src={icon.src}
          alt="button icon"
        />
      )}
      {title}
    </button>
  );
};

export default PrimaryButton;
