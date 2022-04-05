import React from 'react';
import st from '../../styles/InfoPanel.module.css';
import { BaseInfo } from './BaseInfo';
import { ContactInfo } from './ContactInfo';
import { InterestPanel } from './InterestPanel';

export const InfoPanel = () => {
  return (
    <section className={st.panel}>
      <BaseInfo />
      <ContactInfo />
      <InterestPanel />
    </section>
  );
};
