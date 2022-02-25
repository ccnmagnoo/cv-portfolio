import { NextComponentType } from 'next';
import React from 'react';
import st from '../../styles/Home.module.css';
import { Card } from './card';
import Lever from './lever';

const BigSwitch: NextComponentType = () => {
  return (
    <div className={st.bigSwitch}>
      <Lever />
      Big Switch
      <Card />
    </div>
  );
};

export default BigSwitch;
