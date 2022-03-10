import React from 'react';
import { AppContext } from '../redux/context';

import { Footer } from './Footer';
import { Header } from './Header';

interface Props {
  children?: React.ReactNode;
}

export const AppMain = (props: Props) => {
  const context = React.useContext(AppContext);
  const appMode = context.appMode;

  return (
    <section className={`container ${appMode}`}>
      <Header />
      {/*children*/}
      <main className='main'>{props.children}</main>
      <Footer />
    </section>
  );
};
