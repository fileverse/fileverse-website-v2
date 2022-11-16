import React from 'react';

interface WhomCardProps {
  image: any;
  title: string;
  description: string;
}
const WhomCard = ({ image, title, description }: WhomCardProps) => {
  return (
    <div className="m-2 w-[20rem] flex flex-col items-center">
      <div className="flex justify-center">
        <img className="w-32" src={image.src} alt={title} />
      </div>
      <h3 className="text-center font-semibold">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default WhomCard;
