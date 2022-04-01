/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface Props {
  min: number;
  max: number;
  value: number;
  tag: string;
  logo: string;
  size: number;
  update: Date;
  position: 'left' | 'right';
}

export const MeterBar = (props: Partial<Props>) => {
  const { min, max, value, tag, logo, size, update, position } = props;

  const relativeSize = Math.floor(((value ?? 0) / (max ?? 1)) * 100);

  return (
    <div
      className={`bar ${position ?? 'left'}`}
      style={{ width: `${relativeSize}%` }}
      // data-width={`${relativeSize}%`}
    ></div>
  );
};
