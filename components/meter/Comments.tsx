import React from 'react';
import { Interest, Skill } from '../../model/Tech';
import moment from 'moment';

export const useComments = (element?: Skill | Interest) => {
  const [e, setE] = React.useState<Skill | Interest | undefined>(element);

  const getDialog = (e: typeof element) => {
    if (e?.constructor.name === 'Skill') {
      const element = e as Skill;
      return (
        <article className='commentDialog'>
          <h6>last update</h6>
          <p>{moment(element.update).startOf('day').fromNow()}</p>
          <p>{element.comment}</p>
        </article>
      );
    } else {
      undefined;
    }
  };

  return getDialog(e);
};
