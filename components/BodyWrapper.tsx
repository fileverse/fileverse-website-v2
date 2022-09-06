import React from 'react';

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

      <div className="p-4 mt-4">
        <h2 className="font-bold text-2xl text-center">Where to find us?</h2>
        <div className="w-full flex justify-center  mt-4 items-center">
          <div className={`flex flex-wrap justify-center items-center`}>
            <div className="h-full">
              <div className={`bg-[#2AA8E01A] rounded-md m-4 p-8`}>
                <img
                  className="w-16 h-16"
                  src={Twitter.src}
                  alt="twitter icon"
                />
              </div>
              <p className="text-center font-semibold">{'Twitter'}</p>
            </div>
            <div className="h-full">
              <div className={`bg-[#FFDF0A1A] rounded-md m-4 p-8`}>
                <img className="w-16 h-16" src={Github.src} alt="github icon" />
              </div>
              <p className="text-center font-semibold">{'Github'}</p>
            </div>
            <div className="h-full">
              <div className={`bg-[#B959FF1A] rounded-md m-4 p-8`}>
                <img
                  className="w-16 h-16"
                  src={Radicle.src}
                  alt="radicle icon"
                />
              </div>
              <p className="text-center font-semibold">{'Radicle'}</p>
            </div>
            <div className="h-full">
              <div className={`bg-[#0FCE7C1A] rounded-md m-4 p-8`}>
                <img
                  className="w-16 h-16"
                  src={Gitcoin.src}
                  alt="gitcoin icon"
                />
              </div>
              <p className="text-center font-semibold">{'Gitcoin'}</p>
            </div>
            <div className="h-full">
              <div className={`bg-[#FFDF0A1A] rounded-md m-4 p-8`}>
                <img className="w-16 h-16" src={email.src} alt="email icon" />
              </div>
              <p className="text-center font-semibold">{'Email'}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFCE7] mt-4 p-4">
        <p className="text-center">Supported by 10,000+ donors on Gitcoin</p>
      </div>
    </div>
  );
};

export default BodyWrapper;
