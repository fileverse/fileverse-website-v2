import React from 'react';

interface LayoutType {
  children: JSX.Element;
}
const SectionLayout = ({ children }: LayoutType) => {
  return (
    <div className="mt-8 w-[100vw] flex justify-center min-h-[70vh]">
      <div className="flex w-[90vw] justify-center">{children}</div>
    </div>
  );
};

export default SectionLayout;
