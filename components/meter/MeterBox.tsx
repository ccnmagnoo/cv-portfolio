import React from 'react';
interface Props {
  children?: React.ReactNode;
  position?: 'left' | 'right';
}
export const MeterBox = (props: Props) => {
  return <div className='box'>{props.children}</div>;
};
