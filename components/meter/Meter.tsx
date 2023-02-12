/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Interest, InterestLevel, Skill, SkillLevel } from '../../model/Tech';
import { useComments } from './Comments';
import { MeterBar } from './MeterBar';
import { MeterBox } from './MeterBox';
import { MeterContainer } from './MeterContainer';

interface Props {
  element: Skill | Interest | undefined;
  position?: 'left' | 'right';
}

export const Meter = (props: Partial<Props>) => {
  /**@function meter return Bar jsx */
  const getMeterBar = (m: typeof props.element) => {
    switch (m?.constructor.name) {
      case 'Skill': {
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
      }
      case 'Interest': {
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
      }
      default:{
        console.error('not Interest or Skill set at',props.element?.constructor.name)
        return undefined
      };
    }
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
  const comments = useComments(props.element);

  return (
  
      <MeterContainer position={props.position}>
      {/**
       * @function MeterContainer > @function MeterBox > @function MeterBar
       */}
        {/*tech headers 🎩*/}
        <img src={props.element?.logo} alt='' /> {props.element?.tech}
        {/*colored meter bar 📶 */}
        <MeterBox>{getMeterBar(props.element)}</MeterBox>
        {comments}
      </MeterContainer>

  );
};
