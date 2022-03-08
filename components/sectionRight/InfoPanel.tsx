import React from 'react';
import st from '../../styles/InfoPanel.module.css';
import { BaseInfo } from './BaseInfo';
import { ContactInfo } from './ContactInfo';

export const InfoPanel = () => {
  return (
    <section className={st.panel}>
      <div>Info InfoPanel</div>
      <BaseInfo />
      <ContactInfo />
    </section>
  );
};
