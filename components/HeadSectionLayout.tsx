import React from 'react';

const HeadSectionLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="h-[100vh] w-[100vw] min-h-[700px] bg-yellow">
      <div className="h-[10vh]"></div>
      <div className="flex h-[85vh] min-h-[600px] justify-center p-4">
        {children}
      </div>
      <div className="w-full h-[5vh] flex justify-center">
        <p>Supported by 10000+ donors on Gitcoin 💛</p>
      </div>
    </div>
  );
};

export default HeadSectionLayout;
