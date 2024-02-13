import React from 'react';

import { HeartBitUI } from '@fileverse/heartbit-react';
import { useMediaQuery } from '@mui/material';
import clsx from 'clsx';

import styles from './heartBitBanner.module.scss';
import PrimaryButton from './PrimaryButton';

export default function HeartBitBanner() {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <div
      className={clsx(
        styles.banner,
        'bg-[#ffffff] flex justify-center items-center w-[100%]'
      )}
    >
      <div className={clsx(`flex justify-center items-center gap-5 flex-wrap`)}>
        <HeartBitUI startFillPos={10} />
        <p
          className={clsx('font-bold', {
            'text-[12px]': isMediaMax1025px,
            'text-xl': !isMediaMax1025px,
          })}
        >
          HeartBit SDK - Send Onchain Love for Valentine&apos;s
        </p>
        <PrimaryButton title="Discover" linkTo="/heartbit" />
      </div>
    </div>
  );
}
