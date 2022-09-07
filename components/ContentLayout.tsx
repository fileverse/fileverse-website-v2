import React from 'react';

import { useMediaQuery } from '@mui/material';

const ContentLayout = ({ children }: { children: JSX.Element }) => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <div
      className={` lg:w-[50%]  lg:m-8 ${
        isMediaMax1025px && 'mt-12'
      } flex  items-center`}
    >
      {children}
    </div>
  );
};

export default ContentLayout;
