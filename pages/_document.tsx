import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config',"${process.env.NEXT_PUBLIC_GA_MID}", {
              page_path: window.location.pathname,
              });
          `,
          }}
        />
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
