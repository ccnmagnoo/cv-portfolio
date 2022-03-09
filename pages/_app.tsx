import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppMain } from '../components/AppMain';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppMain>
      <Component {...pageProps} />
    </AppMain>
  );
}

export default MyApp;
