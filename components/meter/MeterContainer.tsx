import React from 'react';
interface Props {
  children?: React.ReactNode;
  position?: 'left' | 'right';
}
export const MeterContainer = (props: Props) => {
  return <div className={`container ${props.position ?? 'left'}`}>{props.children}</div>;
};
