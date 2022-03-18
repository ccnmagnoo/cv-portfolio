import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppMain } from '../components/AppMain';
import Provider from '../redux/context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <AppMain>
        <Component {...pageProps} />
      </AppMain>
    </Provider>
  );
}

export default MyApp;
