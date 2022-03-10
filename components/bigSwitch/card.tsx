import { motion } from 'framer-motion';
import React from 'react';

import { AppContext } from '../../redux/context';

interface Props {
  children?: React.ReactNode;
}

export const Card = (props: Props) => {
  const context = React.useContext(AppContext);
  return (
    <div className='card'>
      <motion.div
        className='canvas'
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 5, -5, 0],
          borderRadius: ['5px', '50px', '1000px', '50px', '5px'],
        }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};
