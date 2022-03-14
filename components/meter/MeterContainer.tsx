import React from 'react';
interface Props {
  children?: React.ReactNode;
}
export const MeterContainer = (props: Props) => {
  return <div className='container'>{props.children}</div>;
};
