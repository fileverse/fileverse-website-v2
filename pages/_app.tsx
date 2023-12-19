import '../styles/globals.css';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
