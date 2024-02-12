import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { WagmiProvider } from 'wagmi';

import { rainbowkitConfig } from '../utils/wagmi-config';

import '@rainbow-me/rainbowkit/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <NextSeo
        title="Fileverse | Peer to Peer File Sharing dApp"
        description="Onchain peer-to-peer file sharing and Web3 collaboration. Share files with end-to-end encryption & token gating; publish decentralized websites; create decentralized Excalidraw whiteboards; and more!"
        openGraph={{
          url: 'https://beta.fileverse.io',
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
