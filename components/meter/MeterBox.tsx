import React from 'react';
interface Props {
  children?: React.ReactNode;
}
export const MeterBox = (props: Props) => {
  return <div className='box'>{props.children}</div>;
};
