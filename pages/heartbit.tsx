/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  type SupportedChain,
  HeartBitProvider,
  HeartBitUI,
  useHeartBit,
  InternalHandlerRef,
} from '@fileverse/heartbit-react';
import { useMediaQuery } from '@mui/material';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import clsx from 'clsx';
import { NextSeo } from 'next-seo';
import Confetti from 'react-confetti';
import { SiweMessage } from 'siwe';
import { keccak256, toBytes } from 'viem';
import { useSignMessage, useAccount } from 'wagmi';

import BodyWrapper from '../components/BodyWrapper';
import HeadSectionLayout from '../components/HeadSectionLayout';
import PrimaryButton from '../components/PrimaryButton';
import code from '../public/assets/code.png';
import downArrow from '../public/assets/downArrowGray.svg';
import erospixie from '../public/assets/erospixel.png';
import heart50 from '../public/assets/heart50.png';
import metric from '../public/assets/metric.png';
import 'react-toastify/dist/ReactToastify.css';
import { CORE_CHAIN_ID } from '../utils';

const HeartBitWithProvider = () => {
  const heartRef = useRef<InternalHandlerRef | null>(null);

  const { address } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  const { mintHeartBit, getTotalHeartBitByHash } = useHeartBit();
  const { openConnectModal, connectModalOpen } = useConnectModal();

  const [startTime, setStartTime] = useState<number | null>(null);
  const [totalMints, setTotalMints] = useState('0');
  const [isLoading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [minted, setMinted] = useState<boolean>(false);

  const openModal = () => {
    if (typeof openConnectModal === 'function') openConnectModal();
  };

  // const notify = () =>
  //   toast.error('Something went wrong, Please try again.', {
  //     position: 'bottom-left',
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: 'light',
  //   });

  const onMouseUp = async () => {
    if (!address) openModal();
    setMinted(true);
  };

  const onMouseDown = () => {
    setStartTime(Math.floor(Date.now() / 1000));
  };

  const mintHeart = async () => {
    if (!startTime) return;
    try {
      setLoading(true);
      const endTime = Math.floor(Date.now() / 1000);
      const messageObject = new SiweMessage({
        domain: window.location.host,
        address: address as string,
        statement: `Thank you for liking this page!`,
        uri: window.location.origin,
        version: '1',
      });

      const message = messageObject.prepareMessage();
      const signature = await signMessageAsync({
        message,
      });
      await mintHeartBit({
        startTime,
        endTime,
        hash: keccak256(toBytes(window?.location?.href)),
        message, // raw message that was signed
        signature, // signed message
      });
      setShowConfetti(true);
    } catch (err) {
      heartRef.current?.onReset();
      // notify();
    } finally {
      setLoading(false);
      setMinted(false);
    }
  };

  const formatMint = (input: number): string => {
    if (input < 1000) return input.toString();
    if (input < 10000)
      return `${input.toString().slice(0, 1)},${input.toString().slice(1)}`;
    if (input < 1000000) {
      if (input % 1000 === 0) return `${input / 1000}K`;
      return `${(input / 1000).toFixed(1)}K`;
    }
    if (input % 1000000 === 0) return `${input / 1000000}M`;
    return `${(input / 1000000).toFixed(1)}M`;
  };

  const scale = isMediaMax1025px ? 18 : 23;
  const canvasWidth = isMediaMax1025px ? 275 : 525;
  const canvasHeight = isMediaMax1025px ? 387 : 490;
  const xDividingFactor = isMediaMax1025px ? 1.8 : 2.2;

  const fetchTotalMints = useCallback(async () => {
    if (!getTotalHeartBitByHash) return;
    const hash = keccak256(toBytes(window?.location?.href));
    const totalSupply = await getTotalHeartBitByHash({ hash });

    setTotalMints(totalSupply.toString());
  }, [getTotalHeartBitByHash]);

  useEffect(() => {
    if (connectModalOpen) setLoading(true);
    else setLoading(false);
  }, [connectModalOpen]);

  useEffect(() => {
    fetchTotalMints();
    const interval = setInterval(() => {
      fetchTotalMints();
    }, 10000);

    return () => clearInterval(interval);
  }, [fetchTotalMints]);

  useEffect(() => {
    if (address && minted) mintHeart();
  }, [address, minted]);

  return (
    <div className="flex flex-col items-center cursor-pointer">
      <p
        className={clsx(
          'absolute flex justify-center items-center font-bold w-full text-center select-none',
          isMediaMax1025px ? 'mt-8 p-9' : 'mt-20 text-[2rem]'
        )}
      >
        Stay Clicked!
      </p>
      <HeartBitUI
        ref={heartRef}
        scale={scale}
        defaultFillPos={4}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        isDisabled={isLoading}
        fillInterval={500}
        disableBeatingAnimation={false}
      />
      <Confetti
        width={canvasWidth}
        height={canvasHeight}
        numberOfPieces={showConfetti ? 60 : 0}
        recycle={false}
        onConfettiComplete={(confetti) => {
          setShowConfetti(false);
          if (confetti && typeof confetti.reset === 'function')
            confetti.reset();
        }}
        confettiSource={{
          w: 10,
          h: 10,
          x: canvasWidth / xDividingFactor,
          y: canvasHeight / 3,
        }}
      />
      <p
        className={clsx(
          isMediaMax1025px ? 'text-2xl' : 'text-4xl',
          'font-bold mt-5'
        )}
      >
        {formatMint(Number(totalMints))}
      </p>
      <p
        className={clsx(
          isMediaMax1025px ? 'text-lg' : 'text-2xl',
          'font-bold text-[#000000] leading-4'
        )}
      >
        HeartBits Minted
      </p>
    </div>
  );
};

export default function HeartBit() {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  const isMediaMax390px = useMediaQuery('(max-width: 390px)');

  const coreOptions = useMemo(() => {
    return {
      chain: CORE_CHAIN_ID as SupportedChain,
    };
  }, []);

  return (
    <BodyWrapper heartbitPage={true}>
      <>
        <NextSeo
          title="HeartBit SDK | Onchain Like Metric"
          description="Onchain peer-to-peer file sharing and Web3 collaboration. Share files with end-to-end encryption & token gating; publish decentralized websites; create decentralized Excalidraw whiteboards; and more!"
          openGraph={{
            url: 'https://fileverse.io/hearbit',
            title: 'HeartBit SDK',
            description: `Onchain ‘like’ metric to measure engagement in time`,
            locale: 'en',
            site_name: 'Fileverse',
            images: [
              {
                url: 'https://s3.eu-west-2.amazonaws.com/assets.fileverse.io/web/public/heartbit-preview.png',
                width: 800,
                height: 420,
                alt: 'Fileverse',
              },
            ],
          }}
          twitter={{
            handle: '@fileverseio',
            site: '@fileverseio',
            cardType: 'summary_large_image',
          }}
        />
        <div
          className={
            'flex flex-col w-[80%] h-full justify-center items-center mx-auto'
          }
        >
          <HeadSectionLayout noFooter={true} defaultBackground={true}>
            <div
              id="hero"
              className={clsx(
                isMediaMax1025px ? 'mt-10' : 'mt-10',
                'w-full flex flex-col justify-between items-center gap-2'
              )}
            >
              <div className="w-full flex flex-col gap-4 justify-center items-center">
                <p
                  className={clsx(
                    isMediaMax1025px ? 'text-2xl text-center' : 'text-4xl',
                    'font-bold'
                  )}
                >
                  Your SDK for Onchain Love
                </p>
                <div className="w-full flex flex-col justify-center items-center">
                  <p
                    className={clsx(
                      isMediaMax1025px ? 'w-[90%]' : '',
                      'text-center'
                    )}
                  >
                    <span>
                      An open SDK to add onchain Likes & Minting to your dApp or
                      website.
                    </span>
                    {!isMediaMax1025px && <br />}{' '}
                    <span>
                      Let your users express themselves with onchain time-based
                      engagement!
                    </span>
                  </p>
                </div>
              </div>

              <div
                className={clsx(
                  isMediaMax1025px ? 'px-11 pt-11 pb-5' : 'pt-11 pb-7 px-24',
                  'border-[#FFF9CE] relative border-4 rounded-2xl shadow-xl flex flex-col justify-center items-center my-6'
                )}
              >
                <HeartBitProvider coreOptions={coreOptions}>
                  <HeartBitWithProvider />
                </HeartBitProvider>
              </div>
              <p
                className={clsx(
                  isMediaMax1025px ? 'text-xs' : 'text-2xl',
                  'font-bold text-[#000000] opacity-60'
                )}
              >
                Create Yours
              </p>
              <img
                src={downArrow.src}
                alt="Heart Bit"
                className="my-2 animate-bounce"
              />
            </div>
          </HeadSectionLayout>

          <div
            id="cards"
            className={clsx('w-full flex justify-between items-center', {
              'flex-col gap-8': isMediaMax1025px,
            })}
          >
            <div
              className={clsx(
                isMediaMax1025px ? 'py-8' : 'w-[45%] h-[350px]',
                'bg-[#FFF9CE] rounded-2xl flex flex-col justify-start items-center gap-4 shadow-lg'
              )}
            >
              <div className="h-[30%] flex items-end">
                <p className={clsx('font-bold text-2xl text-center px-8')}>
                  Onchain Engagement Analytics
                </p>
              </div>
              <div className="h-[30%] w-full flex items-start justify-center">
                <p className={'text-base text-center w-[80%]'}>
                  Each second spent clicking on the heart mints HeartBits
                  (ERC1155 tokens) containing the hash of the content. Now every
                  online/onchain content can have granular onchain analytics
                  showing levels of user engagement!
                </p>
              </div>

              <img src={metric.src} alt="metric" className="w-[50px]" />
            </div>
            <div
              className={clsx(
                isMediaMax1025px ? 'py-8' : 'w-[45%] h-[350px]',
                'bg-[#FFF9CE] rounded-2xl flex flex-col justify-start items-center gap-4 shadow-lg'
              )}
            >
              <div className="h-[30%] flex items-end">
                <p className={clsx('font-bold text-2xl text-center px-8')}>
                  Quick & Simple Integration
                </p>
              </div>
              <div className="h-[30%] w-full flex items-start justify-center">
                <p className={'text-base text-center w-[80%]'}>
                  A free and open SDK that can be plugged into your dApp/website
                  in less than 10 minutes, allowing you to easily deploy a
                  unique Mint + Like onchain experience.
                </p>
              </div>

              <img src={code.src} alt="code" className="w-[50px]" />
            </div>
          </div>
          <div
            id="getstarted"
            className={clsx(
              `flex flex-col justify-between items-center`,
              isMediaMax1025px ? 'gap-10 my-10' : 'gap-8 my-20'
            )}
          >
            <PrimaryButton
              title={'Get Started'}
              linkTo={'https://www.npmjs.com/package/@fileverse/heartbit-react'}
              openNewTab={true}
              width={'12rem'}
            />
            <div
              className={clsx(
                isMediaMax1025px ? 'gap-6 text-sm' : 'gap-14 text-lg w-full',
                isMediaMax390px ? 'w-[100vw] gap-0 justify-evenly' : '',
                'flex justify-center items-start font-bold'
              )}
            >
              <div className="flex gap-3 items-center">
                <img
                  src={heart50.src}
                  alt="heart"
                  className={clsx(
                    isMediaMax1025px ? 'w-[18px] h-[18px]' : 'w-[24px] h-[24px]'
                  )}
                />
                <p>Free</p>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src={heart50.src}
                  alt="heart"
                  className={clsx(
                    isMediaMax1025px ? 'w-[18px] h-[18px]' : 'w-[24px] h-[24px]'
                  )}
                />
                <p>Open-Source</p>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src={heart50.src}
                  alt="heart"
                  className={clsx(
                    isMediaMax1025px ? 'w-[18px] h-[18px]' : 'w-[24px] h-[24px]'
                  )}
                />
                <p>Instant</p>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              isMediaMax1025px
                ? 'p-4 gap-2 w-[100%] max-w-[440px]'
                : 'w-[60%] text-[24px] py-8',
              'text-center bg-[#FFF9CE] rounded-2xl flex flex-col justify-center items-center  shadow-xl'
            )}
          >
            <img
              src={erospixie.src}
              alt="Erospixie"
              className={clsx(
                isMediaMax1025px ? 'w-[125px]' : 'w-[150px] mb-4'
              )}
            />
            <p className={clsx(isMediaMax1025px ? 'px-2' : 'px-8')}>
              A traditional ‘like’ button is all air. Fugazi. Fairy dust. An
              ephemeral entry on a centralized database.
            </p>
            <p className={clsx(isMediaMax1025px ? 'px-2' : 'p-8')}>
              HeartBit allows you to gift your time, onchain. You can now create
              a provable and measurable token of appreciation for content,
              creators, dApps, and any website you love.
            </p>
            <p className={clsx(isMediaMax1025px ? 'px-2' : 'px-8 pb-8')}>
              A new way to interact onchain with content while creating a
              provable time-based footprint of engagement!
            </p>
          </div>
          {/* <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          /> */}
        </div>
      </>
    </BodyWrapper>
  );
}
