import { Html, Head, Main, NextScript } from 'next/document';
import Provider from '../redux/context';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Raleway&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Provider>
          <Main />
        </Provider>
        <NextScript />
      </body>
    </Html>
  );
}
