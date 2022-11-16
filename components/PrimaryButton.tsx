import React from 'react';

import { useRouter } from 'next/router';

interface ButtonType {
  title: string;
  linkTo?: string;
  icon?: any;
  iconStyles?: string;
  openNewTab?: boolean;
}
const PrimaryButton = ({
  title,
  icon,
  openNewTab,
  iconStyles,
  linkTo,
}: ButtonType) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (linkTo) {
          if (openNewTab) window.open(linkTo, '_blank');
          else {
            router.push(linkTo);
          }
        }
      }}
      className="bg-black flex items-center text-white px-6 py-4 rounded-md"
    >
      {title}
      {icon && (
        <img className={`${iconStyles}`} src={icon.src} alt="button icon" />
      )}
    </button>
  );
};

export default PrimaryButton;
