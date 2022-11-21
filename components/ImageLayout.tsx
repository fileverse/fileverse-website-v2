import React from 'react';

import { useMediaQuery } from '@mui/material';

const ImageLayout = ({ children }: { children: JSX.Element }) => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <div
      className={` lg:w-[50%] px-4 lg:mr-8 ${
        isMediaMax1025px ? '' : 'items-center'
      } flex  justify-center`}
    >
      {children}
    </div>
  );
};

export default ImageLayout;
