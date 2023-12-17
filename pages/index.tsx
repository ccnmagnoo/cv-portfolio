import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BigSwitch from '../components/bigSwitch/bigSwitch';
import { SkillsCard } from '../components/sectionLeft/SkillsCard';
import { InfoPanel } from '../components/sectionRight/InfoPanel';

const Home: NextPage = () => {
  return (
    <>
      {/* <Head>
        <title>Carlos&apos;s Profile</title>
        <meta name='description' content='portfolio with Carlos Campos profile' />
        <link rel='icon' href='../../profileLogo.svg' />
      </Head> */}
      <>
        <BigSwitch />
        <SkillsCard />
        <InfoPanel />
      </>
    </>
  );
};

export default Home;
