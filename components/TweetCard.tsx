import React from 'react';

import { useMediaQuery } from '@mui/material';

const TweetCard = ({ image }: { image: any }) => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <div className={`${isMediaMax1025px ? 'min-w-[100%]' : 'min-w-[33%]'}`}>
      <img
        className={`${isMediaMax1025px ? 'w-full' : 'w-[500px]'}`}
        src={image.src}
        alt="tweet"
      />
    </div>
  );
};

export default TweetCard;
