import React from 'react';


interface ButtonType {
  title: string;
  linkTo?: string;
  icon? : any;
  iconStyles?: string;
}
const PrimaryButton = ({ title, linkTo, icon, iconStyles }: ButtonType) => {
  return (
    <button className="bg-black flex items-center text-white px-6 py-2 rounded-md">
      {title}
      {icon && (
        <img className={`${iconStyles}`} src={icon.src}/>
      )}
    </button>
  );
};

export default PrimaryButton;
