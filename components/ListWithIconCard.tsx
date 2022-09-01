/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface ListType {
    icon: any;
    title?: string;
    paragraph: string;
}
const ListWithIconCard = ({icon, title, paragraph}: ListType ) => {
  return (
    <div className='flex mt-8 relative'>
        <div className='bg-[#FFE60033] absolute h-9 w-9 flex items-center rounded-full p-2'>
            <img className='' src={icon.src}/>
        </div>
        <div className='ml-12'>
            {title && <h2 className='font-semibold'>{title}</h2>}
            <p className=''>
                {paragraph}
            </p>
        </div>
  </div>
  )
}

export default ListWithIconCard;