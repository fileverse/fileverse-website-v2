/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import Image from 'next/image';

interface ListType {
  icon: any;
  title?: string;
  paragraph: string;
  whiteIconBackground?: boolean;
}
const ListWithIconCard = ({
  icon,
  title,
  paragraph,
  whiteIconBackground,
}: ListType) => {
  return (
    <div className="flex mt-8 relative">
      <div
        className={`${
          whiteIconBackground ? 'bg-[#FFFFFF]' : 'bg-[#FFE60033]'
        } absolute h-9 w-9 flex justify-center items-center rounded-full p-2`}
      >
        <Image width={'16'} height={'16'} src={icon.src} alt="list icon" />
      </div>
      <div className="ml-12">
        {title && <h2 className="font-semibold">{title}</h2>}
        <p className="">{paragraph}</p>
      </div>
    </div>
  );
};

export default ListWithIconCard;
