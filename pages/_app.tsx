import '../styles/globals.css';
import { NextSeo } from 'next-seo';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Fileverse</title>
      <meta property="og:title" content="Fileverse" />
      <meta
        property="og:description"
        content="File sharing between blockchain addresses"
      />
      <meta
        property="og:image"
        content="https://s3.fileverse.io/assets/fileversePreview.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Fileverseio" />
      <meta name="twitter:title" content="Fileverse" />
      <meta
        name="twitter:description"
        content="File sharing between blockchain addresses"
      />
      <meta
        property="twitter:image"
        content="https://s3.fileverse.io/assets/fileversePreview.png"
      />

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
              url: '/assets/fileversePreview.png',
              width: 800,
              height: 420,
              alt: 'Filverse',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
