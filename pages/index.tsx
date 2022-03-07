import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BigSwitch from '../components/bigSwitch/bigSwitch';
import { Main } from '../components/Main';
import st from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carlos&apos;s Profile</title>
        <meta name='description' content='porfolio with Carlos Campos profile' />
        <link rel='icon' href='../../profileLogo.svg' />
      </Head>
      <Main>
        <BigSwitch />
      </Main>
    </>
  );
};

export default Home;
