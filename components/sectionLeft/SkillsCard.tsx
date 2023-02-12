import React from 'react';
import { AppContext } from '../../redux/context';
import { TechCard } from './TechCard';

export const SkillsCard = () => {
  const context = React.useContext(AppContext);
  console.log("number of skills passed",context?.skills?.lenght);
  const skillList = context.skills;
  return (
    <section className='leftPanel'>
      <TechCard filter='developer' techList={skillList} position='left'>
        <h6>Relative skill set</h6>
      </TechCard>
      <TechCard filter='front-end' techList={skillList} position='left'>
        <h6>Front-end</h6>
      </TechCard>
      <TechCard filter='back-end' techList={skillList} position='left'>
        <h6>Back-end</h6>
      </TechCard>
      <TechCard filter='data-analytics' techList={skillList} position='left'>
        <h6>Data Analytics</h6>
      </TechCard>
    </section>
  );
};
