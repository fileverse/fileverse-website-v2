/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from 'react';

import { Slide, useMediaQuery } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import dropDownArrow from '../public/assets/dropDownArrow.svg';
import fileverseLogo from '../public/assets/fileverse.png';
import hamburger from '../public/assets/hamburger.svg';
import whiteArrow from '../public/assets/whiteArrow.svg';
import xicon from '../public/assets/x-icon.svg';
import HeartBitBanner from './HeartBitBanner';

const HeadNav = ({
  defaultColor,
  heartbitPage,
}: {
  defaultColor?: boolean;
  heartbitPage?: boolean;
}) => {
  const [menu, setMenu] = useState(false);
  const [top, setTop] = useState(true);
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  const [sideMenu, setSideMenu] = useState(false);
  const router = useRouter();
  const ref: any = useRef(null);
  const hamburgerbar: any = useRef(null);
  const dropDownButton: any = useRef(null);
  const html = typeof window !== 'undefined' && document.querySelector('html');
  // const [newTabIconVisible, setNewTabIcon] = useState('');
  const [showBanner, setShowBanner] = useState(false);
  const isIndexPage = router.asPath === '/';
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
  useEffect(() => {
    if (isIndexPage) {
      setTimeout(() => {
        setShowBanner(true);
      }, 2000);
    }
  }, [isIndexPage]);
  return (
    <div
      className={`flex ${
        top && !defaultColor ? 'bg-yellow' : 'bg-white'
      }  fixed  transition duration-500 ease-in-out w-[100vw] z-[99999] min-h-[10vh] justify-center`}
    >
      <div
        className={`flex flex-col w-full justify-center items-center ${
          top && !defaultColor ? 'bg-yellow' : 'bg-white'
        }`}
      >
        {isIndexPage && top && showBanner && <HeartBitBanner />}

        <div className={clsx(`w-[90%] flex`, { 'my-4': top })}>
          <div
            className={` lg:w-[50%] ${
              isMediaMax1025px && 'w-full'
            } duration-500 ease-in-out transition ${
              top && !defaultColor ? 'bg-yellow ' : 'bg-white'
            }   flex items-center`}
            onClick={() => {
              router.push('/');
            }}
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
          {heartbitPage ? (
            <div
              className={`
            lg:w-[50%] duration-500 ease-in-out transition relative flex ${
              top && !defaultColor ? 'bg-yellow ' : 'bg-white'
            }    items-center h-full justify-end`}
            >
              <a
                href="https://www.npmjs.com/package/@fileverse/heartbit-react"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className={`border rounded-md ${
                    top || defaultColor ? 'bg-black text-white ' : 'bg-white'
                  } ${
                    isMediaMax1025px
                      ? 'w-[6rem] h-[2rem]'
                      : 'w-[12rem] h-[3rem] p-4'
                  } flex transition duration-500 ease-in-out justify-center items-center border-black`}
                >
                  <p className={`${isMediaMax1025px && 'text-xs'}`}>
                    Get Started
                  </p>
                </button>
              </a>
            </div>
          ) : (
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
                  className={`rounded-md ${
                    top && !defaultColor ? 'bg-black text-white ' : 'bg-white'
                  } flex transition duration-500 ease-in-out p-4 w-[12rem] justify-center h-[3rem] items-center border-black`}
                >
                  <p className="mr-4">Solutions</p>
                  {top && !defaultColor ? (
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

              <Slide
                direction="down"
                in={menu}
                container={dropDownButton.current}
              >
                <div
                  className={`absolute p-1 rounded-lg w-[160px] font-semibold -z-[999999] shadow-lg bg-white top-[65px]`}
                >
                  <Link
                    href={'https://ddocs.new'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex items-center p-2 hover:bg-[#F2F4F5] rounded text-base font-medium gap-1"
                  >
                    dDocs
                  </Link>
                  <Link
                    href={'/portal'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex items-center p-2 hover:bg-[#F2F4F5] rounded text-base font-medium gap-1"
                  >
                    Portal
                    <p className="bg-[#E8EBEC] text-[10px] font-normal rounded py-[2px] px-1 text-[#77818A]">
                      Private beta
                    </p>
                  </Link>
                  <Link
                    href={'https://beta.fileverse.io/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    // onMouseEnter={() => setNewTabIcon('SOLO')}
                    // onMouseLeave={() => setNewTabIcon('')}
                    className="cursor-pointer flex items-center p-2 hover:bg-[#F2F4F5] rounded text-base font-medium gap-1"
                  >
                    Solo
                    {/* {newTabIconVisible === 'SOLO' && (
                      <img
                        className="ml-2 w-4"
                        src={newTabIcon.src}
                        alt="new tab icon"
                      />
                    )} */}
                    <p className="bg-[#E8EBEC] text-[10px] font-normal rounded py-[2px] px-1 text-[#77818A]">
                      Public alpha
                    </p>
                  </Link>
                  <Link
                    href={'https://agents.fileverse.io/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex items-center p-2 hover:bg-[#F2F4F5] rounded text-base font-medium gap-1"
                  >
                    AI Agent
                    <p className="bg-[#E8EBEC] text-[10px] font-normal rounded py-[2px] px-1 text-[#77818A]">
                      SDK
                    </p>
                  </Link>
                  <Link
                    href={'/heartbit'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex items-center p-2 hover:bg-[#F2F4F5] rounded text-base font-medium gap-1"
                  >
                    HeartBit
                    <p className="bg-[#E8EBEC] text-[10px] font-normal rounded py-[2px] px-1 text-[#77818A]">
                      SDK
                    </p>
                  </Link>
                </div>
              </Slide>
            </div>
          )}
        </div>
        <Slide direction="left" in={sideMenu}>
          <div
            ref={ref}
            className="h-[100vh] shadow-lg top-0 right-0 absolute bg-white p-4  w-[60vw]"
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
            <div className="font-semibold mt-6 flex flex-col gap-[6px]">
              <Link
                href={'https://ddocs.new'}
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <div
                  onClick={() => {
                    if (html) html.classList.remove('overflow-y-hidden');
                    setSideMenu(false);
                  }}
                >
                  dDocs
                </div>
              </Link>
              <Link href={'/portal'} passHref>
                <div
                  className="flex gap-1 items-center"
                  onClick={() => {
                    if (html) html.classList.remove('overflow-y-hidden');
                    setSideMenu(false);
                  }}
                >
                  Portal
                  <p className="bg-[#E8EBEC] text-[10px] font-normal rounded py-[2px] px-1 text-[#77818A] h-fit">
                    Private beta
                  </p>
                </div>
              </Link>
              <Link
                href={'https://beta.fileverse.io'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (html) html.classList.remove('overflow-y-hidden');
                  setSideMenu(false);
                }}
              >
                {' '}
                <div
                  className="flex gap-1 items-center"
                  onClick={() => {
                    if (html) html.classList.remove('overflow-y-hidden');
                    setSideMenu(false);
                  }}
                >
                  Solo
                  <p className="bg-[#E8EBEC] text-[10px] font-normal rounded py-[2px] px-1 text-[#77818A] h-fit">
                    Public alpha
                  </p>
                </div>
              </Link>
              <Link
                href={'https://agents.fileverse.io/'}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (html) html.classList.remove('overflow-y-hidden');
                  setSideMenu(false);
                }}
              >
                <div
                  className="flex gap-1 items-center"
                  onClick={() => {
                    if (html) html.classList.remove('overflow-y-hidden');
                    setSideMenu(false);
                  }}
                >
                  AI Agent
                  <p className="bg-[#E8EBEC] text-[10px] font-normal rounded py-[2px] px-1 text-[#77818A] h-fit">
                    SDK
                  </p>
                </div>
              </Link>
              <Link href={'/heartbit'} passHref>
                <div
                  className="flex gap-1 items-center"
                  onClick={() => {
                    if (html) html.classList.remove('overflow-y-hidden');
                    setSideMenu(false);
                  }}
                >
                  HeartBit
                  <p className="bg-[#E8EBEC] text-[10px] font-normal rounded py-[2px] px-1 text-[#77818A] h-fit">
                    SDK
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default HeadNav;
