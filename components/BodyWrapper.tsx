import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Gitcoin from '../public/assets/gitcoin.svg';
import Github from '../public/assets/github_logo.svg';
import email from '../public/assets/mail.svg';
import Radicle from '../public/assets/radicle.svg';
import Twitter from '../public/assets/Twitter.svg';
import HeadNav from './HeadNav';

interface BodyType {
  children: JSX.Element;
}
const BodyWrapper = ({ children }: BodyType) => {
  return (
    <div className="">
      <HeadNav />
      <div className="">{children}</div>

      <div className="p-4 mt-8">
        <h2 className="font-bold text-2xl text-center">Where to find us?</h2>
        <div className="w-full flex justify-center  mt-4 items-center">
          <div className={`flex flex-wrap justify-center items-center`}>
            <Link href={'https://twitter.com/fileverse'}>
              <a target="_blank" rel="noopener noreferrer" className="h-full">
                <div className={`bg-[#2AA8E01A] rounded-md m-4 p-8`}>
                  <Image
                    width="64"
                    height="64"
                    src={Twitter.src}
                    alt="twitter icon"
                  />
                </div>
                <p className="text-center font-semibold">{'Twitter'}</p>
              </a>
            </Link>

            <Link href={'https://github.com/fileverse'}>
              <a target="_blank" rel="noopener noreferrer" className="h-full">
                <div className={`bg-[#FFDF0A1A] rounded-md m-4 p-8`}>
                  <Image
                    width="64"
                    height="64"
                    src={Github.src}
                    alt="github icon"
                  />
                </div>
                <p className="text-center font-semibold">{'Github'}</p>
              </a>
            </Link>

            <Link
              href={
                'https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkj6egqcozks7f7n5dx3766e7m4z5tag8cy'
              }
            >
              <a target="_blank" rel="noopener noreferrer" className="h-full">
                <div className={`bg-[#B959FF1A] rounded-md m-4 p-8`}>
                  <Image
                    width="64"
                    height="64"
                    src={Radicle.src}
                    alt="radicle"
                  />
                </div>
                <p className="text-center font-semibold">{'Radicle'}</p>
              </a>
            </Link>
            <Link
              href={
                'https://gitcoin.co/grants/4846/fileverseio-file-sharing-between-blockchain-addre'
              }
            >
              <a target="_blank" rel="noopener noreferrer" className="h-full">
                <div className={`bg-[#0FCE7C1A] rounded-md m-4 p-8`}>
                  <Image
                    width="64"
                    height="64"
                    src={Gitcoin.src}
                    alt="gitcoin icon"
                  />
                </div>
                <p className="text-center font-semibold">{'Gitcoin'}</p>
              </a>
            </Link>
            <Link href={'mailto:hello@fileverse.io'}>
              <a target="_blank" rel="noopener noreferrer" className="h-full">
                <div className={`bg-[#FFDF0A1A] rounded-md m-4 p-8`}>
                  <Image
                    width="64"
                    height="64"
                    src={email.src}
                    alt="email icon"
                  />
                </div>
                <p className="text-center font-semibold">{'Email'}</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFCE7] mt-4 p-4">
        <p className="text-center">Supported by 13,000+ donors on Gitcoin</p>
      </div>
    </div>
  );
};

export default BodyWrapper;
