/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Interest, InterestLevel, Skill, SkillLevel } from '../../model/Tech';
import { MeterBar } from './MeterBar';
import { MeterContainer } from './MeterContainer';
import moment from 'moment';

interface Props {
  element: Skill | Interest | undefined;
  position?: 'left' | 'right';
}

export const Meter = (props: Partial<Props>) => {
  console.log('element recieve in meter comp:',typeof props.element);

  /**@function meter return Bar jsx */
  const getMeterBar = (m: Skill | Interest | undefined) => {
    if(m?.constructor.name === 'Skill'){
      const e = m as Skill;
        return (
          <MeterBar
            min={1}
            max={SkillLevel.expert}
            value={e?.level}
            tag={e?.tech}
            logo={e.logo}
            update={e.update}
            position={props.position}
          />
        ); 
    };

    if(m?.constructor.name === 'Interest'){
      const e = m as Interest;
        return (
          <MeterBar
            min={1}
            max={InterestLevel.extreme}
            value={e?.interest}
            tag={e?.tech}
            logo={e.logo}
            position={props.position}
          />
        ); 
    };
    return undefined
  };

  /**
   * @function getUpdate
   * @param m {Skill|Insteres|undefined}
   * @return update {Date}
   */
  const getUpdate = (m: typeof props.element) => {
    if (m?.constructor.name === 'Skill') {
      const e = m as Skill;
      return e.update?.toDateString();
    } else {
      return undefined;
    }
  };
  const comments = (e:Skill|Interest|undefined)=>{
      if (e?.constructor.name === 'Skill') {
        const skill = e as Skill;
        return (
          <article className='commentDialog'>
            <h6>last update</h6>
            <p>{moment(skill.update).startOf('day').fromNow()}</p>
            <p>{skill.comment}</p>
          </article>
        );
      } 
      return undefined
  };

  return (
  
      <MeterContainer position={props.position}>
        {/*tech headers 🎩*/}
        <img src={props.element?.logo} alt='' /> {props.element?.tech}
        {/*colored meter bar 📶 */}
        {getMeterBar(props.element)}
        <div className="meterBox">
          {getMeterBar(props.element)}
        </div>
        {comments(props.element)}
      </MeterContainer>

  );
};
