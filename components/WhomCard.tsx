import React from 'react';

import Image from 'next/image';

interface WhomCardProps {
  image: any;
  title: string;
  description: string;
}
const WhomCard = ({ image, title, description }: WhomCardProps) => {
  return (
    <div className="m-2 w-[20rem] flex flex-col items-center">
      <div className="w-32 flex justify-center">
        <Image src={image} alt={title} style={{ width: '100%' }} />
      </div>
      <h3 className="text-center text-xl font-semibold">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default WhomCard;
