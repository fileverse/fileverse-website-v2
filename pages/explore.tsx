import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import searchIcon from '../public/assets/searchIcon.svg';
import arrow from '../public/assets/arrow-up-right.svg';
import HeadSectionLayout from '../components/HeadSectionLayout';
import HeadNav from '../components/HeadNav';
import ContractCard from '../components/ContractCard';

import profile from '../public/assets/profilesvg.svg';
import cover from '../public/assets/cover.svg';
const ExplorePage = () => {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  const isMediaMax1260px = useMediaQuery('(max-width: 1262px)');
  const isMediaMax700px = useMediaQuery('(max-width: 700px)');
  const allPortal = [
    {
      name: 'Bug portal',
      description:
        'Breathe in. Breathe out. Follow our content for smooth visua breathing techniques. Send our GIF files to anyone that needs helbreathing . Visit us before your Google or Zoom calls. breathing',
      logo: profile.src,
      cover: cover.src,
      public_page: 'portal.fileverse.io',
      follows: '300',
      members: '2',
    },
    {
      name: 'Fileveser portal',
      description:
        'Breathe in. Breathe out. Follow our content for smooth visua breathing techniques. Send our GIF files to anyone that needs helbreathing . Visit us before your Google or Zoom calls. breathing',
      logo: profile.src,
      cover: cover.src,
      public_page: 'portal.fileverse.io',
      follows: '300',
      members: '2',
    },
    {
      name: 'Fileveser portal',
      description:
        'Breathe in. Breathe out. Follow our content for smooth visua breathing techniques. Send our GIF files to anyone that needs helbreathing . Visit us before your Google or Zoom calls. breathing',
      logo: profile.src,
      cover: cover.src,
      public_page: 'portal.fileverse.io',
      follows: '300',
      members: '2',
    },
    {
      name: 'Fileveser portal',
      description:
        'Breathe in. Breathe out. Follow our content for smooth visua breathing techniques. Send our GIF files to anyone that needs helbreathing . Visit us before your Google or Zoom calls. breathing',
      logo: profile.src,
      cover: cover.src,
      public_page: 'portal.fileverse.io',
      follows: '300',
      members: '2',
    },
    {
      name: 'Fileveser portal',
      description:
        'Breathe in. Breathe out. Follow our content for smooth visua breathing techniques. Send our GIF files to anyone that needs helbreathing . Visit us before your Google or Zoom calls. breathing',
      logo: profile.src,
      cover: cover.src,
      public_page: 'portal.fileverse.io',
      follows: '300',
      members: '2',
    },
    {
      name: 'Fileveser portal',
      description:
        'Breathe in. Breathe out. Follow our content for smooth visua breathing techniques. Send our GIF files to anyone that needs helbreathing . Visit us before your Google or Zoom calls. breathing',
      logo: profile.src,
      cover: cover.src,
      public_page: 'portal.fileverse.io',
      follows: '300',
      members: '2',
    },
    {
      name: 'Fileveser portal',
      description:
        'Breathe in. Breathe out. Follow our content for smooth visua breathing techniques. Send our GIF files to anyone that needs helbreathing . Visit us before your Google or Zoom calls. breathing',
      logo: profile.src,
      cover: cover.src,
      public_page: 'portal.fileverse.io',
      follows: '300',
      members: '2',
    },
    {
      name: 'Fileveser portal',
      description:
        'Breathe in. Breathe out. Follow our content for smooth visua breathing techniques. Send our GIF files to anyone that needs helbreathing . Visit us before your Google or Zoom calls. breathing',
      logo: profile.src,
      cover: cover.src,
      public_page: 'portal.fileverse.io',
      follows: '300',
      members: '2',
    },
    {
      name: 'Fileveser portal',
      description:
        'Breathe in. Breathe out. Follow our content for smooth visua breathing techniques. Send our GIF files to anyone that needs helbreathing . Visit us before your Google or Zoom calls. breathing',
      logo: profile.src,
      cover: cover.src,
      public_page: 'portal.fileverse.io',
      follows: '300',
      members: '2',
    },
    {
      name: 'Fileveser portal',
      description:
        'Breathe in. Breathe out. Follow our content for smooth visua breathing techniques. Send our GIF files to anyone that needs helbreathing . Visit us before your Google or Zoom calls. breathing',
      logo: profile.src,
      cover: cover.src,
      public_page: 'portal.fileverse.io',
      follows: '300',
      members: '2',
    },
  ];
  const [portalList, setPortalList] = useState(allPortal);
  const getPortal = (query: string) => {
    if (query === '') {
      setPortalList(allPortal);
    } else {
      const searchPortal = allPortal.filter((portal) => {
        return (
          portal.name.toLowerCase().includes(query.toLowerCase()) ||
          portal.description.toLowerCase().includes(query.toLowerCase())
        );
      });
      setPortalList(searchPortal);
    }
  };
  return (
    <>
      <HeadNav defaultColor={true} explorePage={true} />
      <HeadSectionLayout defaultBackground={true} noFooter={true}>
        <div className="flex flex-col w-full h-full justify-center items-center">
          {/* <div className="w-[95%] h-[24vh] bg-yellow  flex flex-col items-center justify-center  rounded-xl">
            <div className="w-[32%] text-center text-[#000000] text-4xl font-semibold">
              Discover Portals to collaborate and create awesome stuff
            </div>
            <div className="w-[32%] text-center text-base text-[#333333]">
              Share and collaborate with your tribe around the world with
              security Your data is safe and E2E Encrypted
            </div>
          </div> */}
          <div className="flex flex-col w-[97%] h-[88vh] justify-between items-center py-4 mt-6">
            <div className="h-[10%] flex w-full items-center justify-between mb-4">
              <div
                className={`font-semibold ${
                  isMediaMax700px ? 'text-xl' : 'text-2xl'
                } text-[#000000]`}
              >
                Explore popular portals
              </div>
              <div
                className={`w-[50%] flex ${
                  isMediaMax1025px ? 'justify-end' : 'justify-between'
                }`}
              >
                {!isMediaMax1025px && (
                  <div
                    className="w-[70%] mr-12 flex px-6 items-center	 border rounded-xl h-[3rem] hover:outline 
           outline-black"
                  >
                    <img
                      src={searchIcon.src}
                      className="w-[18px] h-[18px] ml-2 mt-1"
                    />
                    <input
                      className="text-lg px-4 w-full h-full outline-none text-[#777777]"
                      type="text"
                      placeholder={'Search portal here...'}
                      onChange={(e) => {
                        getPortal(e.target.value);
                      }}
                    />
                  </div>
                )}
                <div
                  className={`  flex items-center justify-center
                     rounded-xl	h-[3rem] bg-[#000000]
                   	 text-[#ffffff]  ${
                       isMediaMax700px
                         ? 'w-[150px] text-xs px-1'
                         : 'w-[290px] text-lg'
                     }`}
                >
                  <>Create your portal</>
                  <img src={arrow.src} className="w-[20px] h-[20px] ml-2" />
                </div>
              </div>
            </div>
            <div className="h-[86%] w-full ">
              <div
                className={`h-full w-full flex flex-wrap items-start overflow-y-scroll no-scrollbar gap-4 ${
                  isMediaMax1260px ? 'justify-evenly' : ''
                } `}
              >
                {portalList.map((portal, index) => {
                  return (
                    <ContractCard
                      name={portal.name}
                      logo={portal.logo}
                      cover={portal.cover}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </HeadSectionLayout>
    </>
  );
};

export default ExplorePage;
