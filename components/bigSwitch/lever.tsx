import React from 'react';
import { AppContext } from '../../redux/context';

interface Props {
  children?: React.ReactNode;
}

const Lever = (props: Props) => {
  const context = React.useContext(AppContext);
  const changeMode = () => {
    switch (context.appMode) {
      case 'dark': {
        return context.changeToLightMode;
      }
      case 'light': {
        return context.changeToDarkMode;
      }
      default:
        return undefined;
    }
  };

  return (
    <div className='lever' onClick={changeMode()}>
      {props.children}
    </div>
  );
};

export default Lever;
