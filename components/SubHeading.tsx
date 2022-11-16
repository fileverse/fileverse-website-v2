import React from 'react';

import { useMediaQuery } from '@mui/material';

const SubHeading = ({ text }: { text: string }) => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <h2
      className={`font-bold text-center  ${
        isMediaMax1025px ? 'text-2xl' : `text-3xl`
      }`}
    >
      {text}
    </h2>
  );
};

export default SubHeading;
