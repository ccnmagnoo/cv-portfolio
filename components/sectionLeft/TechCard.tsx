import React from 'react';
import { Interest, Skill, TechType } from '../../model/Tech';
import { Meter } from '../meter/Meter';

interface Props {
  children?: React.ReactNode;
  filter: TechType;
  techList?: Skill[] | Interest[];
}

/**@function TechCard requires a specific
 * @param children? optional header
 * @param filter TechType enum,
 * @param techList array Skill[] or Interest[]
 *
 */
export const TechCard = (props: Props) => {
  return (
    <article>
      {props.children}
      <ul>
        {props.techList?.map((e, i) => {
          if (e.types === props.filter) {
            return <Meter key={i} element={e} />;
          }
        })}
      </ul>
    </article>
  );
};
