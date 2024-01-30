import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faAnglesDown,
  faAnglesUp,
  faPlay,
  faSliders,
} from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import { NavigateFunction } from 'react-router-dom';
//Constantes

interface FloatingButtonsProps {
  navigate: NavigateFunction
}
const FloatingButtons:React.FC<FloatingButtonsProps> = ({navigate}) => {
  //Variables Reactivas
  const [openMoreFloatingButtons, setOpenMoreFloatingButtons] =
    useState<boolean>(false);
  //Constantes Reactivas
  const floatingButtons: { icon: IconProp; onClick: () => void }[] = [
    { icon: faPlay, onClick: () => {} },
    {
      icon: openMoreFloatingButtons ? faAnglesDown : faAnglesUp,
      onClick: () => {
        setOpenMoreFloatingButtons(!openMoreFloatingButtons);
      },
    },
    {
      icon: faSliders,
      onClick: () => {navigate('/app/filters')},
    },
  ];

  return (
    <>
      {floatingButtons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className={` flex items-center justify-center rounded-full ${
            index > 0 ? 'bg-primary-yellow' : 'bg-black'
          }  p-[2px] shadow-2xl ${
            !openMoreFloatingButtons && index > 1 ? 'hidden' : ''
          }`}
        >
          <FontAwesomeIcon
            className={`h-[6vw] w-[6vw] rounded-full border-2  p-2  ${
              index > 0
                ? 'border-primary-gray-dark text-primary-gray-dark'
                : 'border-primary-yellow text-primary-yellow'
            }`}
            icon={button.icon}
          />
        </button>
      ))}
    </>
  );
};

export default FloatingButtons;
