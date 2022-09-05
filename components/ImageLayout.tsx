import React from 'react';

import { useMediaQuery } from '@mui/material';

const ImageLayout = ({ children }: { children: JSX.Element }) => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <div
      className={`${
        isMediaMax1025px ? 'h-[25rem]' : 'w-[50%] mr-8'
      } flex items-center border border-black justify-center`}
    >
      {children}
    </div>
  );
};

export default ImageLayout;
