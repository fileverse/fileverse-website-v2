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
import clsx from 'clsx';
import { NextSeo } from 'next-seo';
import Confetti from 'react-confetti';
import { SiweMessage } from 'siwe';
import { keccak256, toBytes } from 'viem';
import { useSignMessage, useConnect, useAccount } from 'wagmi';
import { injected } from 'wagmi/connectors';

import BodyWrapper from '../components/BodyWrapper';
import HeadSectionLayout from '../components/HeadSectionLayout';
import PrimaryButton from '../components/PrimaryButton';
import code from '../public/assets/code.png';
import downArrow from '../public/assets/downArrowGray.svg';
import erospixie from '../public/assets/erospixel.png';
import heart50 from '../public/assets/heart50.png';
import metric from '../public/assets/metric.png';

const HeartBitWithProvider = () => {
  const heartRef = useRef<InternalHandlerRef | null>(null);
  const { connectAsync } = useConnect();
  const { signMessageAsync } = useSignMessage();
  const [startTime, setStartTime] = useState<number | null>(null);
  const [totalMints, setTotalMints] = useState('0');
  const { mintHeartBit, getTotalHeartBitByHash } = useHeartBit();
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');
  const [isLoading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const onMouseDown = () => {
    setStartTime(Math.floor(Date.now() / 1000));
  };

  const { address } = useAccount();
  const scale = isMediaMax1025px ? 20 : 25;
  const canvasWidth = isMediaMax1025px ? 324 : 525;
  const canvasHeight = isMediaMax1025px ? 387 : 490;
  const fetchTotalMints = useCallback(async () => {
    if (!getTotalHeartBitByHash) return;
    const hash = keccak256(toBytes(window?.location?.href));
    const totalSupply = await getTotalHeartBitByHash({ hash });

    setTotalMints(totalSupply.toString());
  }, [getTotalHeartBitByHash]);

  useEffect(() => {
    fetchTotalMints();
    const interval = setInterval(() => {
      fetchTotalMints();
    }, 10000);

    return () => clearInterval(interval);
  }, [fetchTotalMints]);

  const onMouseUp = async () => {
    if (!startTime || isLoading) return;
    try {
      setLoading(true);
      const endTime = Math.floor(Date.now() / 1000);
      const accounts: any[] = [];
      if (!address) {
        const connectData = await connectAsync({
          connector: injected(),
        });
        connectData?.accounts?.forEach((account) => {
          accounts.push(account);
        });
      }
      const messageObject = new SiweMessage({
        domain: window.location.host,
        address: address || accounts[0],
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-[10px]">
      <HeartBitUI
        ref={heartRef}
        disableBeatingAnimation={true}
        scale={scale}
        defaultFillPos={4}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        isDisabled={isLoading}
      />
      <Confetti
        width={canvasWidth}
        height={canvasHeight}
        numberOfPieces={showConfetti ? 50 : 0}
        recycle={false}
        onConfettiComplete={(confetti) => {
          setShowConfetti(false);
          confetti?.reset();
        }}
        confettiSource={{
          w: 10,
          h: 10,
          x: canvasWidth / 2,
          y: canvasHeight / 3,
        }}
      />
      <p
        className={clsx(
          isMediaMax1025px ? 'text-2xl' : 'text-4xl',
          'font-bold'
        )}
      >
        {totalMints}
      </p>
      <p
        className={clsx(
          isMediaMax1025px ? 'text-lg' : 'text-2xl',
          'font-bold text-[#000000'
        )}
      >
        HeartBits Minted
      </p>
    </div>
  );
};

export default function HeartBit() {
  const isMediaMax1025px = useMediaQuery('(max-width: 1025px)');

  const coreOptions = useMemo(() => {
    return {
      chain: '0xaa36a7' as SupportedChain,
    };
  }, []);

  return (
    <BodyWrapper heartbitPage={true}>
      <>
        <NextSeo
          title="Fileverse | Peer to Peer File Sharing dApp"
          description="Onchain peer-to-peer file sharing and Web3 collaboration. Share files with end-to-end encryption & token gating; publish decentralized websites; create decentralized Excalidraw whiteboards; and more!"
          openGraph={{
            url: 'https://fileverse.io/hearbit',
            title: 'Fileverse',
            description: 'File sharing between blockchain addresses',
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
                isMediaMax1025px ? 'mt-10' : 'mt-5',
                'w-full flex flex-col justify-between items-center gap-2'
              )}
            >
              <p
                className={clsx(
                  isMediaMax1025px ? 'text-2xl text-center' : 'text-[3rem]',
                  'font-bold'
                )}
              >
                HeartBit SDK - New Onchain Metric
              </p>
              <p
                className={clsx(
                  isMediaMax1025px ? 'text-base w-[90%]' : 'text-[1.25rem]',
                  'text-center'
                )}
              >
                Deploy onchain likes to your dApp with this free and easy to
                plugin SDK.
              </p>
              <div
                className={clsx(
                  isMediaMax1025px ? 'p-7' : 'py-9 px-24',
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
                'bg-[#FFF9CE] rounded-2xl flex flex-col justify-center items-center gap-4 shadow-lg'
              )}
            >
              <p
                className={clsx(
                  isMediaMax1025px ? 'text-lg' : 'text-2xl',
                  'font-bold'
                )}
              >
                A new engagement Metric
              </p>
              <p className={'text-base text-center w-[80%]'}>
                Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum
                Lorem impsum Lorem impsum Lorem impsum Lorem impsu
              </p>
              <img src={metric.src} alt="metric" className="w-[50px]" />
            </div>
            <div
              className={clsx(
                isMediaMax1025px ? 'py-8' : 'w-[45%] h-[350px]',
                'bg-[#FFF9CE] rounded-2xl flex flex-col justify-center items-center gap-4 shadow-lg'
              )}
            >
              <p
                className={clsx(
                  isMediaMax1025px ? 'text-lg' : 'text-2xl',
                  'font-bold'
                )}
              >
                A new engagement Metric
              </p>
              <p className={'text-base text-center w-[80%]'}>
                Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum
                Lorem impsum Lorem impsum Lorem impsum Lorem impsu
              </p>
              <img src={code.src} alt="metric" className="w-[50px]" />
            </div>
          </div>
          <div
            id="getstarted"
            className={`flex flex-col justify-between items-center gap-20 mt-20`}
          >
            <PrimaryButton
              title={'Get Started'}
              linkTo={'https://twitter.com/fileverse'}
              openNewTab={true}
            />
            <div
              className={clsx(
                isMediaMax1025px ? 'gap-4 text-lg flex-col' : 'gap-14 text-2xl',
                'w-full flex justify-center items-start font-bold mb-20'
              )}
            >
              <div className="flex gap-3 items-center">
                <img
                  src={heart50.src}
                  alt="heart50"
                  className={clsx(
                    isMediaMax1025px ? 'w-[24px] h-[24px]' : 'w-[36px] h-[36px]'
                  )}
                />
                <p>Free</p>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src={heart50.src}
                  alt="heart50"
                  className={clsx(
                    isMediaMax1025px ? 'w-[24px] h-[24px]' : 'w-[36px] h-[36px]'
                  )}
                />
                <p>Open-Source</p>
              </div>
              <div className="flex gap-3 items-center">
                <img
                  src={heart50.src}
                  alt="heart50"
                  className={clsx(
                    isMediaMax1025px ? 'w-[24px] h-[24px]' : 'w-[36px] h-[36px]'
                  )}
                />
                <p>Instant</p>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              isMediaMax1025px ? 'p-4 gap-2' : 'w-[80%] text-[32px] gap-8 py-8',
              'text-center bg-[#FFF9CE] rounded-2xl flex flex-col justify-center items-center  shadow-xl'
            )}
          >
            <img
              src={erospixie.src}
              alt="Erospixie"
              className={clsx(isMediaMax1025px ? 'w-[40%]' : 'w-[195px]')}
            />
            <p>Bring onchain love to your dApp for Valentine’s Day!</p>
            <p className={clsx(isMediaMax1025px ? 'px-2' : 'w-[85%] px-8')}>
              When you click on a Like button it’s all air; fugazi; dairy dust.
              An ephemeral entry an a centralized database...
            </p>
            <p className={clsx(isMediaMax1025px ? 'px-2' : 'w-[85%] px-8')}>
              When someone use HeartBit, instead of air or a minting fee, they
              gift their time: a public measure of appreciation for onchain
              content
            </p>
          </div>
        </div>
      </>
    </BodyWrapper>
  );
}
