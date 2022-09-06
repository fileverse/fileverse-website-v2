import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  return (
    <Html lang="en" className=" overflow-x-hidden">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
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
        <Script
          src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
          strategy="beforeInteractive"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
