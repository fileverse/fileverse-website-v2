import React, { useEffect, useRef, useState } from 'react';

import { Slide } from '@mui/material';
import Link from 'next/link';

import dropDownArrow from '../public/assets/dropDownArrow.svg';
import fileverseLogo from '../public/assets/fileverse.svg';
import whiteArrow from '../public/assets/whiteArrow.svg';

const HeadNav = () => {
  const [menu, setMenu] = useState(false);
  const [top, setTop] = useState(true);
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setTop(true);
    } else {
      setTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  const dropDownButton = useRef(null);
  return (
    <div
      className={`flex ${
        top ? 'bg-yellow ' : 'bg-white'
      }  fixed transition duration-500 ease-in-out w-[100vw] z-[99999] min-h-[10vh] justify-center`}
    >
      <div className={`w-[90%] flex`}>
        <div
          className={`w-[50%] duration-500 ease-in-out transition ${
            top ? 'bg-yellow ' : 'bg-white'
          }   flex items-center`}
        >
          <img className="h-12 w-12 mr-2" src={fileverseLogo.src} />
          <span className="font-xx">Fileverse</span>
        </div>
        <div
          className={`w-[50%] duration-500 ease-in-out transition relative flex ${
            top ? 'bg-yellow ' : 'bg-white'
          }    items-center h-full justify-end`}
          ref={dropDownButton}
        >
          <div
            onClick={() => setMenu(!menu)}
            className={`border rounded-md ${
              top ? 'bg-black text-white ' : 'bg-white'
            } flex transition duration-500 ease-in-out p-4 w-[12rem] justify-center h-[3rem] items-center border-black`}
          >
            <p className="mr-4">Show me more</p>
            {top ? (
              <img
                className={`w-4 h-4 ${menu ? 'rotate-[-90deg]' : ' rotate-90'}`}
                src={whiteArrow.src}
              />
            ) : (
              <img
                className={`w-4 h-4 ${menu ? 'rotate-[-180deg]' : ''}`}
                src={dropDownArrow.src}
              />
            )}
          </div>
          <Slide direction="down" in={menu} container={dropDownButton.current}>
            <div
              className={`absolute rounded-b-lg w-[12rem] -z-[999999] shadow-lg bg-white top-[80px]`}
            >
              <Link href={'/'} passHref>
                <a className="h-[34px] hover:cursor-pointer flex items-center mx-[12px] px-2 py-4 border-fade border-bottom border-b">
                  Why fileverse
                </a>
              </Link>
              <Link href={'/'} passHref>
                <a className="h-[34px] hover:cursor-pointer flex items-center mx-[12px] px-2 py-4 ">
                  Visit Dapp
                </a>
              </Link>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default HeadNav;
