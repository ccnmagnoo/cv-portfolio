import { NextComponentType } from 'next';
import Image from 'next/image';
import React from 'react';
import { AppContext } from '../../redux/context';
import { Card } from './card';
import Lever from './lever';

const BigSwitch: NextComponentType = () => {
  const context = React.useContext(AppContext);
  const [first, second, father, mother]: string[] = context.basicData?.name as string[];

  return (
    <section className='bigSwitch'>
      <Lever>
        <div id='profile-image'>img</div>
      </Lever>

      <Card>
        <h4>
          {first} {second}
        </h4>
        <h4>
          {father} {mother}
        </h4>
        <p>{context.basicData?.profession}</p>
      </Card>
    </section>
  );
};

export default BigSwitch;
