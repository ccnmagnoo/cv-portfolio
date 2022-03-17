import React from 'react';
import { Interest, Skill } from '../../model/Tech';

export const useComments = (element?: Skill | Interest) => {
  const [e, setE] = React.useState<Skill | Interest | undefined>(element);

  const getDialog = (e: typeof element) => {
    if (e?.constructor.name === 'Skill') {
      const element = e as Skill;
      return (
        <article className='commentDialog'>
          <p>last update :{element.update.toDateString()}</p>
          <p>{element.comment}</p>
        </article>
      );
    } else {
      undefined;
    }
  };

  return getDialog(e);
};
