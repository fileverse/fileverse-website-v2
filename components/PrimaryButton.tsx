import React from 'react'

interface ButtonType {
    title: string;
    linkTo?: string;
}
const PrimaryButton = ({title, linkTo}: ButtonType) => {
  return (
    <button className='bg-black text-white px-6 py-2 rounded-md'>
        {title}
    </button>
  )
}

export default PrimaryButton