import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import st from '../styles/Home.module.css';

interface Props {
  children?: React.ReactNode;
}

export const AppMain = (props: Props) => {
  return (
    <section className={`${st.container} ${st.dark}`}>
      <Header />
      {/*children*/}
      <main className={st.main}>{props.children}</main>
      <Footer />
    </section>
  );
};
