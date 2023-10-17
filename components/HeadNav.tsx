/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from 'react';

import { Slide, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import dropDownArrow from '../public/assets/dropDownArrow.svg';
import fileverseLogo from '../public/assets/fileverse.png';
import newTabIcon from '../public/assets/gotoIcon.svg';
import hamburger from '../public/assets/hamburger.svg';
import whiteArrow from '../public/assets/whiteArrow.svg';
import xicon from '../public/assets/x-icon.svg';

const HeadNav = ({ defaultColor }: { defaultColor?: boolean }) => {
  const [menu, setMenu] = useState(false);
  const [top, setTop] = useState(true);
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  const [sideMenu, setSideMenu] = useState(false);
  const router = useRouter();
  const ref: any = useRef(null);
  const hamburgerbar: any = useRef(null);
  const dropDownButton: any = useRef(null);
  const html = typeof window !== 'undefined' && document.querySelector('html');
  const [newTabIconVisible, setNewTabIcon] = useState('');
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (isMediaMax1025px) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          sideMenu &&
          !hamburgerbar.current?.contains(event.target)
        ) {
          setSideMenu(false);
          if (html) html.classList.remove('overflow-y-hidden');
        }
      } else if (
        dropDownButton.current &&
        !dropDownButton.current.contains(event.target) &&
        menu
      ) {
        setMenu(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
  });
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
  return (
    <div
      className={`flex ${
        top && !defaultColor ? 'bg-yellow ' : 'bg-white'
      }  fixed  transition duration-500 ease-in-out w-[100vw] z-[99999] min-h-[10vh] justify-center`}
    >
      <div className={`w-[90%] flex`}>
        <div
          className={` lg:w-[50%] ${
            isMediaMax1025px && 'w-full'
          } duration-500 ease-in-out transition ${
            top && !defaultColor ? 'bg-yellow ' : 'bg-white'
          }   flex items-center`}
          onClick={() => router.push('/')}
        >
          <img
            className={`${
              isMediaMax1025px && 'h-8 w-8'
            } cursor-pointer lg:h-12 lg:w-12 mr-2`}
            alt="fileverse-logo"
            src={fileverseLogo.src}
          />
          <span
            className={` cursor-pointer font-xx ${
              isMediaMax1025px && 'text-xs'
            }`}
          >
            Fileverse
          </span>
        </div>
        <div
          className={`
            lg:w-[50%] duration-500 ease-in-out transition relative flex ${
              top && !defaultColor ? 'bg-yellow ' : 'bg-white'
            }    items-center h-full justify-end`}
          ref={dropDownButton}
        >
          {isMediaMax1025px ? (
            <div
              ref={hamburgerbar}
              onClick={() => {
                if (html) html.classList.add('overflow-y-hidden');
                setSideMenu(!sideMenu);
              }}
            >
              <img src={hamburger.src} alt="hamburger" />
            </div>
          ) : (
            <button
              onClick={() => setMenu(!menu)}
              className={`border rounded-md ${
                top || defaultColor ? 'bg-black text-white ' : 'bg-white'
              } flex transition duration-500 ease-in-out p-4 w-[12rem] justify-center h-[3rem] items-center border-black`}
            >
              <p className="mr-4">About</p>
              {top || defaultColor ? (
                <Image
                  className={` ${menu ? 'rotate-[-90deg]' : ' rotate-90'}`}
                  alt="white-dropdown-arrow"
                  src={whiteArrow.src}
                  width="16"
                  height="16"
                />
              ) : (
                <Image
                  className={`w-4 h-4 ${menu ? 'rotate-[-180deg]' : ''}`}
                  src={dropDownArrow.src}
                  alt="black-dropdown-arrow"
                  width={'16'}
                  height={'16'}
                />
              )}
            </button>
          )}

          <Slide direction="down" in={menu} container={dropDownButton.current}>
            <div
              className={`absolute py-4 rounded-lg w-[12rem] font-semibold -z-[999999] shadow-lg bg-white top-[80px]`}
            >
              <Link href={'https://portal.fileverse.io/#/manifesto'} passHref>
                <a className="h-[34px] hover:cursor-pointer flex items-center mx-[12px] px-2 py-4 border-fade border-bottom border-b">
                  FAQ
                </a>
              </Link>
              <Link href={'https://portal.fileverse.io/#/contracts'} passHref>
                <a className="h-[34px] hover:cursor-pointer flex items-center mx-[12px] px-2 py-4 border-fade border-bottom border-b">
                  My Portals
                </a>
              </Link>
              <Link href={'https://beta.fileverse.io/'} passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setNewTabIcon('SOLO')}
                  onMouseLeave={() => setNewTabIcon('')}
                  className="flex h-[34px] hover:cursor-pointer  items-center mx-[12px] px-2 py-4 border-fade "
                >
                  Fileverse Solo
                  {newTabIconVisible === 'SOLO' && (
                    <img
                      className="ml-2 w-4"
                      src={newTabIcon.src}
                      alt="new tab icon"
                    />
                  )}
                </a>
              </Link>
            </div>
          </Slide>
        </div>
      </div>
      <Slide direction="left" in={sideMenu}>
        <div
          ref={ref}
          className="h-[100vh] shadow-lg right-0 bg-white p-4 absolute w-[60vw]"
        >
          <div
            onClick={() => {
              if (html) html.classList.remove('overflow-y-hidden');
              setSideMenu(false);
            }}
            className="w-full flex justify-end text-3xl"
          >
            <img src={xicon.src} className="w-8" alt="x-icon" />
          </div>
          <div className="font-semibold mt-6">
            <Link href={'https://portal.fileverse.io/#/manifesto'} passHref>
              <div
                onClick={() => {
                  if (html) html.classList.remove('overflow-y-hidden');
                  setSideMenu(false);
                }}
              >
                <a>FAQ</a>
              </div>
            </Link>
            <Link href={'https://portal.fileverse.io/#/contracts'} passHref>
              <div
                onClick={() => {
                  if (html) html.classList.remove('overflow-y-hidden');
                  setSideMenu(false);
                }}
                className="py-2"
              >
                <a>My Portals</a>
              </div>
            </Link>
            <Link href={'https://beta.fileverse.io'} passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (html) html.classList.remove('overflow-y-hidden');
                  setSideMenu(false);
                }}
                className="py-2"
              >
                Fileverse Solo
              </a>
            </Link>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default HeadNav;
