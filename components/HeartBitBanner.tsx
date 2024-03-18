import React from 'react';

import { HeartBitUI } from '@fileverse/heartbit-react';
import { useMediaQuery } from '@mui/material';
import clsx from 'clsx';

import styles from './heartBitBanner.module.scss';
import PrimaryButton from './PrimaryButton';

export default function HeartBitBanner() {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  const heartScale = isMediaMax1025px ? 2 : undefined;
  return (
    <div
      className={clsx(
        styles.banner,
        'bg-[#ffffff] flex justify-center items-center w-[100%]'
      )}
    >
      <div
        className={clsx(
          `w-full flex justify-center items-center`,
          isMediaMax1025px ? 'flex-col gap-2' : 'gap-5'
        )}
      >
        <div
          className={clsx(
            'flex justify-end items-center',
            isMediaMax1025px ? 'gap-2' : 'gap-5'
          )}
        >
          <HeartBitUI startFillPos={10} scale={heartScale} />
          <p
            className={clsx('font-bold text-center', {
              'text-[12px]': isMediaMax1025px,
              'text-xl': !isMediaMax1025px,
            })}
          >
            HeartBit SDK - Add Onchain Likes to your dApp/website
          </p>
          {isMediaMax1025px && <HeartBitUI startFillPos={10} scale={2} />}
        </div>
        <div className={clsx(isMediaMax1025px && 'text-xs')}>
          <PrimaryButton title="Discover" linkTo="/heartbit" />
        </div>
      </div>
    </div>
  );
}
