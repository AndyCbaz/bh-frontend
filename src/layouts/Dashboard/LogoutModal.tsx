// Importaciones de fontawesome icons
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importaciones de componentes
import { Divider } from '../../components';
// Importaciones de interfaces
import { IStateMenuButtonHandlers } from '../../interfaces';
// Importaciones de react-router-dom
import { useNavigate } from 'react-router-dom';

interface ILogoutDrawerProps {
  setOpenLogout: React.Dispatch<React.SetStateAction<IStateMenuButtonHandlers>>;
}

const LogoutModal = ({ setOpenLogout }: ILogoutDrawerProps) => {
  // Hooks
  const navigate = useNavigate();

  // Hnadlers
  const handleLogOut = () => {
    setOpenLogout((prevState) => ({ ...prevState, logout: false }));
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <header className="bg-primary-gray-lighter mx-[2vh] my-2 flex justify-center rounded-2xl py-4">
        <FontAwesomeIcon
          className="h-[14vw] w-[14vw] rounded text-primary-yellow "
          icon={faFaceFrown}
        />
      </header>
      <section className="flex flex-col items-center gap-2 px-4">
        <h1 className="text-[5vw] font-bold">Think it over hunter...</h1>
        <p className="text-primary-gray-lighter text-center text-[4vw] font-bold">
          Are you sure you want to stop hunting?
        </p>

        <div className="mx-4 flex w-full flex-col">
          <Divider size={2} color="primary-gray-light" />
        </div>
      </section>
      <footer className="flex justify-around px-[3vh] py-[1.5vh]">
        <button
          className="custom-shadow rounded-full bg-primary-yellow px-[3vh] py-[1vh] font-bold text-black"
          onClick={handleLogOut}
        >
          Yes
        </button>
        <button
          className="custom-shadow rounded-full bg-black px-[3vh] py-[1vh] font-bold text-primary-yellow"
          onClick={() =>
            setOpenLogout((prevState) => ({
              ...prevState,
              logout: false,
            }))
          }
        >
          Nope
        </button>
      </footer>
    </>
  );
};

export default LogoutModal;
