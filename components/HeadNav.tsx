import React, { useState } from 'react'
import fileverseLogo from '../public/assets/fileverse.svg'
import dropDownArrow from '../public/assets/dropDownArrow.svg'
import Link from 'next/link'

const HeadNav = () => {
    const [menu, setMenu] = useState(false);
  return (
    <div className='flex bg-white min-h-[10vh] justify-center'>
        <div className='w-[90%] flex'>
            <div className='w-[50%] flex items-center'>
                <img className="h-12 w-12 mr-2" src={fileverseLogo.src}/>
                <span className="font-xx">Fileverse</span>
            </div>
            <div className='w-[50%] relative flex items-center h-full justify-end '>
                <div onClick={() => setMenu(!menu)} className='border rounded-md flex p-4 h-[3rem] items-center border-black'>
                    <p className='mr-2'>Show me more</p>
                    <img className={`w-4 h-4 ${menu ? "rotate-180" : "" }`} src={dropDownArrow.src}/>
                </div>
                {menu && (
                    <div className='absolute rounded-lg w-[15rem] shadow-lg bg-white top-[90px]'>
                        <Link href={"/"} passHref>
                            <a>
                            <div className="h-[34px] flex items-center mx-[12px] px-2 py-4 border-fade border-bottom border-b">
                                <span className="hover:cursor-pointer">Why fileverse</span>
                            </div>
                            </a>
                        </Link>
                        <Link href={"/"} passHref>
                            <a>
                            <div className="h-[34px] flex items-center mx-[12px] px-2 py-2 ">
                                <span className="hover:cursor-pointer">Visit Dapp</span>
                            </div>
                            </a>
                        </Link>
                    </div>
                )}

            </div>
        </div>

    </div>
  )
}

export default HeadNav