/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Interest, InterestLevel, Skill, SkillLevel } from '../../model/Tech';
import { MeterBar } from './MeterBar';
import { MeterBox } from './MeterBox';
import { MeterContainer } from './MeterContainer';

interface Props {
  element: Skill | Interest | undefined;
}

export const Meter = (props: Partial<Props>) => {
  /**@function meter return Bar jsx */
  const meter = (m: typeof props.element) => {
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
          />
        );
      }
      default:
        return undefined;
    }
  };

  const getUpdate = (m: typeof props.element) => {
    if (m?.constructor.name === 'Skill') {
      const e = m as Skill;
      return e.update?.toDateString();
    } else {
      return undefined;
    }
  };

  return (
    <li className='meter'>
      <MeterContainer>
        {/*tech headers 🎩*/}
        <img src={props.element?.logo} alt='' /> {props.element?.tech}
        {/*colored meter bar 📶 */}
        <MeterBox>{meter(props.element)}</MeterBox>
      </MeterContainer>
    </li>
  );
};
