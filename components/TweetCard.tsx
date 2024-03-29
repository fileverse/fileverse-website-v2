import React from 'react';

import { useMediaQuery } from '@mui/material';
import Image from 'next/image';

const TweetCard = ({ image }: { image: any }) => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <div className={`${isMediaMax1025px ? 'min-w-[100%]' : 'min-w-[33%]'}`}>
      <Image
        src={image}
        alt="tweet"
        style={{ width: isMediaMax1025px ? '100%' : '500px' }}
      />
    </div>
  );
};

export default TweetCard;
