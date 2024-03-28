import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { WagmiProvider } from 'wagmi';

import { rainbowkitConfig } from '../utils/wagmi-config';

import '@rainbow-me/rainbowkit/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <NextSeo
        title="Fileverse | Peer to Peer File Sharing | Onchain Collaboration"
        description="Your onchain collaboration space for peer-to-peer file sharing; decentralized website publishing; crypto whiteboards & documents; token gating; and more!"
        openGraph={{
          url: 'https://fileverse.io/',
          title: 'Fileverse',
          description: 'File sharing between blockchain addresses',
          locale: 'en',
          site_name: 'Fileverse',
          images: [
            {
              url: 'https://beta.fileverse.io/assets/Banner1.png',
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
      <Head>
        <link rel="canonical" href="https://fileverse.io/" />
      </Head>
      <WagmiProvider config={rainbowkitConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

export default MyApp;
