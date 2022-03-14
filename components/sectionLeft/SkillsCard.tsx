import React from 'react';
import { AppContext } from '../../redux/context';
import st from '../../styles/Skills.module.css';
import { Meter } from '../meter/Meter';

export const SkillsCard = () => {
  const context = React.useContext(AppContext);
  const skillList = context.skills;
  return (
    <section className='skillCard'>
      <h5>front-end</h5>
      <ul>
        {skillList?.slice(undefined, 9).map((element, index) => {
          return <Meter key={index} element={element} />;
        })}
      </ul>
      <h5>back-end</h5>
      <ul>
        {skillList?.slice(9, undefined).map((element, index) => {
          return <Meter key={index} element={element} />;
        })}
      </ul>
    </section>
  );
};
