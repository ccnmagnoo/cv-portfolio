import { NextComponentType } from 'next';
import React from 'react';
import st from '../../styles/Home.module.css';
interface Props {
  children?: React.ReactNode;
}
const Lever = (props: Props) => {
  return <div className={st.lever}>{props.children}</div>;
};

export default Lever;
