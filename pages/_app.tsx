import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppMain } from '../components/AppMain';
import Provider from '../redux/context';

/** NextJs Page Transition example
 * https://github.com/ivandotv/nextjs-page-transitions/blob/main/pages/_app.tsx
 * */

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Provider>
      <AppMain appProps={{ Component, pageProps, router }}>
        <Component {...pageProps} />
      </AppMain>
    </Provider>
  );
}

export default MyApp;
