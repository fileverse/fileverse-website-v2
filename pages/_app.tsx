import '../styles/globals.css';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Fileverse | File sharing for Web3 Communities"
        description="Share file with any blockchain address!"
        openGraph={{
          url: 'https://beta.fileverse.io',
          title: 'Fileverse',
          description: 'File sharing between blockchain addresses',
          locale: 'en',
          site_name: 'Fileverse',
          images: [
            {
              url: 'https://s3.fileverse.io/assets/fileversePreview.png',
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
