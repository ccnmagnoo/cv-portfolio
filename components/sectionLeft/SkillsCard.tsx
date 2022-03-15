import React from 'react';
import { AppContext } from '../../redux/context';
import { Meter } from '../meter/Meter';
import { TechCard } from './TechCard';

export const SkillsCard = () => {
  const context = React.useContext(AppContext);
  const skillList = context.skills;
  return (
    <section className='skillCard'>
      <TechCard filter={'developer'} techList={skillList}>
        <h6>Relative skill set</h6>
      </TechCard>
      <TechCard filter={'front-end'} techList={skillList}>
        <h6>front-end</h6>
      </TechCard>
      <TechCard filter={'back-end'} techList={skillList}>
        <h6>back-end</h6>
      </TechCard>
      <TechCard filter={'data-analytics'} techList={skillList}>
        <h6>Data Analytics</h6>
      </TechCard>
    </section>
  );
};
