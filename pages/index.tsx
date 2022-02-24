import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
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

      <header className={st.header}>
        <div>button01</div>
        <div>button02</div>
        <div>button03</div>
      </header>

      <main className={st.main}>main</main>

      <footer className={st.footer}>footer</footer>
    </section>
  );
};

export default Home;
