import React from 'react';

const HeadSectionLayout = ({
  children,
  noFooter,
  id,
}: {
  children: JSX.Element;
  noFooter?: boolean;
  id?: string;
}) => {
  return (
    <div id={id} className="min-h-[100vh] w-[100vw] bg-yellow">
      <div className="h-[5vh]"></div>
      <div className="flex min-h-[85vh] justify-center p-4">{children}</div>
      {!noFooter && (
        <div className="w-full min-h-[5vh]  flex justify-center">
          <p>Supported by 13,000+ donors on Gitcoin 💛</p>
        </div>
      )}
    </div>
  );
};

export default HeadSectionLayout;
