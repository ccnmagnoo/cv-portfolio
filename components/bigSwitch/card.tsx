import { motion } from 'framer-motion';
import React from 'react';

import { AppContext } from '../../redux/context';

export const Card = () => {
  const context = React.useContext(AppContext);
  return (
    <div className='card'>
      Title <br /> subtitle
    </div>
  );
};
