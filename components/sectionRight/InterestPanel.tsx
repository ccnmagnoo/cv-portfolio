import React from 'react';
import { AppContext } from '../../redux/context';
import splitter from '../../utils/splitter';
import { TechCard } from '../sectionLeft/TechCard';

export const InterestPanel = () => {
  const { interest } = React.useContext(AppContext);
  const splitted = splitter(
    interest?.sort((a, b) => (a.interest - b.interest > 0 ? -1 : 1)),
    3
  );

  return (
    <article className='interest'>
      <h6>Current Interest</h6>
      {splitted?.map((e, i) => {
        return <TechCard key={i} techList={e} position='right' />;
      })}
    </article>
  );
};
