import React from 'react';

import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';

import fileverseLogo from '../public/assets/fileverse.png';
import Gitcoin from '../public/assets/gitcoin.svg';
import Github from '../public/assets/github_logo.svg';
import email from '../public/assets/mail.svg';
import Radicle from '../public/assets/radicle.svg';
import Twitter from '../public/assets/Twitter.svg';
import HeadNav from './HeadNav';
import PrimaryButton from './PrimaryButton';

interface BodyType {
  children: JSX.Element;
}
const BodyWrapper = ({ children }: BodyType) => {
  const router = useRouter();
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  return (
    <div className="">
      <HeadNav defaultColor={router.asPath === '/portal'} />
      <div className="">{children}</div>
      <div className="flex flex-col items-center  justify-center">
        <div className={` ${isMediaMax1025px ? 'w-full' : 'w-[47rem]'}`}>
          <div className="p-4 mt-8 w-full">
            <h2
              className={`font-bold ${
                isMediaMax1025px ? 'text-2xl' : 'text-3xl'
              } text-center`}
            >
              Where to find us?
            </h2>
            <div className="w-full flex justify-center mt-2 mb-8">
              <p className="text-center w-[22rem]">
                Follow the socials below to connect with the community and earn
                with others
              </p>
            </div>

            <div className="w-full flex justify-center  mt-4 items-center">
              <div className={`flex flex-wrap w-full items-center`}>
                <PrimaryButton
                  icon={Twitter}
                  title={'Twitter'}
                  iconStyles={'w-5'}
                  linkTo={'https://twitter.com/fileverse'}
                />
                <PrimaryButton
                  icon={Github}
                  title={'Github'}
                  iconStyles={'w-5'}
                  linkTo={'https://github.com/fileverse'}
                />
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
              </div>
            </div>
          </div>
          <div className="w-full h-[10rem] p-2 flex items-center justify-center">
            <div
              className="flex 
items-center font-normal w-full p-4 px-2 text-sm bg-[#F8F8F8] rounded-xl	text-[#777777]"
            >
              <img
                src={fileverseLogo.src}
                className="w-9 h-9"
                alt="fileverse"
              />
              <div
                className={` ${
                  isMediaMax1025px ? 'text-sm' : 'text-lg'
                } text-left text-[#777777] pl-2`}
              >
                <p>
                  Fileverse Portal is an on-chain collaboration & coordination
                  dApp built with the
                </p>
                <p>
                  ❤️ and 🔥 of 14,000 contributors from the Gitcoin & Ethereum
                  communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyWrapper;
