import React from 'react';

import { useMediaQuery } from '@mui/material';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import documentationIcon from '../public/assets/documentation.svg';
import fileverseLogo from '../public/assets/fileverse.png';
import Gitcoin from '../public/assets/gitcoin.svg';
import Github from '../public/assets/github_logo.svg';
import email from '../public/assets/mail.svg';
import Radicle from '../public/assets/radicle.svg';
import Xicon from '../public/assets/xicon.svg';
import { CopyrightFooter } from './CopyrightFooter';
import HeadNav from './HeadNav';
import PrimaryButton from './PrimaryButton';

interface BodyType {
  children: JSX.Element;
  portalPage?: boolean;
  heartbitPage?: boolean;
}
const BodyWrapper = ({ children, portalPage, heartbitPage }: BodyType) => {
  const router = useRouter();
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <div className="">
      <HeadNav
        heartbitPage={heartbitPage}
        defaultColor={
          router.asPath === '/portal' || router.asPath === '/heartbit'
        }
      />
      <div className="">{children}</div>
      <div className="flex flex-col items-center  justify-center">
        <div className={clsx(isMediaMax1025px ? 'w-full' : 'w-[47rem]')}>
          <div className="p-4 mt-8 w-full">
            <h2
              className={clsx(
                isMediaMax1025px ? 'text-2xl' : 'text-3xl',
                'text-center font-bold'
              )}
            >
              {heartbitPage ? 'Learn More' : 'Where to find us?'}
            </h2>
            <div className="w-full flex justify-center  mt-4 items-center">
              <div
                className={`flex flex-wrap w-full items-center justify-center gap-2`}
              >
                <PrimaryButton
                  icon={Xicon}
                  title={'Twitter'}
                  iconStyles={'w-5'}
                  linkTo={'https://twitter.com/fileverse'}
                />
                {heartbitPage && (
                  <PrimaryButton
                    icon={documentationIcon}
                    iconStyles={'w-6'}
                    title={'Docs'}
                    linkTo={
                      'https://portal.fileverse.io/#/0xc7b5eda8cfC005f5fF6425Ac269Ee1b21A6ef7ec/file/0?chainId=100'
                    }
                    openNewTab={true}
                  />
                )}
                <PrimaryButton
                  icon={Github}
                  title={'Github'}
                  iconStyles={'w-6'}
                  linkTo={'https://github.com/fileverse'}
                />
                {!heartbitPage && (
                  <>
                    <PrimaryButton
                      icon={Radicle}
                      title={'Radicle'}
                      iconStyles={'w-5'}
                      linkTo={
                        'https://app.radicle.xyz/seeds/willow.radicle.garden/rad:git:hnrkj6egqcozks7f7n5dx3766e7m4z5tag8cy/tree'
                      }
                    />
                    <PrimaryButton
                      icon={Gitcoin}
                      title={'Gitcoin'}
                      iconStyles={'w-5'}
                      linkTo={
                        'https://gitcoin.co/grants/4846/fileverseio-file-sharing-between-blockchain-addre'
                      }
                    />
                    <PrimaryButton
                      icon={email}
                      title={'Email'}
                      iconStyles={'w-5'}
                      linkTo={'mailto:hello@fileverse.io'}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="w-full h-[10rem] p-2 flex items-center justify-center">
            <div
              className="flex 
items-center font-normal w-[42rem] p-4 px-2 text-sm bg-[#F8F8F8] rounded-xl	text-[#777777]"
            >
              <img
                src={fileverseLogo.src}
                className="w-9 h-9"
                alt="fileverse"
              />
              <div
                className={clsx(
                  isMediaMax1025px
                    ? 'text-sm text-center'
                    : 'text-lg text-left',
                  'text-[#777777] pl-2'
                )}
              >
                <p>
                  Fileverse is a trustless collaboration dApp supported by
                  14,000+ Gitcoin & Ethereum donors as well as leading
                  protocols, investors & angels 💛
                </p>
              </div>
            </div>
          </div>
          {portalPage && <CopyrightFooter />}
        </div>
      </div>
    </div>
  );
};

export default BodyWrapper;
