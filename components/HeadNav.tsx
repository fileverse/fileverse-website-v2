import React, { useEffect, useRef, useState } from 'react';

import { Slide, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

import dropDownArrow from '../public/assets/dropDownArrow.svg';
import fileverseLogo from '../public/assets/fileverse.svg';
import hamburger from '../public/assets/hamburger.svg';
import whiteArrow from '../public/assets/whiteArrow.svg';
import xicon from '../public/assets/x-icon.svg';

const HeadNav = () => {
  const [menu, setMenu] = useState(false);
  const [top, setTop] = useState(true);
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  const [sideMenu, setSideMenu] = useState(false);
  const router = useRouter();
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
  const html = typeof window !== 'undefined' && document.querySelector('html');

  return (
    <div
      className={`flex ${
        top ? 'bg-yellow ' : 'bg-white'
      }  fixed  transition duration-500 ease-in-out w-[100vw] z-[99999] min-h-[10vh] justify-center`}
    >
      <div className={`w-[90%] flex`}>
        <div
          className={` lg:w-[50%] ${
            isMediaMax1025px && 'w-full'
          } duration-500 ease-in-out transition ${
            top ? 'bg-yellow ' : 'bg-white'
          }   flex items-center`}
          onClick={() => router.push('/')}
        >
          <img
            className={`${isMediaMax1025px && 'h-8 w-8'} lg:h-12 lg:w-12 mr-2`}
            alt="fileverse-logo"
            src={fileverseLogo.src}
          />
          <span className={`font-xx ${isMediaMax1025px && 'text-xs'}`}>
            Fileverse
          </span>
        </div>
        <div
          className={`
            lg:w-[50%] duration-500 ease-in-out transition relative flex ${
              top ? 'bg-yellow ' : 'bg-white'
            }    items-center h-full justify-end`}
          ref={dropDownButton}
        >
          {isMediaMax1025px ? (
            <div
              onClick={() => {
                if (html) html.classList.add('overflow-y-hidden');
                setSideMenu(!sideMenu);
              }}
            >
              <img src={hamburger.src} alt="hamburger" />
            </div>
          ) : (
            <div
              onClick={() => setMenu(!menu)}
              className={`border rounded-md ${
                top ? 'bg-black text-white ' : 'bg-white'
              } flex transition duration-500 ease-in-out p-4 w-[12rem] justify-center h-[3rem] items-center border-black`}
            >
              <p className="mr-4">Show me more</p>
              {top ? (
                <img
                  className={`w-4 h-4 ${
                    menu ? 'rotate-[-90deg]' : ' rotate-90'
                  }`}
                  alt="white-dropdown-arrow"
                  src={whiteArrow.src}
                />
              ) : (
                <img
                  className={`w-4 h-4 ${menu ? 'rotate-[-180deg]' : ''}`}
                  src={dropDownArrow.src}
                  alt="black-dropdown-arrow"
                />
              )}
            </div>
          )}

          <Slide direction="down" in={menu} container={dropDownButton.current}>
            <div
              className={`absolute rounded-b-lg w-[12rem] -z-[999999] shadow-lg bg-white top-[80px]`}
            >
              <Link href={'https://beta.fileverse.io/why-fileverse'} passHref>
                <a className="h-[34px] hover:cursor-pointer flex items-center mx-[12px] px-2 py-4 border-fade border-bottom border-b">
                  Why fileverse
                </a>
              </Link>
              <Link href={'/features'} passHref>
                <a className="h-[34px] hover:cursor-pointer flex items-center mx-[12px] px-2 py-4 border-fade border-bottom border-b">
                  Features
                </a>
              </Link>
              <Link href={'https://beta.fileverse.io/'} passHref>
                <a className="h-[34px] hover:cursor-pointer flex items-center mx-[12px] px-2 py-4 ">
                  Visit Dapp
                </a>
              </Link>
            </div>
          </Slide>
        </div>
      </div>
      <Slide direction="left" in={sideMenu}>
        <div className="h-[100vh] shadow-lg right-0 bg-white p-4 absolute w-[60vw]">
          <div
            onClick={() => {
              if (html) html.classList.remove('overflow-y-hidden');
              setSideMenu(false);
            }}
            className="w-full flex justify-end text-3xl"
          >
            <img src={xicon.src} className="w-8" alt="x-icon" />
          </div>
          <div className="">
            <div
              onClick={() => {
                if (html) html.classList.remove('overflow-y-hidden');
                setSideMenu(false);
              }}
              className=" py-2 "
            >
              <Link href={'https://beta.fileverse.io/why-fileverse'} passHref>
                <a>Why fileverse</a>
              </Link>
            </div>
            <div
              onClick={() => {
                if (html) html.classList.remove('overflow-y-hidden');
                setSideMenu(false);
              }}
              className="py-2"
            >
              <Link href={'/features'} passHref>
                <a>Features</a>
              </Link>
            </div>
            <div
              onClick={() => {
                if (html) html.classList.remove('overflow-y-hidden');
                setSideMenu(false);
              }}
              className="py-2"
            >
              <Link href={'https://beta.fileverse.io/'} passHref>
                <a>Visit Dapp</a>
              </Link>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default HeadNav;
