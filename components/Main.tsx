import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import st from '../styles/Home.module.css';

interface Props {
  children?: React.ReactNode;
}

export const Main = (props: Props) => {
  return (
    <section className={`${st.container} ${st.dark}`}>
      <Header />
      <main className={st.main}>{props.children}</main>
      <Footer />
    </section>
  );
};
