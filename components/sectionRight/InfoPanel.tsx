import React from 'react';
import { BaseInfo } from './BaseInfo';
import { ContactInfo } from './ContactInfo';
import { InterestPanel } from './InterestPanel';

export const InfoPanel = () => {
  return (
    <section className='rightPanel'>
      <BaseInfo />
      <ContactInfo />
      <InterestPanel />
    </section>
  );
};
