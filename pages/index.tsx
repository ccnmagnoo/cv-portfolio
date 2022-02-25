import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BigSwitch from '../components/bigSwitch/BigSwitch';
import st from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <section className={st.container}>
      <Head>
        <title>Carlos&apos;s Profile</title>
        <meta name='description' content='porfolio with Carlos Campos profile' />
        <link
          rel='icon'
          href='https://api.iconify.design/mdi/chart-donut-variant.svg?color=white'
        />
      </Head>

      <header className={st.header}>header</header>

      <main className={st.main}>
        <BigSwitch />
      </main>

      <footer className={st.footer}>footer</footer>
    </section>
  );
};

export default Home;
