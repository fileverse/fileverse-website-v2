import React from 'react';

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
        'bg-[#000000] text-white flex justify-center items-center w-[100%] px-2'
      )}
    >
      <div
        className={clsx(
          `w-full flex justify-center items-center`,
          isMediaMax1025px ? 'flex-wrap gap-2' : 'gap-5'
        )}
      >
        <div
          className={clsx(
            'flex justify-end items-center',
            isMediaMax1025px ? 'gap-2' : 'gap-5'
          )}
        >
          <p
            className={clsx('font-bold text-center', {
              'text-[12px]': isMediaMax1025px,
              'text-xl': !isMediaMax1025px,
            })}
          >
            The Fileverse Beta is open for a limited time!
          </p>
        </div>
        <div className={clsx(isMediaMax1025px && 'text-xs')}>
          <PrimaryButton
            title="Get Started"
            linkTo="https://portal.fileverse.io/#/create"
            customCSS={clsx('bg-white text-black', {
              'px-3 py-2': isMediaMax1025px,
            })}
          />
        </div>
      </div>
    </div>
  );
}
