import React from 'react';

import { useMediaQuery } from '@mui/material';

const ContentLayout = ({ children }: { children: JSX.Element }) => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <div
      className={` ${
        isMediaMax1025px ? 'mt-12' : 'w-[50%] m-8'
      } flex border border-black items-center `}
    >
      {children}
    </div>
  );
};

export default ContentLayout;
