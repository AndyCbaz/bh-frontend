//Importacion de fontawesome icons
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Importacion de componentes
import { Avatar, Divider } from '../../components';
//Importacion de constantes
import { itemsVerticalMenu } from '../../constants/generalItems/VerticalMenu';
//Importacion de estilos
import '../../styles/Dashboard/layouts/VerticalMenu.css';
import { IVerticalMenuProps } from '../../interfaces';

const VerticalMenu = ({
  verticalMenuButtonHandlers: verticalMenuButtonHandler,
}: IVerticalMenuProps) => {
  return (
    <>
      <div className="verticalmenu-body">
        <header className="verticalmenu-header-infoprofile" id="avatar">
          <Avatar
            weight="w-[15vh]"
            height="w-[15vh]"
            src="https://res.cloudinary.com/dclbjyyfn/image/upload/v1688495085/BlockHunt/Drawer/Users/fotod_p7huhe.jpg"
          />
          <h1 className="text-[3vh] font-bold text-white">Andrés Bonilla</h1>
          <h1 className="text-[3vh] font-bold text-primary-gray-light">Fair</h1>
          <div className="py-2">
            <img
              src="https://res.cloudinary.com/dclbjyyfn/image/upload/v1688494803/BlockHunt/Drawer/Decoration/Group_47_hm2chg.png"
              alt="decoration-drawer-verticalmenu"
            />
          </div>
        </header>
        <nav className="verticalmenu-nav">
          {itemsVerticalMenu.map((item, index) => (
            <button
              key={index}
              onClick={() => verticalMenuButtonHandler.open[0](item.path)}
              className="flex items-center justify-start gap-4"
            >
              <div className="flex w-1/6 justify-center">
                <FontAwesomeIcon
                  style={{ color: '#BBBBBB', width: '5vw', height: '5vw' }}
                  icon={item.icon}
                />
              </div>
              <h1 className="text-[4.5vw] font-semibold text-primary-gray-light">
                {item.title}
              </h1>
            </button>
          ))}
        </nav>
        <Divider color="primary-gray-ligth" size={1} />
        <footer className="verticalmenu-footer">
          <button
            onClick={verticalMenuButtonHandler.open[1]}
            className="flex items-center justify-start gap-4"
          >
            <div className="flex w-1/6 justify-center">
              <FontAwesomeIcon
                style={{ color: '#BBBBBB', width: '5vw', height: '5vw' }}
                icon={faRightFromBracket}
              />
            </div>
            <h1 className="text-[4.5vw] font-semibold text-primary-gray-light">
              Log out
            </h1>
          </button>
        </footer>
      </div>
    </>
  );
};

export default VerticalMenu;
