import React from 'react';
import { Interest, Skill, TechType } from '../../model/Tech';
import { Meter } from '../meter/Meter';

/**
 * @function TechCard requires a specific
 * @param children? optional header
 * @param filter TechType enum,
 * @param techList array Skill[] or Interest[]
 *
 */
interface Props {
  children?: React.ReactNode;
  filter: TechType;
  techList?: Skill[] | Interest[];
}

export const TechCard = (props: Props) => {
  return (
    <article>
      {props.children}
      <ul>
        {props.techList
          ?.sort((a, b) => {
            if (a.constructor.name === 'Skill') {
              const [e1, e2] = [a as Skill, b as Skill];
              return e1.level > e2.level ? -1 : 1;
            } else {
              const [e1, e2] = [a as Interest, b as Interest];
              return e1.interest - e2.interest ? -1 : 1;
            }
          })
          .map((e, i) => {
            if (e.types === props.filter) {
              return <Meter key={i} element={e} />;
            }
          })}
      </ul>
    </article>
  );
};
