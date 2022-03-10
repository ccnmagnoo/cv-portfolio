import { NextComponentType } from 'next';
import React from 'react';
import { AppContext } from '../../redux/context';
import { Card } from './card';
import Lever from './lever';

const BigSwitch: NextComponentType = () => {
  const context = React.useContext(AppContext);

  return (
    <section className='bigSwitch'>
      <Lever>I&#39;m a Lever</Lever>

      <Card>
        <h4>{context.basicData?.name.toLocaleLowerCase()}</h4>
        <p>{context.basicData?.profesion}</p>
      </Card>
    </section>
  );
};

export default BigSwitch;
