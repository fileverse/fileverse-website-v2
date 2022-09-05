import React from 'react';

const HeadSectionLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="min-h-[100vh] w-[100vw] bg-yellow">
      <div className="h-[10vh]"></div>
      <div className="flex min-h-[85vh] justify-center p-4">{children}</div>
      <div className="w-full h-[5vh] border border-black flex justify-center">
        <p>Supported by 10000+ donors on Gitcoin 💛</p>
      </div>
    </div>
  );
};

export default HeadSectionLayout;
