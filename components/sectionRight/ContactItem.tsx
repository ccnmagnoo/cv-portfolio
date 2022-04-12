/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Contact } from '../../model/Contact.inteface';
import Image from 'next/image';

interface Props {
  item?: Contact;
}

export const ContactItem = (props: Props) => {
  const { item } = props;

  return (
    <div className='contact'>
      <a href={item?.address} target='_blank' rel='noreferrer'>
        <div
          className='ico'
          style={{ backgroundImage: `url(${item?.icon!}?color=white)` }}
        />
      </a>
    </div>
  );
};
