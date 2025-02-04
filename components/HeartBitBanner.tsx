import React from 'react';

import { HeartBitUI } from '@fileverse/heartbit-react';
import { useMediaQuery } from '@mui/material';
import clsx from 'clsx';

// import dDocsIcon from '../public/assets/file-text.svg';
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
          {/* <img src={dDocsIcon.src} alt="dDocs" className="invert" /> */}
          <HeartBitUI
            disableBeatingAnimation={true}
            scale={isMediaMax1025px ? 2 : 3}
            startFillPos={10}
          />
          <p
            className={clsx('font-bold text-center', {
              'text-[12px]': isMediaMax1025px,
              'text-xl': !isMediaMax1025px,
            })}
          >
            Agent SDK - Explore Multi Agent Collaboration Onchain
          </p>
          {isMediaMax1025px && (
            <HeartBitUI
              disableBeatingAnimation={true}
              scale={2}
              startFillPos={10}
            />
          )}
        </div>
        {isMediaMax1025px && <br />}
        <div className={clsx(isMediaMax1025px && 'text-xs')}>
          <PrimaryButton
            title="Try Now"
            linkTo="https://www.npmjs.com/package/@fileverse/agents"
            openNewTab
            customCSS={clsx('bg-white text-black', {
              'px-3 py-2': isMediaMax1025px,
              'py-1 px-3': !isMediaMax1025px,
            })}
          />
        </div>
      </div>
    </div>
  );
}
