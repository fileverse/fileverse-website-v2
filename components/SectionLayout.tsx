import React from 'react';

interface LayoutType {
  children: JSX.Element;
  marginTop?: string;
  id?: string;
}
const SectionLayout = ({ children, marginTop }: LayoutType) => {
  return (
    <div className={` ${marginTop || 'mt-8'} w-[100vw] flex justify-center`}>
      <div className="flex w-[90vw] justify-center">{children}</div>
    </div>
  );
};

export default SectionLayout;
