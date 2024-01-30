import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface INavHeaderButtonProps {
  onClick: () => void;
  icon: IconProp;
}
const NavHeaderButton = ({ onClick, icon }: INavHeaderButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`bg-primary-yellow flex items-center justify-center rounded-full shadow-2xl p-2`}
      >
        <FontAwesomeIcon icon={icon} className="h-[8vw] w-[8vw]" />
      </button>
    </>
  );
};

export default NavHeaderButton;
