import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css'
          rel='stylesheet'
          type='text/css'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap'
          rel='stylesheet' />
        <link
          href='https://fonts.googleapis.com/css2?family=Tinos:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap'
          rel='stylesheet' />
      </Head>
      <body id='app'>
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}
