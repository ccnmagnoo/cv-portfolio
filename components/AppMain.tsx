import React from 'react';
import { AppContext } from '../redux/context';
import type { AppProps } from 'next/app';
import { Footer } from './Footer';
import { Header } from './Header';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { animations } from '../lib/animations';

interface Props {
  children?: React.ReactNode;
  appProps: AppProps;
}

export const AppMain = (props: Props) => {
  //app state
  const context = React.useContext(AppContext);
  //next Pages props
  const { router } = props.appProps;
  //animation set
  const startIndex = 2;
  const animation = animations[startIndex];
  //animation forward<>backward
  const [exitBefore, setExitBefore] = React.useState(false);

  return (
    <section className={`container ${context.appMode}`}>
      <Header />
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={!exitBefore}>
          <m.div
            key={router.route.concat(animation.name)}
            initial='initial'
            animate='animate'
            exit='exit'
            variants={animation.variants}
            transition={animation.transition}
          >
            {/*children*/}
            <main className='main'>{props.children}</main>
          </m.div>
        </AnimatePresence>
      </LazyMotion>
      <Footer />
    </section>
  );
};
