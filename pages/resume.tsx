import type { NextPage } from 'next';
import Head from 'next/head';
import { Curriculum } from '../components/cv/curriculum';

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carlos&apos;s Resume</title>
        <meta name='description' content='portfolio with Carlos Campos profile' />
        <link rel='icon' href='../../profileLogo.svg' />
      </Head>
      <>
        <Curriculum></Curriculum>
      </>
    </>
  );
};

export default Resume;
